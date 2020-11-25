import { environment } from 'ec.sdk/lib/Core';
import { useEffect, useState } from 'react';
import dataProvider from '../providers/dataProvider';

export function useDatamanager(datamanagerID, env: environment = 'stage', ecUser = true) {
  const [provider, setProvider] = useState<any>();
  useEffect(() => {
    dataProvider(datamanagerID, env, ecUser).then(setProvider);
  }, [datamanagerID]);
  return provider;
}
