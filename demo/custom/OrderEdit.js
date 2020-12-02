import React from 'react';
import { Edit, SimpleForm, TextInput } from 'react-admin';

export const OrderEdit = (props) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source="id" />
        <TextInput source="name" />
        <TextInput source="email" />
      </SimpleForm>
    </Edit>
  );
};
