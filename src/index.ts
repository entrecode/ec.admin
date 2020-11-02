import { LocaleSwitcher } from './LocaleSwitcher';
import { dark, light } from './themes';
import { EntryTitle } from './EntryTitle';
import { entryCrud } from './entryCrud';
import authProvider from './authProvider';
import dataProvider from './dataProvider';
import { EntryCreate } from './EntryCreate';
import { EntryEdit } from './EntryEdit';
import { EntryList } from './EntryList';
import { useDatamanager } from './useDatamanager';
import { useSession } from './useSession';
import {
  TypeField,
  TypographyField,
  fieldProps,
  PriceField
} from './fields'
import { useFields } from './useFields';
import { TextSearch, AnyFilter, TypeFilter } from './filters'
import { inputProps, TypeInput } from './inputs'

const themes = {
  light,
  dark
}

export {
  authProvider,
  dataProvider,
  EntryCreate,
  entryCrud,
  EntryEdit,
  EntryList,
  useDatamanager,
  useSession,
  EntryTitle,
  themes,
  TypeField,
  fieldProps,
  useFields,
  TextSearch,
  TypeInput,
  inputProps,
  LocaleSwitcher,
  PriceField,
  AnyFilter,
  TypographyField,
  TypeFilter
};