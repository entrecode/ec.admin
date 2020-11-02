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

### 2. Start Dev Server

For ec.sdk auth to work, prepend "HTTPS=true" to package.json#scripts.start:

```js
{
  "start": "HTTPS=true react-scripts start"
  /* .. */
}
```

now you can run `npm start`.

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

Important: If a resource contains any references (entry / entries fields), you MUST add the referenced models too. To hide an untwanted model from the sidebar, just set list to undefined (or do not use entryCrud spread syntax and omit list prop).

### 4. Have fun

After saving, and logging in with your ec.account (stage), you should see the this:

![react-admin demo](./demo.gif).

You are now ready to customize the admin, using ec.admin as an adapter between ec.sdk and react-admin.

For inspiration, you should check out [light.react-admin](https://github.com/entrecode/light.react-admin/blob/develop/src/App.tsx), where ec.admin is already in use.

## Localization

To set the language and setup labels for fields, you can use i18nProvider. Example:

```js
// App.tsx
import domainMessages from './i18n';
import germanMessages from 'ra-language-german';
import polyglotI18nProvider from 'ra-i18n-polyglot';

const messages = {
  de: { ...germanMessages, ...domainMessages.de }, // add more languages here
};
const i18nProvider = polyglotI18nProvider((locale) => {
  return messages[locale];
}, 'de');

const App = () => {
  /* .. */
  return <Admin i18nProvider={i18nProvider}>{/* stuff */}</Admin>;
};
```

example domainMessages:

```js
import germanMessages from 'ra-language-german';

export default {
  de: {
    resources: {
      muffin: {
        name: 'Muffin |||| Muffins',
        fields: {
          name: 'Name',
          amazement_factor: 'Amusement',
          _created: 'Erstellt',
          _modified: 'Bearbeitet',
        },
      },
      // ... more resources
    },
    // the following is just relevant for german:
    ra: {
      ...germanMessages.ra,
      page: {
        ...germanMessages.ra.page,
        loading: 'Bin Laden',
      },
    },
  },
};
```

For more info, check out [ra translation doc](https://marmelab.com/react-admin/Translation.html).
There is also a tutorial on how to add a language switcher

## Theming

To theme the admin, use Admin theme prop:

```js
// App.tsx
import { themes } from 'ec.admin';
/* more imports */

const App = () => {
  /* .. */
  return <Admin theme={themes.dark}>{/* stuff */}</Admin>;
};
```

Checkout [ra theme docs](https://marmelab.com/react-admin/Theming.html) for more info.

## Provider Hooks

Using hooks, you can obtain the following providers:

### useDatamanager(datamanagerID, env?, ecUser?) [show source](https://github.com/entrecode/ec.admin/blob/master/src/useDatamanager.tsx)

Returns [dataProvider](https://marmelab.com/react-admin/Admin.html#dataprovider) that internally uses [PublicAPI](https://entrecode.github.io/ec.sdk/#publicapi). See "Get Started" for usage.

### useSession(env?, clientID?) [show source](https://github.com/entrecode/ec.admin/blob/master/src/useSession.tsx)

Returns [authProvider](https://marmelab.com/react-admin/Admin.html#authprovider) that internally uses [Session](https://entrecode.github.io/ec.sdk/#session) and [Accounts](https://entrecode.github.io/ec.sdk/#accounts). See "Get Started" for usage.

## CRUD Components

### entryCrud [show source](https://github.com/entrecode/ec.admin/blob/master/src/entryCrud.tsx)

Collection of generic CRUD components for entries. Intended to be used on a [Resource](https://marmelab.com/react-admin/Resource.html) using spread syntax:

```jsx
<Resource name={'muffin'} {...entryCrud} />
```

- list: [EntryList](https://github.com/entrecode/ec.admin/blob/master/src/EntryList.tsx)
- create: [EntryCreate](https://github.com/entrecode/ec.admin/blob/master/src/EntryCreate.tsx)
- edit: [EntryEdit](https://github.com/entrecode/ec.admin/blob/master/src/EntryEdit.tsx)
- show: [EntryShow](https://github.com/entrecode/ec.admin/blob/master/src/EntryShow.tsx)

### Custom Views

If you want to replace a generic CRUD view with a custom component, you can override its prop on the desired [Resource](https://marmelab.com/react-admin/Resource.html):

```jsx
<Resource name={'muffin'} {...entryCrud} list={MuffinList} />
```

This will render `MuffinList` as custom list view. Of course, this is possible with any crud prop.

The easiest way to implement a custom view is to copy the generic component and adjust the parts that should be custom. To understand how the different views work, read on.

### EntryList [show source](https://github.com/entrecode/ec.admin/blob/master/src/EntryList.tsx)

Implements generic [List](https://marmelab.com/react-admin/List.html) for entries.

- renders all model fields as a [CustomizableDatagrid](https://github.com/fizix-io/ra-customizable-datagrid) (according to field config)
- each field is rendered as a [TypeField](https://github.com/entrecode/ec.admin/blob/master/src/fields/TypeField.tsx)
- supports pagination, sorting, filtering + persistent field visibility.
- supports all field types, except account + roles
- provides a [filter](https://marmelab.com/react-admin/List.html#the-filter-buttonform-combo) for each filterable field.
- opens edit on click + has create button action.

### EntryEdit [show source](https://github.com/entrecode/ec.admin/blob/master/src/EntryEdit.tsx)

Implement generic [Create](https://marmelab.com/react-admin/CreateEdit.html) views for a single entry.

- renders a [TypeInput](https://github.com/entrecode/ec.admin/blob/master/src/inputs/TypeInput.tsx) for each field (according to field config)
- disables readOnly fields
- currently only limited validation support
- supports all field types except account, roles and entry/asset fields without validation.
- contains delete button

### EntryCreate [show source](https://github.com/entrecode/ec.admin/blob/master/src/EntryCreate.tsx)

Like EntryEdit, just for [Create](https://marmelab.com/react-admin/CreateEdit.html), without readOnly fields and without delete button.

### EntryShow [show source](https://github.com/entrecode/ec.admin/blob/master/src/EntryShow.tsx)

Implements [Show](https://marmelab.com/react-admin/Show.html) view for a single entry.

- renders field label + TypeField for each field (according to config).

## Helpers

### useFields hook [show source](https://github.com/entrecode/ec.admin/blob/master/src/useFields.tsx)

Returns fieldConfig for given model. Appends system fields "id", "\_created" and "\_modified".
Intended for usage as second argument for fieldProps / inputProps or as fieldConfig prop of EntryListFilter. Example:

<!-- TODO: rename to useModelConfig? useFields maybe confusing as it can be used with fields and inputs. -->

```js
export const MyList = (props) => {
  let { fieldConfig, defaultColumns } = useFields(props.resource);
  if (!fieldConfig) {
    return <Loading />;
  }
  /*
    do something with fieldConfig
  */
};
```

### fieldProps(field, fieldConfig) [show source](https://github.com/entrecode/ec.admin/blob/master/src/fields/fieldProps.tsx)

Returns entry field props that can be passed to a [Field](https://marmelab.com/react-admin/Fields.html).
Automatically populates field type specific data. Expects fieldConfig as obtained from useFields hook.

```jsx
<TextField {...fieldProps('name', fieldConfig)} />
```

### inputProps(field, fieldConfig) [show source](https://github.com/entrecode/ec.admin/blob/master/src/inputs/inputProps.tsx)

Returns entry field props that can be passed to an [Input](https://marmelab.com/react-admin/Inputs.html).
Automatically populates input type specific data. Expects fieldConfig as obtained from useFields hook.

```jsx
<TextInput {...inputProps('name', fieldConfig)} />
```

### TypeField [show source](https://github.com/entrecode/ec.admin/blob/master/src/fields/TypeField.tsx).

Entry specific [Field](https://marmelab.com/react-admin/Fields.html) implementation. Renders the value of an entry field depending on its [type](https://doc.entrecode.de/data_manager/#field-data-types). Used in EntryList and EntryShow.

```jsx
<TypeField {...fieldProps('name', fieldConfig)} />
```

### TypeInput [show source](https://github.com/entrecode/ec.admin/blob/master/src/inputs/TypeInput.tsx)

Entry specific [Input](https://marmelab.com/react-admin/Inputs.html) implementation. Renders the form input of an entry field depending on its [type](https://doc.entrecode.de/data_manager/#field-data-types). Used in EntryCreate, EntryEdit.

```jsx
<TypeInput {...inputProps('name', fieldConfig)} />
```

### TypeFilter [show source](https://github.com/entrecode/ec.admin/blob/master/src/filters/TypeFilter.tsx)

Entry specific [Input](https://marmelab.com/react-admin/Inputs.html) Implementation. Renders the filter input of an entry field depending on its [type](https://doc.entrecode.de/data_manager/#field-data-types). Used in EntryListFilter.

```jsx
<TypeFilter {...inputProps('name', fieldConfig)} />
```

## Roadmap

The following features may be implemented in the future:

### Resource Support

Currently, dataProvider only wraps one instance of PublicAPI.
It would be a great addition if multiple instances of a PublicAPI could be accessed with one [dataProvider](https://marmelab.com/react-admin/DataProviders.html#extending-a-data-provider-example-of-file-upload).
Also, the more generic Resources could be supported. This would enable potential CRUD support for all entrecode resources. The implementation could be done step by step:

- AssetGroup / Asset => asset browser using [GridList](https://material-ui.com/components/grid-list/)
- DataManager => use multiple datamanagers at the same time
- .. potential implementation of any other ec.resource

### Custom Filter Sidebar

Currently, the [FilterList sidebar](https://marmelab.com/react-admin/List.html#the-filterlist-sidebar) only supports one selection per property (and does not play well with object values). It would be good to have a more sophisticated FitlerList sidebar. Maybe this will also be implemented by react-admin in the future, as the FilterList sidebar is relatively new.. _but maybe only for enterprise edition_

### Add Proper Demo for Development

For faster development, it would be good to have a demo that is not part of the build.
I tried working with symlinks but this sucks. Why?

- need to build typescript on every save
- need ec.admin/node_modules to run ts build
- => this will break the project where ec.admin is symlinked
- for now, I created the hackybuild.js script which temporarily renames node_modules to \_node_modules ... dont tell anyone
