---
id: components
title: Components
slug: /components
---

## Type Components

ec.admin comes with prepacked implementations of [Field](https://marmelab.com/react-admin/Fields.html), [Input](https://marmelab.com/react-admin/Inputs.html) and [Filter](https://marmelab.com/react-admin/List.html#filtering-the-list) components that take care of each [ec entry field type](https://doc.entrecode.de/data_manager/#types).

### [TypeField](https://github.com/entrecode/ec.admin/blob/master/src/fields/TypeField.tsx)

Entry specific [Field](https://marmelab.com/react-admin/Fields.html) implementation. Renders the value of an entry field depending on its [type](https://doc.entrecode.de/data_manager/#field-data-types). Used in EntryList and EntryShow.

```jsx
<TypeField {...fieldProps('name', fieldConfig)} />
```

### [TypeInput](https://github.com/entrecode/ec.admin/blob/master/src/inputs/TypeInput.tsx)

Entry specific [Input](https://marmelab.com/react-admin/Inputs.html) implementation. Renders the form input of an entry field depending on its [type](https://doc.entrecode.de/data_manager/#field-data-types). Used in EntryCreate, EntryEdit.

```jsx
<TypeInput {...inputProps('name', fieldConfig)} />
```

### [TypeFilter](https://github.com/entrecode/ec.admin/blob/master/src/filters/TypeFilter.tsx)

Entry specific [Input](https://marmelab.com/react-admin/Inputs.html) Implementation. Renders the filter input of an entry field depending on its [type](https://doc.entrecode.de/data_manager/#field-data-types). Used in EntryListFilter.

```jsx
<TypeFilter {...inputProps('name', fieldConfig)} />
```
