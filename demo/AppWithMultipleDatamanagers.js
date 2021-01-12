import React from 'react';
import { Admin, Resource, Loading } from 'react-admin';
import { useSession, themes } from '../lib';
import { OrderList } from './custom/OrderList';
import { OrderEdit } from './custom/OrderEdit';
import { useAsyncProvider } from '../src/hooks/useAsyncProvider';
import dmProvider from '../src/providers/dmProvider';

const App = () => {
  const entryProvider = useAsyncProvider(dmProvider, 'stage');
  const authProvider = useSession();
  if (!entryProvider || !authProvider) {
    return <Loading />;
  }
  return (
    <Admin dataProvider={entryProvider} authProvider={authProvider} theme={themes.light}>
      <Resource name="ld_order" list={OrderList} edit={OrderEdit} />
    </Admin>
  );
};
export default App;
