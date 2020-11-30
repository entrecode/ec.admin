import React from 'react';
import { DateField, NumberField, BooleanField } from 'react-admin';
import { AvatarField } from './AvatarField';
import { AvatarsField } from './AvatarsField';
import { EntriesField } from './EntriesField';
import { EntryField } from './EntryField';
import { UnknownField } from './UnknownField';
import { TypographyField } from './TypographyField';
import RoomIcon from '@material-ui/icons/Room';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FormatPaintIcon from '@material-ui/icons/FormatPaint';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

/* Generic Field that renders specific field for given datamanager field type */
export function TypeField({ type, ...props }) {
  if (['_created', '_modified', 'datetime'].includes(type)) {
    return <DateField {...props} />;
  }
  if (type === 'text') {
    return <TypographyField {...props} />;
  }
  if (type === 'url' || type === 'email') {
    return <TypographyField {...props} />;
  }
  if (['number', 'decimal'].includes(type)) {
    return <NumberField {...props} />;
  }
  // TODO use file field if not an image
  if (['asset'].includes(type)) {
    return <AvatarField {...props} record={props.record[props.source]} source={`file.url`} />;
  }
  if (['assets'].includes(type)) {
    // TODO: find out how to do this with ArrayField + AvatarField (no AvatarsField needed)
    return <AvatarsField {...props} src="file.url" />;
  }
  if (['entries'].includes(type)) {
    return <EntriesField {...props} />;
  }
  if (['entry'].includes(type)) {
    return <EntryField {...props} />;
  }
  if (['formattedText', 'json'].includes(type)) {
    return <TypographyField {...props} />;
  }
  if (type === 'location') {
    return props.record[props.source] ? <RoomIcon /> : <></>;
  }
  if (type === 'account') {
    return props.record[props.source] ? <AccountCircleIcon /> : <></>;
  }
  if (type === 'role') {
    return props.record[props.source] ? <FormatPaintIcon /> : <></>;
  }
  if (['boolean'].includes(type)) {
    return <BooleanField {...props} />;
  }
  if (['dmAsset'].includes(type)) {
    return <>dmAsset... TBD</>;
  }
  if (type === 'unknown') {
    return <UnknownField {...props} />;
  }
  return <HelpOutlineIcon />;
  // return <TextField {...props} />;
}

TypeField.defaultProps = {
  addLabel: true,
};
