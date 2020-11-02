export const sortableTypes = ['text', 'number', 'decimal', 'url', 'datetime'];
export const isSortable = (type) => sortableTypes.includes(type);

export const filterableTypes = [
  'text',
  'boolean',
  'formattedText',
  'number',
  'decimal',
  'url',
  'datetime',
  /* 'asset', // TODO
  'assets',
  'dmAsset',
  'dmAssets', */
  'email',
  'entry',
  'entries',
  'account',
];
export const isFilterable = (type) => filterableTypes.includes(type);
export const getFilterableProperties = (fieldConfig) =>
  Object.keys(fieldConfig).filter((property) => isFilterable(fieldConfig[property]?.type));
