---
id: getting-started
title: Getting Started
sidebar_label: Getting Started
slug: /getting-started
---

This is how you create a new project with ec.admin.

### 1. Init react-app

```sh
npx create-react-app ec.admin-app --template typescript --use-npm
cd ec.admin-app
npm i --save ec.admin react-admin ec.sdk ra-customizable-datagrid
```

### 2. Start Dev Server

For ec.sdk auth to work, prepend "HTTPS=true" to package.json#scripts.start:

```js
{
  "start": "HTTPS=true react-scripts start"
  /* .. */
}
```

now you can run `npm start`.

### 3. Code

Here is a minimal setup for ec.admin:

```tsx
import React from 'react';
import { Admin, Resource, Loading } from 'react-admin';
import { useSession, useDatamanager, entryCrud } from 'ec.admin';

const App = () => {
  const dataProvider = useDatamanager('73538731-4ac3-4a1a-b3b5-e31d09e94d42'); // datamanagerID
  const authProvider = useSession();
  if (!dataProvider || !authProvider) {
    return <Loading />;
  }
  return (
    <Admin dataProvider={dataProvider} authProvider={authProvider}>
      <Resource name={'muffin'} {...entryCrud} />
      <Resource name={'baker'} {...entryCrud} />
      <Resource name={'field_test'} {...entryCrud} />
    </Admin>
  );
};
export default App;
```

Here, just add the models you want as a Resource.

Important: If a resource contains any references (entry / entries fields), you MUST add the referenced models too. To hide an untwanted model from the sidebar, just set list to undefined (or do not use entryCrud spread syntax and omit list prop).

### 4. Have fun

After saving, and logging in with your ec.account (stage), you should see the login screen.

You are now ready to customize the admin, using ec.admin as an adapter between ec.sdk and react-admin.

For inspiration, you should check out the demo folder or [light.react-admin](https://github.com/entrecode/light.react-admin/blob/develop/src/App.tsx).
