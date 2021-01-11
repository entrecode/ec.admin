import React from 'react';
import { inputProps } from '../inputs/inputProps';
import { TypeFilter } from './TypeFilter';
import { Filter } from 'react-admin';
import { getFilterableProperties } from '../types';

export const EntryListFilter = ({ fieldConfig, ...props }) => {
  const input = (property) => inputProps(property, fieldConfig, false, props.resource);
  const filterableProperties = getFilterableProperties(fieldConfig);
  return (
    <Filter {...props}>
      {filterableProperties.map((property) => (
        <TypeFilter {...input(property)} />
      ))}
    </Filter>
  );
};
