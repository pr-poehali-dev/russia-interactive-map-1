import { Region } from '@/data/regions';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface RegionCardProps {
  region: Region;
  isOpen: boolean;
  onClose: () => void;
}

export default function RegionCard({ region, isOpen, onClose }: RegionCardProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white text-gray-900 max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold flex items-center gap-3">
            <span className="text-5xl">{region.emoji}</span>
            {region.name}
          </DialogTitle>
          <DialogDescription className="text-2xl font-semibold text-gray-700 mt-2">
            {region.tradition}
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4 space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">⏰ Когда празднуют:</h3>
            <p className="text-gray-600">{region.when}</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">📖 Традиции:</h3>
            <p className="text-gray-600 leading-relaxed">
              {region.description}
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">🍽️ Традиционные угощения:</h3>
            <p className="text-gray-600">{region.food}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}