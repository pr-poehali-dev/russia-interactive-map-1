import { useState } from 'react';
import { regions, Region } from '@/data/regions';
import RegionCard from './RegionCard';

interface MapPoint {
  regionId: string;
  x: number;
  y: number;
}

const mapPoints: MapPoint[] = [
  { regionId: 'far-east', x: 88, y: 58 },
  { regionId: 'yakutia', x: 78, y: 38 },
  { regionId: 'buryatia', x: 68, y: 62 },
  { regionId: 'chuvashia', x: 32, y: 54 },
  { regionId: 'tatarstan', x: 35, y: 56 },
  { regionId: 'kalmykia', x: 30, y: 72 },
  { regionId: 'mari-el', x: 34, y: 51 },
  { regionId: 'udmurtia', x: 38, y: 49 },
  { regionId: 'ossetia', x: 28, y: 75 },
  { regionId: 'karelia', x: 20, y: 35 },
  { regionId: 'saami', x: 18, y: 22 },
  { regionId: 'pomory', x: 27, y: 28 }
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
            src="https://cdn.poehali.dev/files/b59c5a9a-468e-4e53-99a1-eceb437dac65.jpg"
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