import React from 'react';
import Typography from '@material-ui/core/Typography';
import { truncate } from '../helpers';
import get from 'lodash/get';

export function TypographyField(props) {
  // https://github.com/marmelab/react-admin/blob/73a364e86ead751d2cb10f1644b542e6832e5af1/packages/ra-ui-materialui/src/field/TextField.tsx
  const { source, record = {}, emptyText } = props;
  const value = get(record, source);
  return (
    <Typography component="span" variant="body2" style={{ whiteSpace: 'nowrap', overflow: 'hidden' }}>
      {value !== null && typeof value !== 'string' ? JSON.stringify(value) : truncate(value) || emptyText}
    </Typography>
  );
}

TypographyField.defaultProps = {
  addLabel: true,
};
