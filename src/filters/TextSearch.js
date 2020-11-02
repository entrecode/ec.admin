import React from 'react';
import { TextInput } from 'react-admin';

export function TextSearch(props) {
  return <TextInput {...props} source={`${props.source}.search`} resettable />;
}
