import { isSortable } from '../types';
import getPublicResourceName from '../helpers/getPublicResourceName';

/* 
this is helper that appends the correct props for a given field, based on its config

 - it will automatically set the sortable flag depending on type, see https://marmelab.com/react-admin/List.html#disabling-sorting
 - it will pass all other necessary properties

See CardList for example usage
*/
export function fieldProps(property, fieldConfig, resource) {
  if (!fieldConfig[property]) {
    console.warn(`property ${property} not found in fieldConfig`, fieldConfig);
    return { key: property, source: property, type: 'unknown', sortable: false };
  }
  return {
    key: property,
    source: property,
    // label: fieldConfig[property].config?.label || property,
    type: fieldConfig[property].type,
    sortable: isSortable(fieldConfig[property].type) && !['id', '_id', 'creator', '_creator'].includes(property),
    reference: getPublicResourceName(fieldConfig[property].validation, resource),
  };
}
