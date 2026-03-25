import React from 'react';
export const TaxaHierarchy = ({ hierarchy }) => (
  <div style={{ display: 'flex', gap: '8px', fontSize: '12px' }}>
    {hierarchy.map(h => <span key={h.id}>{h.nameKo}</span>)}
  </div>
);
