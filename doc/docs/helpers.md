---
id: helpers
title: Helpers
slug: /helpers
---




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
