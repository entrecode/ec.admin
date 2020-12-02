---
id: get-resource
title: getResource
slug: /get-resource
---

The following method resolves any resource from a unique name string:

```js
async function getResource(path: string[], api: Resource | Core) {
  const relations = api.getAvailableRelations();
  if (path.length === 1) {
    const { id, creatable } = relations[path[0]];
    const data = await api.resourceList(path[0]);
    return { data, id };
  }
  const resource = await api.resource(path[0], path[1]);
  if (path.length === 2) {
    const { id, creatable } = relations[path[0]];
    return { data: resource, id, creatable };
  }
  return getResource(path.slice(2), resource);
}
```

Example usage:

```js
const dm = new DataManager('stage');
const dataManagers = await getResource(['dataManager'], dm);
const adminDatamanager = await getResource(['dataManager', '73538731-4ac3-4a1a-b3b5-e31d09e94d42'], dm);
const adminModels = await getResource(['dataManager', '73538731-4ac3-4a1a-b3b5-e31d09e94d42', 'model'], dm);
const testAssets = await getResource(
  ['dataManager', '73538731-4ac3-4a1a-b3b5-e31d09e94d42', 'assetGroup', 'test', 'dmAsset'],
  dm
);
// with divided string
const testAssets = await getResource(
  'dataManager|73538731-4ac3-4a1a-b3b5-e31d09e94d42|assetGroup|test|dmAsset'.split('|'),
  dm
);
```

Idea:

- every even index of the path represents a relation
- every odd index of the path represents an identifier
- odd path lengths return resourceLists
- even path lengths return single resources
- using strings, we can create unique resource names
