/**
 * Archnat Legal Guard Atoms
 * Endangered Species Badges + Spatial Guard + Impact Credit
 */

import React from 'react';

interface LegalBadgeProps {
  grade: 'LEVEL_ONE' | 'LEVEL_TWO';
  compact?: boolean;
  className?: string;
}

export const LegalBadge: React.FC<LegalBadgeProps> = ({ grade, compact, className = '' }) => {
  const cfg = grade === 'LEVEL_ONE' 
    ? { bg: '#FDEDEF', fg: '#9B1B27', border: '#F26B78', label: '멸종위기 I급' }
    : { bg: '#FEF0DC', fg: '#C1440E', border: '#FAD2A0', label: '멸종위기 II급' };

  return (
    <span className={`inline-flex items-center font-bold shadow-sm ${className}`}
      style={{ 
        background: cfg.bg, 
        color: cfg.fg, 
        border: `1.5px solid ${cfg.border}`,
        padding: compact ? '2px 6px' : '4px 10px', 
        borderRadius: '6px',
        fontSize: compact ? '10px' : '12px',
        lineHeight: 1
      }}>
      {cfg.label}
    </span>
  );
};

export const ImpactCreditBadge: React.FC<{ amount: number; size?: 'sm'|'md'|'lg'; className?: string }> = ({
  amount, size = 'md', className = '',
}) => {
  const s = { 
    sm: { p:'2px 8px', fs:'11px', icon: 10 }, 
    md: { p:'4px 12px', fs:'13px', icon: 14 }, 
    lg: { p:'6px 16px', fs:'16px', icon: 18 } 
  }[size];
  
  return (
    <span className={`inline-flex items-center font-black ${className}`}
      style={{ 
        background: 'linear-gradient(135deg,#A07826 0%,#D4AF37 50%,#E8CC72 100%)',
        color: '#0D2B1E', 
        padding: s.p, 
        borderRadius: '20px', 
        fontSize: s.fs, 
        gap: '6px',
        boxShadow: '0 2px 8px rgba(212,175,55,0.3)',
        border: '1px solid rgba(255,255,255,0.2)'
      }}>
      <span style={{ fontSize: `${s.icon}px` }}>₳</span>
      {amount.toLocaleString()}
    </span>
  );
};

// 나머지 컴포넌트들 (에러 방지용 빈 컴포넌트)
export const UserTierBadge = () => null;
export const SpatialGuardMapOverlay = () => null;
export const AgreementCount = () => null;