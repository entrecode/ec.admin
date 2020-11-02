import React from 'react';
import { ReferenceInput, SelectInput } from 'react-admin';

export function EntryInput(props) {
  if (!props.reference) {
    return <strong>TBD: entry input without reference/validation</strong>;
  }
  return (
    <ReferenceInput {...props} format={(lightEntry) => (typeof lightEntry === 'object' ? lightEntry?.id : lightEntry)}>
      <SelectInput
        style={{ width: '100%' }}
        optionText="_entryTitle"
        parse={(ids) => ids.map((id) => ({ id, _entryTitle: id }))}
      />
    </ReferenceInput>
  );
}
