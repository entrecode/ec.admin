import React from 'react';
import { Create, SimpleForm, Loading } from 'react-admin';
import { useFields } from '../hooks/useFields';
import { TypeInput } from '../inputs/TypeInput';
import { inputProps } from '../inputs/inputProps';

export function EntryCreate(props) {
  const { fieldConfig } = useFields(props.resource, true);
  if (!fieldConfig) {
    return <Loading />;
  }
  return (
    <Create {...props}>
      <SimpleForm>
        {Object.keys(fieldConfig).map((property) => (
          <TypeInput {...inputProps(property, fieldConfig, true, props.resource)} />
        ))}
      </SimpleForm>
    </Create>
  );
}
