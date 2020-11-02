import { useEffect, useState } from 'react';
import { useApi } from './useApi';

// resolves fieldConfig of given model
export function useFieldConfig(model) {
  const api = useApi();
  const [fieldConfig, setFieldConfig] = useState<object | null>(null);
  useEffect(() => {
    if (api && model) {
      api.getFieldConfig(model).then(setFieldConfig);
    }
  }, [api, model]);
  return fieldConfig;
}

/* 
Helper to resolve fieldConfig for entry lists.
Use this together with fieldProps to build custom lists without hassle.
See CardList for an example.
*/
export function useFields(model) {
  let fieldConfig = useFieldConfig(model);
  fieldConfig = fieldConfig
    ? {
        id: { type: 'text' },
        ...fieldConfig,
        _created: { type: 'datetime' },
        _modified: { type: 'datetime' },
      }
    : null;
  return {
    fieldConfig,
    defaultColumns: Object.keys(fieldConfig || {}).slice(1, 5),
  };
}
