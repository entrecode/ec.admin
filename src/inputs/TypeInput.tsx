import React from 'react';
import { TextInput, ImageField, DateInput, NumberInput, ImageInput, BooleanInput } from 'react-admin';
import { EntryInput } from './EntryInput';
import { EntriesInput } from './EntriesInput';
import { MissingInput } from './MissingInput';

export function TypeInput(_props) {
  const { type, ...props } = _props;
  if (['text', 'string', 'phone'].includes(type)) {
    return <TextInput {...props} />;
  }
  /* if (type === 'location') {
    return <GMapInput {...props} googleKey="" />;
  } */
  if (['json', 'location'].includes(type)) {
    return <TextInput multiline {...props} fullWidth style={{ maxHeight: 300, overflow: 'auto', width: '100%' }} />;

    /* return <RichTextInput {...props} />; 
    parse={JSON.parse} format={JSON.stringify}
    */
  }
  if (type === 'formattedText') {
    return <TextInput multiline {...props} fullWidth style={{ maxHeight: 300, overflow: 'auto', width: '100%' }} />;
    /* return <RichTextInput {...props} />; */
  }
  if (type === 'datetime') {
    return <DateInput {...props} />;
  }
  if (type === 'boolean') {
    return <BooleanInput {...props} />;
  }
  if (type === 'email') {
    return <TextInput type="email" {...props} />;
  }
  if (type === 'url') {
    return <TextInput type="url" {...props} />;
  }
  if (['number', 'decimal'].includes(type)) {
    return <NumberInput {...props} />;
  }
  if (type === 'entry') {
    return <EntryInput {...props} />;
  }
  if (type === 'entries') {
    return <EntriesInput {...props} />;
  }
  if (type === 'asset') {
    return (
      <ImageInput multiple={false} {...props}>
        <ImageField source="file.url" />
      </ImageInput>
    );
  }
  if (type === 'assets') {
    return (
      <ImageInput multiple={true} {...props}>
        <ImageField source="file.url" />
      </ImageInput>
    );
  }
  return <MissingInput {...props} type={type} />;
}
