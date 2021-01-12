import React from 'react';
import { Admin, Resource, Loading, ListGuesser, EditGuesser } from 'react-admin';
import { useSession, themes } from '../lib';
import { useResources } from '../src/hooks/useResources';
import { EntryList } from '../src/entry/EntryList';
import { EntryEdit } from '../src/entry/EntryEdit';
import { MuffinList } from './MuffinList';
import { DatamanagerList } from './DatamanagerList';

import polyglotI18nProvider from 'ra-i18n-polyglot';
import germanMessages from 'ra-language-german';
import domainMessages from './i18n';

// https://entrecode.github.io/ec.admin/docs/localization
const messages = {
  de: { ...germanMessages, ...domainMessages.de }, // add more languages here
};
const i18nProvider = polyglotI18nProvider((locale) => {
  return messages[locale];
}, 'de');

/* const removeId = (key) => {
  // remove id from key (every odd part of split)
  console.log('key', key);
  return key;
}; */

/* const { translate, ...rest } = polyglotI18nProvider((locale) => {
  return messages[locale];
}, 'de'); */

/* const i18nProvider = {
  translate: (key, options) => {
    key = removeId(key);
    return translate(removeId(key), options);
  },
  ...rest,
}; */

const App = () => {
  const ecProvider = useResources('stage');
  const authProvider = useSession();
  if (!ecProvider || !authProvider) {
    return <Loading />;
  }
  return (
    <Admin dataProvider={ecProvider} authProvider={authProvider} theme={themes.light} i18nProvider={i18nProvider}>
      <Resource name="dataManager" list={DatamanagerList} />
      <Resource name="template" list={ListGuesser} edit={EditGuesser} />
      <Resource name="dataManager" list={ListGuesser} edit={EditGuesser} />
      <Resource name="dataManager|73538731-4ac3-4a1a-b3b5-e31d09e94d42|model" list={ListGuesser} edit={EditGuesser} />
      <Resource
        name="dataManager|73538731-4ac3-4a1a-b3b5-e31d09e94d42|assetGroup"
        list={ListGuesser}
        edit={EditGuesser}
      />
      <Resource
        name="dataManager|73538731-4ac3-4a1a-b3b5-e31d09e94d42|assetGroup|test|dmAsset"
        list={ListGuesser}
        edit={EditGuesser}
      />
      <Resource name="dataManager|83cc6374|model|muffin|entry" list={MuffinList} edit={EntryEdit} />
      <Resource name="dataManager|83cc6374|model|baker|entry" list={EntryList} edit={EntryEdit} />
      <Resource name="dataManager|2b5c50c8|model|ld_order|entry" list={EntryList} edit={EntryEdit} />
      <Resource name="dataManager|2b5c50c8|model|ld_order_item|entry" list={null} edit={EntryEdit} />
      <Resource name="dataManager|04306d2a|model|ld_order|entry" list={EntryList} edit={EntryEdit} />
      <Resource name="dataManager|04306d2a|model|ld_order_item|entry" list={null} edit={EntryEdit} />
    </Admin>
  ); // |19cc1f60-b39e-4ad7-bda7-8a8cb9ca4b7e|entry
};

export default App;
