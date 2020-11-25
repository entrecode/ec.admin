---
id: theming
title: Theming
sidebar_label: Theming
slug: /theming
---

To theme the admin, use Admin theme prop:

```js
// App.tsx
import { themes } from 'ec.admin';
/* more imports */

const App = () => {
  /* .. */
  return <Admin theme={themes.dark}>{/* stuff */}</Admin>;
};
```

Checkout [ra theme docs](https://marmelab.com/react-admin/Theming.html) for more info.
