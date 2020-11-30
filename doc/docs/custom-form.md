---
id: custom-form
title: Custom Forms
slug: /custom-form
---

Similar to lists, we can replace a generic EntryCreate / EntryEdit form with a custom [Create / Edit View](https://marmelab.com/react-admin/CreateEdit.html).

## Custom Edit

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

## Custom Create

Implementing a custom create form is similar to the above example:

```js
import React from 'react';
import { Create, SimpleForm, Loading, TextInput } from 'react-admin';
import { useFields, inputProps, TypeInput } from 'ec.admin';

export function MuffinCreate(props) {
  const { fieldConfig } = useFields(props.resource, true);
  if (!fieldConfig) {
    return <Loading />;
  }
  const input = (property) => inputProps(property, fieldConfig, true);
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput {...input('name')} />
        <TypeInput {...input('amazement_factor')} />
      </SimpleForm>
    </Create>
  );
}
```

To use it, we can override the create prop on the target [Resource](https://marmelab.com/react-admin/Resource.html):

```jsx
<Resource name={'muffin'} {...entryCrud} create={MuffinCreate} />
```

The implementation is quite similar to a custom Edit. The differences are:

- [useFields](./hooks#usefields) is used with excludeSystemFields true (omits id, created, modified, creator).
- third param of inputProps is true (ignores readonly fields)
- uses Create instead of Edit

## Used APIs

The examples use the following ec.admin APIs:

- [TypeInput](./components#typeinput)
- [inputProps](./helpers#inputprops)
- [useFields](./hooks#usefields)

Note that the "name" field just uses a plain [TextInput](https://marmelab.com/react-admin/Inputs.html#textinput). When going that route, you have to make sure that the component can handle the field's value. The commented out version of it shows how the field would could be implemented without inputProps. If going that route, you have to check set props:

- source: field name (make sure it exists)
- options.disabled should be true if the field is readOnly

Of course, the component that is used for a field can also be custom. For more info see [Writing Your Own Input Component](https://marmelab.com/react-admin/Inputs.html#writing-your-own-input-component).
