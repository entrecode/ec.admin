import React from 'react';
import { Admin, Resource, Loading, ListGuesser, EditGuesser } from 'react-admin';
import { useSession, themes } from '../lib';
import { useResources } from '../src/hooks/useResources';

/* import polyglotI18nProvider from 'ra-i18n-polyglot';
import germanMessages from 'ra-language-german';

const messages = {
  de: { ...germanMessages, ...{} }, // add more languages here
};

const removeId = (key) => {
  // remove id from key (every odd part of split)
  console.log('key', key);
  return key;
};

const { translate, ...rest } = polyglotI18nProvider((locale) => {
  return messages[locale];
}, 'de');

const i18nProvider = {
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
    <Admin dataProvider={dataProvider} authProvider={authProvider} theme={themes.light} >
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
        list={ListGuesser}
        edit={EditGuesser}
      />
    </Admin>
  ); // |19cc1f60-b39e-4ad7-bda7-8a8cb9ca4b7e|entry
};

export default App;
