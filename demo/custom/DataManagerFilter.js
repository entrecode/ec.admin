import React from 'react';
import { Filter, SelectInput } from 'react-admin';

export const DataManagerFilter = (props) => (
  <Filter {...props}>
    <SelectInput
      alwaysOn
      source="dataManagerID"
      choices={[
        { id: '2b5c50c8', name: 'light.benu' },
        { id: '04306d2a', name: 'light.demo' },
        { id: '903a09ad', name: 'light.someShop' },
      ]}
    />
  </Filter>
);
