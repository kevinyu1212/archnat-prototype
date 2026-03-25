import React from 'react';
export const IconCircle = ({ children, size = 40, bg = '#D8F3DC' }) => (
  <div style={{ width: size, height: size, background: bg, borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyCenter: 'center' }}>
    <svg viewBox="0 0 24 24" width={size*0.6} height={size*0.6} fill="none" stroke="#1B4332" strokeWidth="2">{children}</svg>
  </div>
);
export const TAXON_ICONS = [{ id: 'bird', label: '조류' }, { id: 'insect', label: '곤충' }];
