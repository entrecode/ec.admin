import { useEffect, useState } from 'react';
import getPublicDataProvider from '../helpers/getPublicDataProvider';
import { getDataManagerID } from '../providers/entryProvider';

// this hook can be used to get the a dataProvider
export default function useEntryProvider(entry, env = 'stage') {
  const [provider, setProvider] = useState<any>();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getPublicDataProvider(getDataManagerID(entry), env).then((p) => {
      setProvider(p);
      setLoading(false);
    });
  }, []);
  return [provider, loading];
}