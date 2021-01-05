import React from 'react';
import { Admin, Resource, Loading, ListGuesser, EditGuesser } from 'react-admin';
import { useSession, themes } from '../lib';
import { useResources } from '../src/hooks/useResources';
import { MuffinList } from './MuffinList';

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
  const dataProvider = useResources('stage');
  const authProvider = useSession();
  if (!dataProvider || !authProvider) {
    return <Loading />;
  }
  return (
    <Admin dataProvider={dataProvider} authProvider={authProvider} theme={themes.light} i18nProvider={i18nProvider}>
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
      <Resource
        name="dataManager|73538731-4ac3-4a1a-b3b5-e31d09e94d42|model|8234144e-38e2-414d-97c5-0faf1b671428|entry"
        list={MuffinList}
        edit={EditGuesser}
      />
      <Resource
        name="dataManager|b2583313-bef9-457b-b1f0-e065960dc6c5|model|61d7583e-ca12-4697-8f6c-b59d325a5de6|entry"
        list={ListGuesser}
        edit={EditGuesser}
      />
      <Resource
        name="dataManager|30ded721-f935-4fe9-9f2c-4a2952f7bfcb|model|061edd27-555f-4426-88ad-c49ce2e9328b|entry"
        list={ListGuesser}
        edit={EditGuesser}
      />
    </Admin>
  ); // |19cc1f60-b39e-4ad7-bda7-8a8cb9ca4b7e|entry
};

export default App;
