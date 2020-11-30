import React from 'react';
import { Create, SimpleForm, Loading, TextInput } from 'react-admin';
import { useFields, inputProps, TypeInput } from '../lib';

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
