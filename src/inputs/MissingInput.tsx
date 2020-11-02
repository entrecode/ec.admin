import React from 'react';

export function MissingInput(props) {
  const { type, children } = props;
  return (
    <p>
      <span role="img" aria-label="police">
        🚓
      </span>{' '}
      {children ? children : <>"{type}" input not yet implemented</>}{' '}
      <span role="img" aria-label="officer">
        👮
      </span>
    </p>
  );
}
