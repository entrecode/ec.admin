import { useEffect, useState } from 'react';
import dataProvider from './dataProvider';

export function useDatamanager(datamanagerID) {
  const [provider, setProvider] = useState();
  useEffect(() => {
    dataProvider(datamanagerID).then(setProvider);
  }, [datamanagerID]);
  return provider;
}
