import { useState } from 'react';
import { regions, Region } from '@/data/regions';
import RegionCard from './RegionCard';

interface MapPoint {
  regionId: string;
  x: number;
  y: number;
}

const mapPoints: MapPoint[] = [
  { regionId: 'saami', x: 15, y: 18 },
  { regionId: 'pomory', x: 25, y: 25 },
  { regionId: 'karelia', x: 18, y: 38 },
  { regionId: 'mari-el', x: 32, y: 52 },
  { regionId: 'udmurtia', x: 36, y: 50 },
  { regionId: 'chuvashia', x: 30, y: 54 },
  { regionId: 'tatarstan', x: 33, y: 56 },
  { regionId: 'kalmykia', x: 28, y: 72 },
  { regionId: 'ossetia', x: 26, y: 78 },
  { regionId: 'buryatia', x: 70, y: 64 },
  { regionId: 'yakutia', x: 80, y: 35 },
  { regionId: 'far-east', x: 90, y: 60 }
];

export default function InteractiveMap() {
  const [selectedRegion, setSelectedRegion] = useState<Region | null>(null);
  const [hoveredPoint, setHoveredPoint] = useState<string | null>(null);

  const handlePointClick = (regionId: string) => {
    const region = regions.find(r => r.id === regionId);
    if (region) {
      setSelectedRegion(region);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto mb-12">
      <div className="relative w-full bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border-2 border-white/30">
        <div className="relative w-full" style={{ paddingBottom: '50%' }}>
          <img 
            src="https://cdn.poehali.dev/files/9f1ab853-5fa9-4197-8a14-c3022ada8b05.jpg"
            alt="Карта России"
            className="absolute inset-0 w-full h-full object-contain rounded-2xl"
          />
          
          {mapPoints.map((point) => {
            const region = regions.find(r => r.id === point.regionId);
            if (!region) return null;
            
            const isHovered = hoveredPoint === point.regionId;
            
            return (
              <button
                key={point.regionId}
                onClick={() => handlePointClick(point.regionId)}
                onMouseEnter={() => setHoveredPoint(point.regionId)}
                onMouseLeave={() => setHoveredPoint(null)}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300"
                style={{
                  left: `${point.x}%`,
                  top: `${point.y}%`,
                  zIndex: isHovered ? 20 : 10
                }}
              >
                <div className="relative">
                  <div 
                    className={`
                      w-8 h-8 rounded-full flex items-center justify-center text-base
                      shadow-md transition-all duration-300
                      ${isHovered ? 'scale-125 shadow-xl' : 'scale-100'}
                    `}
                    style={{
                      backgroundColor: region.color,
                      borderColor: 'white',
                      borderWidth: '2px'
                    }}
                  >
                    {region.emoji}
                  </div>
                  
                  {isHovered && (
                    <div 
                      className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 
                                 bg-white text-gray-900 px-4 py-2 rounded-lg shadow-xl 
                                 whitespace-nowrap text-sm font-semibold border-2"
                      style={{ borderColor: region.color }}
                    >
                      {region.name}
                    </div>
                  )}
                </div>
              </button>
            );
          })}
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-white/90 text-lg font-medium">
            Нажмите на точку, чтобы узнать о традициях региона ✨
          </p>
        </div>
      </div>

      {selectedRegion && (
        <RegionCard
          region={selectedRegion}
          isOpen={!!selectedRegion}
          onClose={() => setSelectedRegion(null)}
        />
      )}
    </div>
  );
}