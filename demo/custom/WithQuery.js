// https://marmelab.com/react-admin/List.html
// > "component with custom queries"
// also see https://stackoverflow.com/questions/63556508/use-the-datagrid-component-with-custom-queries-react-admin

import React, { useState } from 'react';
import keyBy from 'lodash/keyBy';
import { useQuery, Datagrid, TextField, Pagination, Loading, ListContextProvider } from 'react-admin';

const CustomList = () => {
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState({ field: 'name', order: 'ASC' });
  const perPage = 10;
  // the following hook could fetch any data using a custom dataProvider method (instead of getList)
  const { data, total, loading, error } = useQuery({
    type: 'getList',
    resource: 'muffin',
    payload: {
      pagination: { page, perPage },
      sort,
      filter: {},
    },
  });

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <p>ERROR: {error}</p>;
  }
  return (
    <>
      <p>
        This page uses a <a href="https://marmelab.com/react-admin/Actions.html#usequery-hook">custom query</a>
      </p>
      <ListContextProvider
        value={{
          resource: 'muffin', // this is just relevant for detail route
          basePath: '/muffin',
          data: keyBy(data, 'id'),
          ids: data.map(({ id }) => id),
          currentSort: sort,
          setSort: (field, order) => setSort({ field, order }),
          selectedIds: [],
          setPage,
          perPage,
          total,
          page,
        }}
      >
        <Datagrid rowClick="edit">
          <TextField source="id" />
          <TextField source="name" />
        </Datagrid>
        <Pagination />
      </ListContextProvider>
    </>
  );
};

export default CustomList;
