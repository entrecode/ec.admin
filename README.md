# ec.admin

entrecode flavoured components for [react-admin](https://marmelab.com/react-admin/).

## Get Started

This is how you create a new project with ec.admin.

### 1. Init react-app

```sh
npx create-react-app ec.admin-app --template typescript --use-npm
cd ec.admin-app
npm i --save ec.admin react-admin ec.sdk ra-customizable-datagrid
```

### 2. Setup ec.admin

For ec.sdk to work, prepend "HTTPS=true" to package.json#scripts.start:

```js
{
  "start": "HTTPS=true react-scripts start"
  /* .. */
}
```

### 3. Code

Here is a minimal setup for ec.admin:

```tsx
import React from 'react';
import { Admin, Resource, Loading } from 'react-admin';
import { useSession, useDatamanager, entryCrud } from 'ec.admin';

const App = () => {
  const dataProvider = useDatamanager('73538731-4ac3-4a1a-b3b5-e31d09e94d42'); // datamanagerID
  const authProvider = useSession();
  if (!dataProvider || !authProvider) {
    return <Loading />;
  }
  return (
    <Admin dataProvider={dataProvider} authProvider={authProvider}>
      <Resource name={'muffin'} {...entryCrud} />
      <Resource name={'baker'} {...entryCrud} />
      <Resource name={'field_test'} {...entryCrud} />
    </Admin>
  );
};
export default App;
```

Here, just add the models you want as a Resource.

Important: If a resource contains any references (entry / entries fields), you MUST add the referenced models too. To hide an untwanted model from the sidebar, just set list to undefined (or do not use entryCrud spread syntax).

## Provider Hooks

Using hooks, you can obtain the following providers:

### useDatamanager(datamanagerID, env?, ecUser?) [show source](https://github.com/entrecode/ec.admin/blob/master/src/useDatamanager.tsx)

Returns [dataProvider](https://marmelab.com/react-admin/Admin.html#dataprovider) that internally uses [PublicAPI](https://entrecode.github.io/ec.sdk/#publicapi). See "Get Started" for usage.

### useSession(env?, clientID?) [show source](https://github.com/entrecode/ec.admin/blob/master/src/useSession.tsx)

Returns [authProvider](https://marmelab.com/react-admin/Admin.html#authprovider) that internally uses [Session](https://entrecode.github.io/ec.sdk/#session) and [Accounts](https://entrecode.github.io/ec.sdk/#accounts). See "Get Started" for usage.

## CRUD Components

### entryCrud [show source](https://github.com/entrecode/ec.admin/blob/master/src/entryCrud.tsx)

Collection of generic crud components for entries. Intended to be used on a [Resource](https://marmelab.com/react-admin/Resource.html) using spread syntax:

```jsx
<Resource name={'muffin'} {...entryCrud} />
```

- list: [EntryList](https://github.com/entrecode/ec.admin/blob/master/src/EntryList.tsx)
- create: [EntryCreate](https://github.com/entrecode/ec.admin/blob/master/src/EntryCreate.tsx)
- edit: [EntryEdit](https://github.com/entrecode/ec.admin/blob/master/src/EntryEdit.tsx)
- show: [EntryShow](https://github.com/entrecode/ec.admin/blob/master/src/EntryShow.tsx)

### Custom Views

If you want to use a custom component for any view, you can replace the generic crud component by override its prop on the desired [Resource](https://marmelab.com/react-admin/Resource.html):

```jsx
<Resource name={'muffin'} {...entryCrud} list={MuffinList} />
```

This will render `MuffinList` as custom list view. Of course, this is possible with any crud prop.

The easiest way to implement a custom view is to copy the generic component and adjust the parts that should be custom. To understand how the different views work, read on.

### EntryList [show source](https://github.com/entrecode/ec.admin/blob/master/src/EntryList.tsx)

Implements generic [List](https://marmelab.com/react-admin/List.html) for entries.

- renders all model fields as a [CustomizableDatagrid](https://github.com/fizix-io/ra-customizable-datagrid) (according to field config)
- each field is rendered using TypeField (see below)
- supports pagination, sorting, filtering + persistent field visibility. Fetches data via dataProvider#getList (which calls PublicAPI#entryList).
- supports all field types, except account + roles
- provides a [filter](https://marmelab.com/react-admin/List.html#the-filter-buttonform-combo) for each filterable field.
- opens edit on click + has create button action.

### EntryEdit [show source](https://github.com/entrecode/ec.admin/blob/master/src/EntryEdit.tsx)

Implement generic [Create and Edit](https://marmelab.com/react-admin/CreateEdit.html) views for a single entry.

- renders TypeInput for each field (according to field config)
- disables readOnly fields
- currently only limited validation support
- supports all field types except account, roles and entry/asset fields without validation.
- contains delete button

### EntryCreate [show source](https://github.com/entrecode/ec.admin/blob/master/src/EntryCreate.tsx)

Just like EntryEdit, just no readOnly fields and no delete button.

### EntryShow [show source](https://github.com/entrecode/ec.admin/blob/master/src/EntryShow.tsx)

Implements [Show](https://marmelab.com/react-admin/Show.html) view for a single entry.

- renders field label + TypeField for each field (according to config).

## Helper Components

### useFields hook [show source](https://github.com/entrecode/ec.admin/blob/master/src/useFields.tsx)

Returns fieldConfig for given model. Appends system fields "id", "\_created" and "\_modified".
Use it as second argument of fieldProps or inputProps.

TBD: rename to useModelConfig? useFields maybe confusing as it can be used with fields and inputs.

### fieldProps(field, fieldConfig) [show source](https://github.com/entrecode/ec.admin/blob/master/src/fields/fieldProps.tsx)

Returns entry field props that can be passed to a [Field](https://marmelab.com/react-admin/Fields.html).
Automatically populates field type specific data. Expects fieldConfig as obtained from useFields hook.

### inputProps(field, fieldConfig) [show source](https://github.com/entrecode/ec.admin/blob/master/src/inputs/inputProps.tsx)

Returns entry field props that can be passed to an [Input](https://marmelab.com/react-admin/Inputs.html).
Automatically populates input type specific data. Expects fieldConfig as obtained from useFields hook.

### TypeField [show source](https://github.com/entrecode/ec.admin/blob/master/src/fields/TypeField.tsx).

Entry specific [Field](https://marmelab.com/react-admin/Fields.html) implementation. Renders the value of an entry field depending on its [type](https://doc.entrecode.de/data_manager/#field-data-types). Used in EntryList and EntryShow.

### TypeInput [show source](https://github.com/entrecode/ec.admin/tree/master/src/inputs)

Entry specific [Input](https://marmelab.com/react-admin/Inputs.html) implementation. Renders the form input of an entry field depending on its [type](https://doc.entrecode.de/data_manager/#field-data-types). Used in EntryCreate, EntryEdit.

### TypeFilter [show source](https://github.com/entrecode/ec.admin/blob/master/src/filters/TypeFilter.tsx)

Entry specific [Input](https://marmelab.com/react-admin/Inputs.html) Implementation. Renders the filter input of an entry field depending on its [type](https://doc.entrecode.de/data_manager/#field-data-types). Used in EntryListFilter.

## TBD

There is more in the making:

### localization

- LocaleSwitcher
- i18nProvider

### themes

- themes.light
- themes.dark

## dev setup

- clone ec.admin repo
- run "yarn link" in ec.admin root
- go to other project (e.g. light.react-admin)
- run "yarn link ec.admin"
- run yarn start
- After every change in ec.admin, the "yarn build" needs to run. TODO: create watcher script
- problem: yarn build needs node_modules to build, but the other projects will be confused by node_modules inside a package (two react versions). As a current workaround, I created the hackybuild.js script which temporarily renames node_modules to \_node_modules ... dont tell anyone
