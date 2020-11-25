import React from 'react';
import { Admin, Resource, Loading } from 'react-admin';
import { useSession, useDatamanager, entryCrud, themes } from '../lib';

const App = () => {
  const dataProvider = useDatamanager('73538731-4ac3-4a1a-b3b5-e31d09e94d42');
  const authProvider = useSession();
  if (!dataProvider || !authProvider) {
    return <Loading />;
  }
  return (
    <Admin dataProvider={dataProvider} authProvider={authProvider} theme={themes.light}>
      <Resource name={'muffin'} {...entryCrud} />
      <Resource name={'baker'} {...entryCrud} />
      <Resource name={'field_test'} {...entryCrud} />
    </Admin>
  );
};
export default App;
