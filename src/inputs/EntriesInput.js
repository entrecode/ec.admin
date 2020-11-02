import React from 'react';
import { ReferenceArrayInput, SelectArrayInput } from 'react-admin';
import { MissingInput } from './MissingInput';

export function EntriesInput(props) {
  if (!props.reference) {
    return <MissingInput>TBD: entries input without reference/validation...</MissingInput>;
  }
  return (
    <ReferenceArrayInput
      {...props}
      format={(lightEntries) =>
        lightEntries?.map((lightEntry) => (typeof lightEntry === 'object' ? lightEntry.id : lightEntry))
      }
    >
      <SelectArrayInput
        style={{ width: '100%' }}
        optionText="_entryTitle"
        parse={(ids) => ids.map((id) => ({ id, _entryTitle: id }))}
      />
    </ReferenceArrayInput>
  );
  // https://github.com/marmelab/react-admin/issues/3381#issuecomment-509023216
}
