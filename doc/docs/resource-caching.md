---
id: resource-caching
title: Resource Caching
slug: /resource-caching
---

Without any caching, [getResource](./get-resource) is kind of request intensive, as the complete tree of resources is recreated from the root everytime it is called from the provider. Optimally, we would need to keep a state that remembers already resolved resources, which could be passed to getResource. In the best case, we then only need to resolve the last resource in the path.

## Problem

If we request "dataManager|73538731-4ac3-4a1a-b3b5-e31d09e94d42|assetGroup|test|dmAsset", the needed calls are:

```js
let api = new DataManager(env);
// getResource('dataManager|73538731-4ac3-4a1a-b3b5-e31d09e94d42|assetGroup|test|dmAsset'.split('|'), api)
api = api.resource('dataManager', '73538731-4ac3-4a1a-b3b5-e31d09e94d42');
api = api.resource('assetGroup', 'test');
api.resourceList('dmAsset');
```

If we now request "dataManager|73538731-4ac3-4a1a-b3b5-e31d09e94d42|assetGroup|uploads|dmAsset", the same call structure is repeated:

```js
let api = new DataManager(env);
// getResource('dataManager|73538731-4ac3-4a1a-b3b5-e31d09e94d42|assetGroup|uploads|dmAsset'.split('|'), api)
api = api.resource('dataManager', '73538731-4ac3-4a1a-b3b5-e31d09e94d42'); // redundant
api = api.resource('assetGroup', 'uploads'); // only difference
api.resourceList('dmAsset');
```

## Possible Solution

So it would be good to have something like:

```js
const api = new DataManager(env);
const cachedDm = await api.resource('dataManager', '73538731-4ac3-4a1a-b3b5-e31d09e94d42');
getResource('dataManager|73538731-4ac3-4a1a-b3b5-e31d09e94d42|assetGroup|test|dmAsset'.split('|'), {
  'dataManager|73538731-4ac3-4a1a-b3b5-e31d09e94d42': cachedDm,
});
getResource('dataManager|73538731-4ac3-4a1a-b3b5-e31d09e94d42|assetGroup|uploads|dmAsset'.split('|'), {
  'dataManager|73538731-4ac3-4a1a-b3b5-e31d09e94d42': cachedDm,
});
```

Here, the second argument is a "cache". The call structure could then be:

```js
// first call of getResource
api = cache['dataManager|73538731-4ac3-4a1a-b3b5-e31d09e94d42']; // cachedDm
api = api.resource('assetGroup', 'test'); // only difference
api.resourceList('dmAsset');
// second call of getResource
api = cache['dataManager|73538731-4ac3-4a1a-b3b5-e31d09e94d42']; // cachedDm
api = api.resource('assetGroup', 'uploads'); // only difference
api.resourceList('dmAsset');
```

### Automatic Caching

Above, cachedDm was created from the outside, but getResource should also populate cache entries by itself:

```js
const cache = {};
getResource('dataManager|73538731-4ac3-4a1a-b3b5-e31d09e94d42|assetGroup|test|dmAsset', cache);
// cache now contains keys:
// - dataManager|73538731-4ac3-4a1a-b3b5-e31d09e94d42
// - dataManager|73538731-4ac3-4a1a-b3b5-e31d09e94d42|assetGroup|test

getResource('dataManager|73538731-4ac3-4a1a-b3b5-e31d09e94d42|assetGroup|uploads|dmAsset', cache);
// uses "dataManager|73538731-4ac3-4a1a-b3b5-e31d09e94d42" from cache
// cache now contains keys:
// - dataManager|73538731-4ac3-4a1a-b3b5-e31d09e94d42
// - dataManager|73538731-4ac3-4a1a-b3b5-e31d09e94d42|assetGroup|test
// - dataManager|73538731-4ac3-4a1a-b3b5-e31d09e94d42|assetGroup|uploads
```

Note that the cache will only cache single resources (even path length)

### Cache limit

The above cache would also need some kind of limitation that will eventually reload cached resources after a certain time, the format could altered to:

```js
{
  'dataManager|73538731-4ac3-4a1a-b3b5-e31d09e94d42|assetGroup|test|dmAsset': { timestamp, value }
}
```

getResource then takes a cacheTimeout argument that is considered for each cache entry.

## Should this logic really be in the front end?

Optimally, this logic would either be part of the ec.sdk, or even on the server side. It does not feel right to implement that as part of a client. The goal: Be able to resolve any resource with 1 request. Currently, ec.sdk expects the client to make one request for each level of the tree that is leading to the target resource. This requires to keep some kind of state that keeps track of the levels of the tree. I think it would be much easier if that state logic would be part of ec.sdk or the server. The client could then just make 1 request for the target resource, while the server will reuse the cached tree levels.
