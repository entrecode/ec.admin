import React from 'react';
import { Datagrid, List, TextField } from 'react-admin';

export const DatamanagerList = (props) => (
  <List {...props} filter={{ 'config.publicConfig.dmType': 'light-designer' }}>
    <Datagrid rowClick="edit">
      <TextField source="hexColor" />
      <TextField source="shortID" />
      <TextField source="title" />
      <TextField source="config.publicConfig.dmType" />
      <TextField source="description" />
    </Datagrid>
  </List>
);
