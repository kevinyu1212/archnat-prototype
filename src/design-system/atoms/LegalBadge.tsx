import React from 'react';
export const LegalBadge = ({ grade }) => (
  <span style={{ background: grade === 'LEVEL_ONE' ? '#E63946' : '#F48C06', color: 'white', padding: '2px 6px', borderRadius: '4px', fontSize: '10px' }}>
    {grade === 'LEVEL_ONE' ? '멸종위기 I급' : '멸종위기 II급'}
  </span>
);
export const ImpactCreditBadge = ({ amount }) => (
  <span style={{ background: '#D4AF37', color: 'white', padding: '2px 8px', borderRadius: '10px' }}>₳ {amount}</span>
);
