import React from 'react';
import { Show, SimpleShowLayout, Loading } from 'react-admin';
import { useFields } from './useFields';
import { TypeField } from './fields/TypeField';
import { fieldProps } from './fields/fieldProps';
// import { EntryTitle } from './inputs/EntryTitle';

export function EntryShow(props) {
  const { fieldConfig } = useFields(props.resource);
  if (!fieldConfig) {
    return <Loading />;
  }
  // title={<EntryTitle resource={props.resource} />}
  return (
    <Show {...props}>
      <SimpleShowLayout>
        {Object.keys(fieldConfig).map((property) => (
          <TypeField {...fieldProps(property, fieldConfig)} />
        ))}
      </SimpleShowLayout>
    </Show>
  );
}
