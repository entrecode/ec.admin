import { useEffect, useState } from 'react';
import authProvider from '../providers/authProvider';

export function useSession(env: 'stage' | 'live' = 'stage', clientID = 'rest') {
  const [provider, setProvider] = useState<any>();
  useEffect(() => {
    setProvider(authProvider(env, clientID));
  }, [env, clientID]);
  return provider;
}
