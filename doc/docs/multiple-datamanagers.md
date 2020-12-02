---
id: multiple-datamanagers
title: Multiple Datamanagers
slug: /multiple-datamanagers
---

As often required (e.g. clubapp.admin, light.admin), an admin should be able to work with multiple datamanagers at the same time. The current approach with [useDatamanager](./hooks#usedatamanager) does only support one datamanager.

## Problem

react-admin is only intended to be used with a flat resource structure. That means, the routes will always be:

```txt
"/" => default route / dashboard
"/:resource" => resource list
"/:resource/:id" => resource detail
```

When targetting multiple datamanagers, we are dealing with a deep structure:

```sh
/:datamanager/:model/:entry
```

The above routing cannot map this structure out of the box. So, to solve this, we either need

1. Nested Resources Feature in react-admin, which is currently not planned, see [here](https://github.com/marmelab/react-admin/issues/261) and [here](https://stackoverflow.com/questions/54255057/support-for-resource-nesting)
2. the nesting as part of :resource and/or :id + a data provider that handles it
3. the admin as a subroute of a [custom routing](https://marmelab.com/react-admin/CustomApp.html)

As #1 is unlikely and #3 requires a lot of customization work, let's look at #2.

## Solution

As sugessted [here](https://github.com/marmelab/react-admin/issues/261#issuecomment-276427073), we can make the entry list work when passing the dataManagerID as a filter param:

```js
// DataManagerFilter
import React from 'react';
import { Filter, SelectInput } from 'react-admin';

export const DataManagerFilter = (props) => (
  <Filter {...props}>
    <SelectInput
      alwaysOn
      source="dataManagerID"
      choices={[
        // could also be dynamically loaded from a dataManager resource
        { id: '2b5c50c8', name: 'light.benu' },
        { id: '04306d2a', name: 'light.demo' },
        { id: '903a09ad', name: 'light.someShop' },
      ]}
    />
  </Filter>
);
```

### List

The filter can then be used in a custom list:

```js
export const OrderList = (props) => (
  <List {...props} filters={<DataManagerFilter />}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="email" />
    </Datagrid>
  </List>
);
// Fields could also be dynamically loaded
```

### getList

Finally, the dataManagerID must be handled by the dataProvider:

```js
import dataProvider from './dataProvider'; // existing provider for a single datamanager

const dmProvider = {
  getList: async (resource, params) => {
    const { filter } = params;
    if (!filter.dataManagerID) {
      console.warn('no dataManagerID given as filter');
      return { data: [], total: 0 }; // empty list
    }
    const dataManagerID = filter.dataManagerID;
    delete filter.dataManagerID; // delete from filter as dataManagerID is not a real field
    const p = await dataProvider(dataManagerID, env, true); // use existing single datamanager provider
    return await p.getList(resource, { ...params, filter });
  },
};
```

The above provider just handles the dataManagerID filter, while the rest of the logic can be delegated to dataProvider.

### Edit

Now for the Edit view:

```js
import React from 'react';
import { Edit, SimpleForm, TextInput } from 'react-admin';

export const OrderEdit = (props) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source="id" />
        <TextInput source="name" />
        <TextInput source="email" />
      </SimpleForm>
    </Edit>
  );
};
// Fields could also be dynamically loaded
```

### getOne

The Edit component will trigger dataProvider.getOne to be loaded. The Problem: We do not have a filter param, as it is only part of List. We need some way to pass the dataManagerID.. Solution: Use "absolute" entry ids of the form "shortID|entryID":

```js
const dmProvider = {
  getList: async (resource, params) => {
    /* ... */
    const { data, total } = await p.getList(resource, { ...params, filter });
    return {
      data: data.map((entry) => ({
        ...entry,
        id: `${dataManagerID}|${entry.id}`,
      })),
      total,
    };
  },
};
```

These ids can then be split in getOne:

```js
const dmProvider = {
  getOne: async (resource, params) => {
    const [dataManagerID, id] = params.id.split('|');
    const p = await dataProvider(dataManagerID, env, true); // use existing dataProvider
    const { data } = await p.getOne(resource, { ...params, id }); // pass only entryID
    return { data: { ...data, id: `${dataManagerID}|${data.id}` } }; // add dmID again
  },
};
```

### App

The best thing about this: It actually works! The App code looks like this:

```js
const App = () => {
  const dataProvider = useAsyncProvider(dmProvider, 'stage');
  const authProvider = useSession();
  if (!dataProvider || !authProvider) {
    return <Loading />;
  }
  return (
    <Admin dataProvider={dataProvider} authProvider={authProvider} theme={themes.light}>
      <Resource name="ld_order" list={OrderList} edit={OrderEdit} />
    </Admin>
  );
};
export default App;
```

## Whats missing

- Create: how to know which dm to use when having no id?
- A way to load the field config dynamically. EntryList / EntryEdit do not work without a static PublicAPI available at dataProvider.api.
- [Caching](./resource-caching) (new PublicAPI is created everytime)
