import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import get from 'lodash/get';

export function AvatarField(props) {
  const { record, source } = props;
  const url = get(record, source)
  if (url) {
    return <Avatar alt={source} src={url} />;
  }
  return <></>;
}

