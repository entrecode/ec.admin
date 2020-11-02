import React from 'react';
import { AvatarField } from './AvatarField';

export function AvatarsField(props) {
  const { record, source, src } = props;
  const assets = record[source];
  if (!assets) {
    return <></>;
  }
  return (
    <div style={{ display: 'flex' }}>
      {assets.map((asset, index) => (
        <AvatarField key={index} source={src} record={asset} style={{ margin: 4 }} />
      ))}
    </div>
  );
}
