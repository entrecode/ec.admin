import React from 'react';
import { SelectArrayInput } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  name: {
    minWidth: 200,
    marginTop: 20,
  },
});

export function AnyFilter({ choices, ...props }) {
  const classes = useStyles();
  return (
    <SelectArrayInput
      {...props}
      options={{ fullWidth: true }}
      source={`${props.source}.any`}
      className={classes.name}
      choices={choices}
    />
  );
}
