---
id: resource-groups
title: Resource Groups
slug: /resource-groups
---

A common usecase is to have multiple datamanagers with models of the same structure, which may have been created from the same template. How can assemble them into the same ui?

### Seperate Resources

The easiest way is to use multiple resources:

```js
const App = () => {
  const dataProvider = useResources('stage');
  const authProvider = useSession();
  if (!dataProvider || !authProvider) {
    return <Loading />;
  }
  return (
    <Admin dataProvider={dataProvider} authProvider={authProvider}>
      <Resource name={'dataManager|2b5c50c8|model|ld_order|entry'} {...entryCrud} />
      <Resource name={'dataManager|04306d2a|model|ld_order|entry'} {...entryCrud} />
      {/* more */}
    </Admin>
  );
};
```

This will use seperate lists for each datamanagers model.

### Resource Group

As we might want a unified list, we can use a grouped resource:

```js
const App = () => {
  const dataProvider = useResources('stage');
  const authProvider = useSession();
  if (!dataProvider || !authProvider) {
    return <Loading />;
  }
  return (
    <Admin dataProvider={dataProvider} authProvider={authProvider}>
      <Resource name={'dataManager|$dmID|model|ld_order|entry'} {...entryCrud} />
      {/* more */}
    </Admin>
  );
};
```

Now, we have a single resource where the dataManager id has been replaced with the varaible "$dmID".
If we visit the list, no items will be loaded. To load the items of a specific dataManager,
we need to pass a shortID to params.filter.$dmID.
In the UI, we can use a dropdown to show a list of dataManagers to choose.
If an item is clicked, we need to route to the specific resource (with dmID filled in).
=> this requires us to also add each specific Resource to the Admin component.
