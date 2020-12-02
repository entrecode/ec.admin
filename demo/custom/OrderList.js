import React from 'react';
import { List, Datagrid, TextField } from 'react-admin';
import { DataManagerFilter } from './DataManagerFilter';

export const OrderList = (props) => (
  <List {...props} filters={<DataManagerFilter />}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="email" />
    </Datagrid>
  </List>
);
