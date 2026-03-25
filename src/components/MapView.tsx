import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// 마커 스타일 정의
const createIcon = (color: string) => new L.DivIcon({
  className: 'custom-pin',
  html: `<div style="background-color: ${color}; width: 12px; height: 12px; border: 2px solid white; border-radius: 50%; box-shadow: 0 2px 4px rgba(0,0,0,0.3);"></div>`,
  iconSize: [12, 12],
  iconAnchor: [6, 6]
});

const observations = [
  { id: 1, name: '산양', lat: 38.12, lng: 128.20, color: '#3b82f6' },
  { id: 2, name: '삵', lat: 36.50, lng: 126.70, color: '#3b82f6' },
  { id: 3, name: '금자란', lat: 33.30, lng: 126.50, color: '#10b981' },
];

export const MapView = ({ searchTerm, isFullPage = false }: { searchTerm: string, isFullPage?: boolean }) => {
  return (
    <div className="w-full h-full relative overflow-hidden">
      <MapContainer 
        center={[36.2, 127.8]} 
        zoom={isFullPage ? 7 : 8} 
        style={{ height: '100%', width: '100%' }}
        zoomControl={false}
      >
        {/* Vworld 배경지도 사용: '동해' 및 '독도' 표준 표기 보장 */}
        <TileLayer
          url="https://xdworld.vworld.kr/2d/Base/service/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://www.vworld.kr/">vworld</a>'
        />
        
        {observations.filter(o => o.name.includes(searchTerm)).map(obs => (
          <Marker key={obs.id} position={[obs.lat, obs.lng]} icon={createIcon(obs.color)}>
            <Popup>
              <div className="p-1 font-bold text-xs">{obs.name}</div>
            </Popup>
          </Marker>
        ))}
        
        <ZoomControl position="bottomright" />
      </MapContainer>

      {/* 범례 */}
      <div className="absolute bottom-6 left-6 z-[1000] bg-white/95 p-4 rounded-2xl shadow-xl border border-emerald-50 pointer-events-none">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-[11px] font-black text-emerald-900">
            <span className="w-3 h-3 rounded-full bg-blue-500"></span> 동물
          </div>
          <div className="flex items-center gap-2 text-[11px] font-black text-emerald-900">
            <span className="w-3 h-3 rounded-full bg-emerald-500"></span> 식물
          </div>
        </div>
      </div>
    </div>
  );
};