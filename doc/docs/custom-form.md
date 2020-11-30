---
id: custom-form
title: Custom Form
slug: /custom-form
---

Similar to lists, we can replace a generic EntryEdit / EntryCreate form with a custom one.

## Example

Here's an example of a custom edit component:

```js
import React from 'react';
import { Edit, SimpleForm, Loading, TextInput } from 'react-admin';
import { useFields, inputProps, TypeInput } from 'ec.admin';

export function MuffinEdit(props) {
  const { fieldConfig } = useFields(props.resource);
  if (!fieldConfig) {
    return <Loading />;
  }
  const input = (property) => inputProps(property, fieldConfig);
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput {...input('name')} />
        {/* equal to <TextInput source="name" /> */}
        <TypeInput {...input('amazement_factor')} />
      </SimpleForm>
    </Edit>
  );
}
```

To use it, we can override the edit prop on the target [Resource](https://marmelab.com/react-admin/Resource.html):

```jsx
<Resource name={'muffin'} {...entryCrud} edit={MuffinEdit} />
```

## Used APIs

The example uses the following ec.admin APIs:

- [TypeInput](./helpers#typeinput)
- [inputProps](./helpers#inputprops)
- [useFields](./helpers#usefields)

Note that the "name" field just uses a plain [TextInput](https://marmelab.com/react-admin/Inputs.html#textinput). When going that route, you have to make sure that the component can handle the field's value. The commented out version of it shows how the field would could be implemented without inputProps. If going that route, you have to check set props:

- source: field name (make sure it exists)
- options.disabled should be true if the field is readOnly

Of course, the component that is used for a field can also be custom. For more info see [Writing Your Own Input Component](https://marmelab.com/react-admin/Inputs.html#writing-your-own-input-component).

## Create

Implementing a custom create form is similar to the above example, except

- you should get the field config from [useFieldConfig](./helpers#usefieldconfig) which omits the system fields (id, created, modified, creator).
- you have to override Resource.create instead of Resource.edit
- When in doubt, refer to EntryCreate component.
