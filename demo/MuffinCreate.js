import React from 'react';
import { Create, SimpleForm, Loading, TextInput } from 'react-admin';
import { useFieldConfig, inputProps, TypeInput } from '../lib';

export function MuffinCreate(props) {
  const fieldConfig = useFieldConfig(props.resource);
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
