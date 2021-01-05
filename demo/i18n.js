import germanMessages from 'ra-language-german';

export default {
  de: {
    resources: {
      'dataManager|b2583313-bef9-457b-b1f0-e065960dc6c5|model|61d7583e-ca12-4697-8f6c-b59d325a5de6|entry': {
        name: 'Benu Order |||| Benu Orders',
        fields: {
          _created: 'Erstellt',
        },
      },
      'dataManager|30ded721-f935-4fe9-9f2c-4a2952f7bfcb|model|061edd27-555f-4426-88ad-c49ce2e9328b|entry': {
        name: 'Demo Order |||| Demo Orders',
        fields: {
          _created: 'Erstellt',
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
