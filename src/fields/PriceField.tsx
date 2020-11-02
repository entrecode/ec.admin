import React from 'react';

const currency = new Intl.NumberFormat('de', {
  style: 'currency',
  currency: 'EUR',
});

export function PriceField(props) {
  const { source, record } = props;
  if (!record[source]) {
    return <></>;
  }
  return <span>{currency.format(record[source])}</span>;
}

PriceField.defaultProps = {
  addLabel: true,
};
