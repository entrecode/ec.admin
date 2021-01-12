import { environment } from 'ec.sdk/lib/Core';
import { useEffect, useState } from 'react';
import resourceProvider from '../providers/ecProvider';

export function useResources(env: environment = 'stage') {
  const [provider, setProvider] = useState<any>();
  useEffect(() => {
    resourceProvider(env).then(setProvider);
  }, [env]);
  return provider;
}
