import React from 'react';
import { Edit, SimpleForm, Loading } from 'react-admin';
import { useFields } from './useFields';
import { TypeInput } from './inputs/TypeInput';
import { inputProps } from './inputs/inputProps';
// import { EntryTitle } from './inputs/EntryTitle';

export function EntryEdit(props) {
  const { fieldConfig } = useFields(props.resource);
  if (!fieldConfig) {
    return <Loading />;
  }
  // title={<EntryTitle resource={props.resource} />}
  return (
    <Edit {...props}>
      <SimpleForm>
        {Object.keys(fieldConfig).map((property) => (
          <TypeInput {...inputProps(property, fieldConfig)} />
        ))}
      </SimpleForm>
    </Edit>
  );
}
