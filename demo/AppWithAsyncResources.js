import React from 'react';
import { Admin, AdminUI, AdminContext, Resource, Loading, ListGuesser, EditGuesser } from 'react-admin';
import { useSession, themes, entryCrud } from '../lib';
import customRoutes from './custom/routes';
import Layout from './custom/Layout';
/* import { MuffinList } from './MuffinList'
import { MuffinEdit } from './MuffinEdit' */
/* import { MuffinCreate } from './MuffinCreate'; */
import { useResources } from '../src/hooks/useResources';
//import { useDatamanager } from '../src/hooks/useDatamanager';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import { useLocation } from 'react-router-dom';

const i18nProvider = {
  translate: (key, options) => 'FUCK',
  changeLocale: (locale) => {
    console.log('change', locale);
  },
  getLocale: () => 'de',
};

const AsyncResources = () => {
  const { pathname } = useLocation();
  console.log('pathname', pathname);
  // TBD: dynamically load resources for resource represented by pathname
  // TBD: find out if its possible to tell react-admin to ignore beginning of path??
  // e.g. 
  return (
    <AdminUI theme={themes.light}>
      {/* <Resource name={'test|muffin'} list={ListGuesser} edit={EditGuesser} />
<Resource name={'muffin'} {...entryCrud} /> */}
      {/* <Resource name={'muffin'} {...entryCrud} create={MuffinCreate} />
<Resource name={'baker'} {...entryCrud} />
<Resource name={'field_test'} {...entryCrud} /> */}
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
    </AdminUI>
  );
};

const App = () => {
  /* const dataProvider = useDatamanager('73538731-4ac3-4a1a-b3b5-e31d09e94d42'); */
  //const dataProvider = useDatamanager('73538731-4ac3-4a1a-b3b5-e31d09e94d42');
  const dataProvider = useResources('stage');
  // cannot useLocation here
  const api = {
    admin: '73538731-4ac3-4a1a-b3b5-e31d09e94d42',
    another: '1fb9fa78-ab95-4bdf-8cca-168357c9faef',
  };
  //const dataProvider = useDatamanager(api.admin);

  const authProvider = useSession();
  if (!dataProvider || !authProvider) {
    return <Loading />;
  }
  return (
    <AdminContext
      dataProvider={dataProvider}
      authProvider={authProvider}
      i18nProvider={i18nProvider}
      customRoutes={customRoutes}
      layout={Layout}
    >
      <AsyncResources />
    </AdminContext>
  );
};
export default App;
