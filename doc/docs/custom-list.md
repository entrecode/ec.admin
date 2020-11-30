---
id: custom-list
title: Custom List
slug: /custom-list
---

It's easy to replace a generic EntryList with a custom one.

## Example

Here's an example of a custom list component:

```js
import React from 'react';
import { List, Loading, Datagrid, TextField } from 'react-admin';
import { TypeField, useFields, fieldProps } from 'ec.admin';
import { BakerField } from './BakerField';

export const MuffinList = (props) => {
  let { fieldConfig } = useFields(props.resource);
  if (!fieldConfig) {
    return <Loading />;
  }
  const field = (property) => fieldProps(property, fieldConfig);
  return (
    <List {...props}>
      <Datagrid rowClick="edit">
        <TypeField {...field('name')} />
        <TypeField {...field('amazement_factor')} />
        <TextField {...field('description')} />
        {/* equal to: <TextField source="description" sortable={false} /> */}
        <BakerField {...field('baker')} />
      </Datagrid>
    </List>
  );
};
```

To use it, we can override the list prop on the target [Resource](https://marmelab.com/react-admin/Resource.html):

```jsx
<Resource name={'muffin'} {...entryCrud} list={MuffinList} />
```

## Used APIs

The example uses the following ec.admin APIs:

- [TypeField](./helpers#typefield)
- [fieldProps](./helpers#fieldprops)
- [useFields](./helpers#usefields)

Note that the "description" field just uses a plain [TextField](https://marmelab.com/react-admin/Fields.html#textfield). When going that route, you have to make sure that the component can handle the field's value. The commented out version of it shows how the field would could be implemented without fieldProps. If going that route, you should at least set those props:

- source: field name (make sure it exists)
- sortable: if true, the list column is sortable (only set to true for fields that support it)

Of course, the component that is used for a field can also be custom. For more info see [Writing Your Own Field Component](https://marmelab.com/react-admin/Fields.html#writing-your-own-field-component).