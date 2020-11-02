//https://marmelab.com/react-admin/Translation.html

import * as React from 'react';
import Button from '@material-ui/core/Button';
import { useLocale, useSetLocale } from 'react-admin';

export const LocaleSwitcher = ({ languages }) => {
  const currentLocale = useLocale();
  const setLocale = useSetLocale();
  return (
    <div>
      {languages.map(({ locale, name }) => (
        <Button key={locale} disabled={locale === currentLocale} onClick={() => setLocale(locale)}>
          {name}
        </Button>
      ))}
    </div>
  );
};
