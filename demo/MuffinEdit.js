import React from 'react';
import { Edit, SimpleForm, Loading, TextInput } from 'react-admin';
import { useFields, inputProps, TypeInput } from '../lib';

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
        <TypeInput {...input('amazement_factor')} />
      </SimpleForm>
    </Edit>
  );
}
