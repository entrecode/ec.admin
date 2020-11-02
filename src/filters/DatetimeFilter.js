import React from 'react';
import { DateTimeInput } from 'react-admin';

export function DatetimeFilter({ source, ...props }) {
  return (
    <>
      <DateTimeInput {...props} label="from" source={`${source}.from`} style={{ marginRight: 2 }} />
      <DateTimeInput {...props} label="to" source={`${source}.to`} />
    </>
  );
}
