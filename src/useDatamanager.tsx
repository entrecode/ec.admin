import { useEffect, useState } from 'react';
import dataProvider from './dataProvider';

export function useDatamanager(datamanagerID, env = 'stage', ecUser = true) {
  const [provider, setProvider] = useState<any>();
  useEffect(() => {
    dataProvider(datamanagerID, env, ecUser).then(setProvider);
  }, [datamanagerID]);
  return provider;
}
