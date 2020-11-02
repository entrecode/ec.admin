import React from 'react';
import { BooleanInput, TextInput, NumberInput } from 'react-admin';
import { TextSearch } from './TextSearch';
import { MissingInput } from '../inputs/MissingInput';
import { EntriesInput } from '../inputs/EntriesInput';
import FormGroup from '@material-ui/core/FormGroup';
import { DateFilter } from './DateFilter';

export function TypeFilter({ type, source, ...props }) {
  props = { ...props, options: { disabled: false } };
  if (['id', '_id'].includes(source)) {
    return <TextInput {...props} source={`${source}.exact`} />;
  }
  if (['text', 'url', 'formattedText'].includes(type)) {
    return <TextSearch {...props} source={source} />;
  }
  if (type === 'datetime') {
    return <DateFilter {...props} source={source} />;
    // also available: DatetimeFilter
    // TODO: use https://github.com/jungsoft/materialui-daterange-picker
  }
  // could also use SearchInput but it has no label
  if (['number', 'decimal'].includes(type)) {
    return (
      <FormGroup>
        <NumberInput label={'min'} source={`${source}.from`} />
        <NumberInput label={'max'} source={`${source}.to`} />
      </FormGroup>
    );
  }
  if (type === 'boolean') {
    return <BooleanInput {...props} source={`${source}.exact`} />;
  }
  if (type === 'entry') {
    // return <EntryInput {...props} source={`${source}.exact`} />; // also possible!
    return <EntriesInput {...props} source={`${source}.any`} />;
  }
  if (type === 'entries') {
    return <EntriesInput {...props} source={`${source}.any`} />;
  }
  return <MissingInput>TypeFilter: "{type}" not yet implemented!</MissingInput>;
}
