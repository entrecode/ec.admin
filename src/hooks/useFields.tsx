import { useFieldConfig } from './useFieldConfig';

/* 
Helper to resolve fieldConfig for entry lists or forms.
Use this together with fieldProps tor inputProps o build custom lists or forms without hassle.
*/
export function useFields(model: string, excludeSystemFields?: boolean) {
  let fieldConfig = useFieldConfig(model);
  if (!excludeSystemFields) {
    fieldConfig = fieldConfig
      ? {
          id: { type: 'text' },
          ...fieldConfig,
          _created: { type: 'datetime' },
          _modified: { type: 'datetime' },
        }
      : null;
  }
  return {
    fieldConfig,
    defaultColumns: Object.keys(fieldConfig || {}).slice(1, 5),
  };
}
