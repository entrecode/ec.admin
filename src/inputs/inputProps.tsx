export function inputProps(property, fieldConfig, ignoreReadOnly = false) {
  if (!fieldConfig[property]) {
    console.warn(`property ${property} not found in fieldConfig`, fieldConfig);
    return { key: property, source: property, type: 'unknown', sortable: false };
  }
  return {
    key: property,
    type: fieldConfig[property].type,
    source: property,
    // label: fieldConfig[property].config?.label || property,
    options: {
      disabled: !ignoreReadOnly && isReadOnly(property, fieldConfig),
    },
    reference: fieldConfig[property].validation,
    config: fieldConfig[property],
  };
}

export const isReadOnly = (property, fieldConfig) => {
  if (['_id', 'id', '_created', '_modified', '_creator'].includes(property)) {
    return true;
  }
  return fieldConfig[property].readOnly;
};
