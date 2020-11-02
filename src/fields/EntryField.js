import React from 'react';
import { ChipField, ReferenceField } from 'react-admin';

export function EntryField(props) {
  const { source, record } = props;
  if (!record[source]) {
    return <></>;
  }
  if (!props.reference) {
    return <strong>???</strong>;
  }
  return (
    <ReferenceField {...props}>
      <ChipField source="_entryTitle" />
    </ReferenceField>
  );

  // old implementation without reference => expects lightentry
  // to use this, make sure dataProvider#deserialize does not map light entries to just ids
  /* return <ChipField source={'_entryTitle'} record={record[source]} />; */
}
