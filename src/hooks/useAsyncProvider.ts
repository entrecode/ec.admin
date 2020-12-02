import { useEffect, useState } from 'react';

export function useAsyncProvider(asyncProvider, ...args) {
  const [provider, setProvider] = useState<any>();
  useEffect(() => {
    asyncProvider(...args).then(setProvider);
  }, args);
  return provider;
}
