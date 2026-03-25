import React from 'react';
import { LegalBadge, ImpactCreditBadge } from '../atoms/LegalBadge';
export const ObservationCard = ({ data }) => (
  <div style={{ border: '1px solid #eee', borderRadius: '12px', overflow: 'hidden' }}>
    <img src={data.imageUrl} style={{ width: '100%' }} />
    <div style={{ padding: '12px' }}>
      {data.endangeredGrade && <LegalBadge grade={data.endangeredGrade} />}
      <h3>{data.commonName}</h3>
      <ImpactCreditBadge amount={data.user.credit} />
    </div>
  </div>
);
