import { useContext } from 'react';
import { DataProviderContext } from 'react-admin';

export function useApi() {
  const { api } = useContext(DataProviderContext);
  // see https://github.com/marmelab/react-admin/blob/master/packages/ra-core/src/dataProvider/DataProviderContext.ts
  // cannot useDataProvider as it wraps everything async
  return api;
}
