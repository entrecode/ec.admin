import { useEffect, useState } from 'react';
import authProvider from './authProvider';

export function useSession(env = 'stage', clientID = 'rest') {
  const [provider, setProvider] = useState();
  useEffect(() => {
    setProvider(authProvider(env, clientID));
  }, [env, clientID]);
  return provider;
}
