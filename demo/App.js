import React from 'react';
import { Admin, Resource, Loading } from 'react-admin';
import { useSession, useDatamanager, entryCrud, themes } from '../src';
import customRoutes from './custom/routes';
import Layout from './custom/Layout';
// import { MuffinList } from './MuffinList'
//import { MuffinEdit } from './MuffinEdit'
//import { MuffinCreate } from './MuffinCreate'

const App = () => {
  const api = {
    admin: '73538731-4ac3-4a1a-b3b5-e31d09e94d42',
    another: '1fb9fa78-ab95-4bdf-8cca-168357c9faef',
  };
  const dataProvider = useDatamanager(api.admin);
  const authProvider = useSession();
  if (!dataProvider || !authProvider) {
    return <Loading />;
  }
  return (
    <Admin
      dataProvider={dataProvider}
      authProvider={authProvider}
      customRoutes={customRoutes}
      theme={themes.light}
      layout={Layout}
    >
      <Resource name="muffin" {...entryCrud} />
      <Resource name="baker" {...entryCrud} />
      <Resource name="field_test" {...entryCrud} />
    </Admin>
  );
};
export default App;
