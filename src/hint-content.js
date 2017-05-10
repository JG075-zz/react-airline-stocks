import React from 'react';

export default function HintContent({pos, company}) {
  return <div className='chartLabel'style={{ position: 'absolute', top: pos.y, left: pos.x }}>My airline</div>;
}
