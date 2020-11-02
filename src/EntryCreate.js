import React from 'react';
import { Create, SimpleForm, Loading } from 'react-admin';
import { useFieldConfig } from './useFields';
import { TypeInput } from './inputs/TypeInput.js';
import { inputProps } from './inputs/inputProps.js';

export function EntryCreate(props) {
  const fieldConfig = useFieldConfig(props.resource);
  if (!fieldConfig) {
    return <Loading />;
  }
  return (
    <Create {...props}>
      <SimpleForm>
        {Object.keys(fieldConfig).map((property) => (
          <TypeInput {...inputProps(property, fieldConfig, true)} />
        ))}
      </SimpleForm>
    </Create>
  );
}
