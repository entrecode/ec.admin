// https://marmelab.com/react-admin/Admin.html#customroutes
import React from 'react';
import { Datagrid, TextField, ListContextProvider, useListController, Pagination } from 'react-admin';

export default () => {
  const listController = useListController({
    resource: 'muffin',
    basePath:'/muffin'
  });
  return (
    <div>
      <p>This page makes use of <a href="https://marmelab.com/react-admin/List.html#uselistcontroller">useListController</a></p>
      <ListContextProvider value={listController}>
        <Datagrid rowClick="edit">
          <TextField source="id" />
          <TextField source="name" />
          <TextField source="amazement_factor" />
        </Datagrid>
        <Pagination {...listController}/>
      </ListContextProvider>
    </div>
  );
};