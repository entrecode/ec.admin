---
id: hooks
title: Hooks
slug: /hooks
---

## Provider Hooks

Using hooks, you can obtain the following providers:

### [useDatamanager](https://github.com/entrecode/ec.admin/blob/master/src/hooks/useDatamanager.tsx)

```ts
useDatamanager(datamanagerID, env?, ecUser?)
```

Returns [dataProvider](https://marmelab.com/react-admin/Admin.html#dataprovider) that internally uses [PublicAPI](https://entrecode.github.io/ec.sdk/#publicapi). See [Getting Started](./getting-started) for usage.

### [useSession](https://github.com/entrecode/ec.admin/blob/master/src/hooks/useSession.tsx)

```ts
useSession(env?, clientID?)
```

Returns [authProvider](https://marmelab.com/react-admin/Admin.html#authprovider) that internally uses [Session](https://entrecode.github.io/ec.sdk/#session) and [Accounts](https://entrecode.github.io/ec.sdk/#accounts). See [Getting Started](./getting-started) for usage.

### Example

Typically, you would want to use the providers like this:

```js
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
      {/* Resources */}
    </Admin>
  );
};
export default App;
```

## Helper Hooks

### [useFields](https://github.com/entrecode/ec.admin/blob/master/src/hooks/useFields.tsx)

Returns fieldConfig for given model. Appends system fields "id", "\_created" and "\_modified".
Can be used as second argument for fieldProps / inputProps or as fieldConfig prop of EntryListFilter.
Also see [custom Edit View](./custom-form#custom-edit).

### [useFieldConfig](https://github.com/entrecode/ec.admin/blob/master/src/hooks/useFields.tsx)

Returns fieldConfig for given model. Does not append system fields.
Can be used e.g. for a [custom Create View](./custom-form#custom-create).
