---
id: helpers
title: Helpers
slug: /helpers
---


## Field vs Input vs Filter

To understand the naming of the following helpers, it is important to understand those basic three react-admin's component categories:

- [Field](https://marmelab.com/react-admin/Fields.html): Display a value (in list cell or show view)
- [Input](https://marmelab.com/react-admin/Inputs.html): Edit a value (in edit or create view)
- [Filter](https://marmelab.com/react-admin/List.html#filtering-the-list): Edit a filter value (in list filter)

## Components

For each of the above component categories, ec.admin comes prepacked with implementations for each [ec entry field type](https://doc.entrecode.de/data_manager/#field-data-types).

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

## Props

In the above components, the props were passed using spread syntax and inputProps / fieldProps methods. These functions essentially return objects that have all props for the given property and fieldConfig.

### [fieldProps](https://github.com/entrecode/ec.admin/blob/master/src/fields/fieldProps.tsx)

```ts
fieldProps(field, fieldConfig);
```

Returns entry field props that can be passed to a [Field](https://marmelab.com/react-admin/Fields.html).
Automatically populates field type specific data. Expects fieldConfig as obtained from useFields hook.

```jsx
<TextField {...fieldProps('name', fieldConfig)} />
```

### [inputProps](https://github.com/entrecode/ec.admin/blob/master/src/inputs/inputProps.tsx)

```ts
inputProps(field, fieldConfig);
```

Returns entry field props that can be passed to an [Input](https://marmelab.com/react-admin/Inputs.html).
Automatically populates input type specific data. Expects fieldConfig as obtained from useFields hook.

```jsx
<TextInput {...inputProps('name', fieldConfig)} />
```

## [useFields](https://github.com/entrecode/ec.admin/blob/master/src/hooks/useFields.tsx)

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


