---
id: entry-crud
title: Entries
slug: /entry-crud
---

ec.admin comes with some components and helpers that make it easy to use react-admin with ec entries.

### [entryCrud](https://github.com/entrecode/ec.admin/blob/master/src/entryCrud.tsx)

Collection of generic CRUD components for entries. Intended to be used on a [Resource](https://marmelab.com/react-admin/Resource.html) using spread syntax:

```jsx
<Resource name={'muffin'} {...entryCrud} />
```

contains:

- list: [EntryList](https://github.com/entrecode/ec.admin/blob/master/src/EntryList.tsx)
- create: [EntryCreate](https://github.com/entrecode/ec.admin/blob/master/src/EntryCreate.tsx)
- edit: [EntryEdit](https://github.com/entrecode/ec.admin/blob/master/src/EntryEdit.tsx)
- show: [EntryShow](https://github.com/entrecode/ec.admin/blob/master/src/EntryShow.tsx)


### [EntryList](https://github.com/entrecode/ec.admin/blob/master/src/EntryList.tsx)

Implements generic [List](https://marmelab.com/react-admin/List.html) for entries.

- renders all model fields as a [CustomizableDatagrid](https://github.com/fizix-io/ra-customizable-datagrid) (according to field config)
- each field is rendered as a [TypeField](https://github.com/entrecode/ec.admin/blob/master/src/fields/TypeField.tsx)
- supports pagination, sorting, filtering + persistent field visibility.
- supports all field types, except account + roles
- provides a [filter](https://marmelab.com/react-admin/List.html#the-filter-buttonform-combo) for each filterable field.
- opens edit on click + has create button action.

### [EntryEdit](https://github.com/entrecode/ec.admin/blob/master/src/EntryEdit.tsx)

Implements generic [Edit](https://marmelab.com/react-admin/CreateEdit.html) views for a single entry.

- renders a [TypeInput](https://github.com/entrecode/ec.admin/blob/master/src/inputs/TypeInput.tsx) for each field (according to field config)
- disables readOnly fields
- currently only limited validation support
- supports all field types except account, roles and entry/asset fields without validation.
- contains delete button

### [EntryCreate](https://github.com/entrecode/ec.admin/blob/master/src/EntryCreate.tsx)

Like EntryEdit, just for [Create](https://marmelab.com/react-admin/CreateEdit.html), without readOnly fields and without delete button.

### [EntryShow](https://github.com/entrecode/ec.admin/blob/master/src/EntryShow.tsx)

Implements [Show](https://marmelab.com/react-admin/Show.html) view for a single entry.

- renders field label + TypeField for each field (according to config).

## Custom Views

If you want to replace a generic CRUD view with a custom component, you can override its prop on the desired [Resource](https://marmelab.com/react-admin/Resource.html):

```jsx
<Resource name={'muffin'} {...entryCrud} list={MuffinList} />
```

This will render `MuffinList` as custom list view. Of course, this is possible with any crud prop.

The easiest way to implement a custom view is to copy the generic component and adjust the parts that should be custom. See also:

- [Custom List](./custom-list)
- [Custom Form](./custom-form)