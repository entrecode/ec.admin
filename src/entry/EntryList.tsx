import React from 'react';
import { List, Loading /* , Datagrid */ } from 'react-admin';
import CustomizableDatagrid from 'ra-customizable-datagrid';
import { TypeField } from '../fields/TypeField';
// https://github.com/fizix-io/ra-customizable-datagrid#configuration
import { useFields } from '../hooks/useFields';
import { fieldProps } from '../fields/fieldProps';
import { EntryListFilter } from '../filters/EntryListFilter';

// generic entry list
export const EntryList = (props) => {
  let { fieldConfig, defaultColumns } = useFields(props.resource);
  if (!fieldConfig) {
    return <Loading />;
  }
  // defaultColumns={defaultColumns}
  return (
    <List
      {...props}
      bulkActionButtons={false}
      filters={<EntryListFilter fieldConfig={fieldConfig} resource={props.resource} />}
    >
      <CustomizableDatagrid defaultColumns={defaultColumns} rowClick="edit">
        {/* <Datagrid rowClick="edit"> */}
        {Object.keys(fieldConfig).map((property) => (
          <TypeField {...fieldProps(property, fieldConfig, props.resource)} />
        ))}
        {/* </Datagrid> */}
      </CustomizableDatagrid>
    </List>
  );
};
