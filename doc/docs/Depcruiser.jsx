import React from 'react';
import InlineSVG from 'svg-inline-react';

export default ({ onClick }) => {
  return (
    <div
      onClick={(e) => {
        e.persist();
        onClick(e);
      }}
    >
      <InlineSVG src={`$SVG$`} />
    </div>
  );
};

// $SVG$ must be replaced with a depcruiser SVG that should be navigatable