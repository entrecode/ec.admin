import { environment } from 'ec.sdk/lib/Core';
import { useEffect, useState } from 'react';
import entryProvider from '../providers/entryProvider';

export function useDatamanager(datamanagerID, env: environment = 'stage', ecUser = true) {
  const [provider, setProvider] = useState<any>();
  useEffect(() => {
    entryProvider(datamanagerID, env, ecUser).then(setProvider);
  }, [datamanagerID]);
  return provider;
}
