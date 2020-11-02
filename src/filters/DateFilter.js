import React from 'react';
import { DateInput } from 'react-admin';

export function DateFilter({ source, ...props }) {
  return (
    <>
      <DateInput {...props} label="from" source={`${source}.from`} style={{ marginRight: 2 }} />
      <DateInput {...props} label="to" source={`${source}.to`} />
    </>
  );
}
