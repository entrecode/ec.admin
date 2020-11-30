// https://marmelab.com/react-admin/List.html
// > "component with custom queries"

import React,{useState} from 'react';
import keyBy from 'lodash/keyBy'
import { useQuery, Datagrid, TextField, Pagination, Loading, ListContextProvider } from 'react-admin'

const CustomList = () => {
    const [page, setPage] = useState(1);
    const perPage = 10;
    const { data, total, loading, error } = useQuery({
        type: 'getList',
        resource: 'muffin',
        payload: {
            pagination: { page, perPage },
            sort: { field: 'name', order: 'ASC' },
            filter: {},
        }
    });

    if (loading) {
        return <Loading />
    }
    if (error) {
        return <p>ERROR: {error}</p>
    }
    return [
      <p>This page uses a <a href="https://marmelab.com/react-admin/Actions.html#usequery-hook">custom query</a></p>,
        <ListContextProvider
            value={{
                resource: 'muffin',
                basePath: '/muffin',
                data: keyBy(data, 'id'),
                ids: data.map(({ id }) => id),
                currentSort: { field: 'name', order: 'ASC' },
                selectedIds: [],
            }}
        >
            <Datagrid rowClick="edit">
                <TextField source="id" />
                <TextField source="name" />
            </Datagrid>
            <Pagination
                page={page}
                perPage={perPage}
                setPage={setPage}
                total={total}
            />
        </ListContextProvider>
    ];
}

export default CustomList;