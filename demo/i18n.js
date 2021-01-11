import germanMessages from 'ra-language-german';

export default {
  de: {
    resources: {
      'dataManager|2b5c50c8|model|ld_order|entry': {
        name: 'Benu Order |||| Benu Orders',
        fields: {
          _created: 'Erstellt',
          items: 'Items',
        },
      },
      'dataManager|04306d2a|model|ld_order|entry': {
        name: 'Demo Order |||| Demo Orders',
        fields: {
          _created: 'Erstellt',
          items: 'Items',
        },
      },
      'dataManager|83cc6374|model|baker|entry': {},
      // ... more resources
    },
    // the following is just relevant for german:
    ra: {
      ...germanMessages.ra,
      page: {
        ...germanMessages.ra.page,
        loading: 'Bin Laden',
      },
      action: {
        ...germanMessages.ra.action,
        unselect: 'Auswahl aufheben',
      },
    },
  },
};
