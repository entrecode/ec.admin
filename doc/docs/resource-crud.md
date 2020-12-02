---
id: resource-crud
title: Resource CRUD
slug: /resource-crud
---

As an alternative to [useDatamanager](../hooks#usedatamanager), which is only capable of providing entries of a single datamanager's models, we could use a different approach to resolve any [Resource](https://entrecode.github.io/ec.sdk/#resource). We can respresent any ec resource with a string and resolve it with [getResource](./get-resource).

## Example

```js
import React from 'react';
import { Admin, Resource, Loading, ListGuesser, EditGuesser } from 'react-admin';
import { useSession, themes } from '../lib';
import { useResources } from '../src/hooks/useResources';

const App = () => {
  const dataProvider = useResources('stage');
  const authProvider = useSession();
  if (!dataProvider || !authProvider) {
    return <Loading />;
  }
  return (
    <Admin dataProvider={dataProvider} authProvider={authProvider} theme={themes.light}>
      <Resource name="template" list={ListGuesser} edit={EditGuesser} />
      <Resource name="dataManager" list={ListGuesser} edit={EditGuesser} />
      <Resource name="dataManager|73538731-4ac3-4a1a-b3b5-e31d09e94d42|model" list={ListGuesser} edit={EditGuesser} />
      <Resource
        name="dataManager|73538731-4ac3-4a1a-b3b5-e31d09e94d42|assetGroup"
        list={ListGuesser}
        edit={EditGuesser}
      />
      <Resource
        name="dataManager|73538731-4ac3-4a1a-b3b5-e31d09e94d42|assetGroup|test|dmAsset"
        list={ListGuesser}
        edit={EditGuesser}
      />
    </Admin>
  );
};

export default App;
```

Here, we are using useResources + resource names that are a "path" of relations and ids.

## What's missing

- Only Guesser components used so far. As all resource properties (excluding models) are static We could add List, Edit, Create and Show components for existing resources. But this can also be implemented in "user land", when needed.
- [Caching](./resource-caching)
- [Localization](./resource-localization)
- Entries are not available as relations (part of public api). The dataProvider should be able to accept resources like `dataManager|2b5c50c8|model|ld_order|entry|YZQRmwDxk9`