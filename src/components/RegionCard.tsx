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
      <DialogContent className="bg-white text-gray-900 max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center gap-3">
            <span className="text-4xl">{region.emoji}</span>
            {region.name}
          </DialogTitle>
          <DialogDescription className="text-xl font-semibold text-gray-700 mt-2">
            {region.tradition}
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <p className="text-gray-600 leading-relaxed">
            {region.description}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
