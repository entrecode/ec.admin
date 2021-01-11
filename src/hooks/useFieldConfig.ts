import { useEffect, useState } from 'react';
import getPublicDataProvider from '../helpers/getPublicDataProvider';
import { useApi } from './useApi';

// resolves fieldConfig of given model
export function useFieldConfig(resource: string, env = 'stage') {
  const api = useApi();
  const [fieldConfig, setFieldConfig] = useState<object | null>(null);
  useEffect(() => {
    const resolveFieldConfig = (api, model) => api.getFieldConfig(model)
      .then(fieldConfig => setFieldConfig(fieldConfig));
    if (resource.includes('|')) {
      const path = resource.split('|');
      const dmID = path[1];
      const model = path[3];
      getPublicDataProvider(dmID, env).then(({ api }) => resolveFieldConfig(api, model));
    } else {
      resolveFieldConfig(api, resource)
    }
  }, [/* api,  */resource]);
  return fieldConfig;
}