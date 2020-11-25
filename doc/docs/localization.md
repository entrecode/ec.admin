---
id: localization
title: Localization
sidebar_label: Localization
slug: /localization
---

To set the language and setup labels for fields, you can use i18nProvider. Example:

```js
// App.tsx
import domainMessages from './i18n';
import germanMessages from 'ra-language-german';
import polyglotI18nProvider from 'ra-i18n-polyglot';

const messages = {
  de: { ...germanMessages, ...domainMessages.de }, // add more languages here
};
const i18nProvider = polyglotI18nProvider((locale) => {
  return messages[locale];
}, 'de');

const App = () => {
  /* .. */
  return <Admin i18nProvider={i18nProvider}>{/* stuff */}</Admin>;
};
```

example domainMessages:

```js
import germanMessages from 'ra-language-german';

export default {
  de: {
    resources: {
      muffin: {
        name: 'Muffin |||| Muffins',
        fields: {
          name: 'Name',
          amazement_factor: 'Amusement',
          _created: 'Erstellt',
          _modified: 'Bearbeitet',
        },
      },
      // ... more resources
    },
    // the following is just relevant for german:
    ra: {
      ...germanMessages.ra,
      page: {
        ...germanMessages.ra.page,
        loading: 'Bin Laden',
      },
    },
  },
};
```

For more info, check out [ra translation doc](https://marmelab.com/react-admin/Translation.html).
There is also a tutorial on how to add a language switcher
