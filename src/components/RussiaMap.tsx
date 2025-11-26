import { useState } from 'react';
import { regions, Region } from '@/data/regions';
import RegionCard from './RegionCard';

export default function RussiaMap() {
  const [selectedRegion, setSelectedRegion] = useState<Region | null>(null);

  return (
    <div className="w-full max-w-6xl mx-auto relative">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6">
        {regions.map((region) => (
          <button
            key={region.id}
            onClick={() => setSelectedRegion(region)}
            className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-white/50 group"
            style={{ 
              backgroundColor: `${region.color}15`,
              borderColor: region.color
            }}
          >
            <div className="flex flex-col items-center gap-3">
              <span className="text-5xl group-hover:scale-125 transition-transform duration-300">
                {region.emoji}
              </span>
              <h3 className="font-bold text-lg text-gray-800 text-center">
                {region.name}
              </h3>
              <p className="text-sm text-gray-600 text-center font-medium">
                {region.tradition}
              </p>
            </div>
          </button>
        ))}
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
