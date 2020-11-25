import React from 'react';
import { Create, SimpleForm, Loading } from 'react-admin';
import { useFieldConfig } from '../hooks/useFields';
import { TypeInput } from '../inputs/TypeInput';
import { inputProps } from '../inputs/inputProps';

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
