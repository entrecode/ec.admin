import { useEffect, useState } from 'react';
import { useApi } from './useApi';

// resolves fieldConfig of given model
export function useFieldConfig(model: string) {
  const api = useApi();
  const [fieldConfig, setFieldConfig] = useState<object | null>(null);
  useEffect(() => {
    if (api && model) {
      api.getFieldConfig(model).then(setFieldConfig);
    }
  }, [api, model]);
  return fieldConfig;
}