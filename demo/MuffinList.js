import React from 'react';
import { List, Loading, Datagrid, TextField, NumberField } from 'react-admin';
import { TypeField, useFields, fieldProps } from '../lib';

export const MuffinList = (props) => {
  /* let { fieldConfig } = useFields(props.resource);
  if (!fieldConfig) {
    return <Loading />;
  }
  const field = (property) => fieldProps(property, fieldConfig); */
  return (
    <List {...props}>
      <Datagrid rowClick="edit">
        <TextField source="name" />
        <NumberField source="amazement_factor" />
        <TextField source="color" />
        <TextField source="id" />
      </Datagrid>
    </List>
  );
};

/*
<List {...props}>
      <Datagrid rowClick="edit">
        <TypeField {...field('name')} />
        <TypeField {...field('amazement_factor')} />
      </Datagrid>
    </List>
*/
