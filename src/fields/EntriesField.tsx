import React from 'react';
import { ReferenceArrayField, SingleFieldList, ChipField /* , ArrayField */ } from 'react-admin';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

export function EntriesField(props) {
  if (!props.reference) {
    return <HelpOutlineIcon />;
  }

  // the line below is a somehow dirty fix to forbid LightEntries sneaking in
  // dataProvider#deserialize (called by getList / getMany) will convert LightEntries to ids (string[])
  // somehow, sometimes (when navigating to detail and back), LightEntries will sneak in (not found out why)
  // this little line just kills all non-ids... and it works. maybe this levers out a caching mechanic of react-admin
  // the best solution would be to have either make it work with light entries, or add some sdk non-light-entry mode

  const record = { ...props.record, [props.source]: props.record[props.source].filter((id) => typeof id === 'string') };
  return (
    <ReferenceArrayField {...props} record={record}>
      <SingleFieldList>
        <ChipField source="_entryTitle" />
      </SingleFieldList>
    </ReferenceArrayField>
  );

  // old implementation without references => expects lightentries
  // to use this, make sure dataProvider#deserialize does not map light entries to just ids
  /* return (
    <ArrayField {...props}>
      <SingleFieldList>
        <ChipField source="_entryTitle" />
      </SingleFieldList>
    </ArrayField>
  ); */
}
