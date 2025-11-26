import RussiaMap from '@/components/RussiaMap';
import InteractiveMap from '@/components/InteractiveMap';
import Snowflakes from '@/components/Snowflakes';

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-600 via-red-700 to-red-800 relative overflow-hidden">
      <Snowflakes />
      
      <div className="relative z-10 py-12 px-4">
        <header className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            🎄 Новогодние традиции России 🎄
          </h1>
          <p className="text-xl text-white/90 drop-shadow">
            Нажмите на точку на карте, чтобы узнать о традициях региона
          </p>
        </header>

        <InteractiveMap />
        
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Все регионы
          </h2>
          <RussiaMap />
        </div>

        <footer className="text-center mt-12 text-white/80">
          <p className="text-sm">
            С Новым годом! 🎉 Пусть каждый регион России встретит праздник по-своему ✨
          </p>
        </footer>
      </div>

      <div 
        className="absolute top-0 left-0 w-full h-32 bg-no-repeat bg-cover opacity-90 pointer-events-none"
        style={{
          backgroundImage: 'url(https://cdn.poehali.dev/files/dbce22b3-5783-4e5a-8006-0f7a8ff4d125.jpg)',
          backgroundPosition: 'top',
          maskImage: 'linear-gradient(to bottom, white, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, white, transparent)'
        }}
      />
      
      <div 
        className="absolute bottom-0 left-0 w-full h-32 bg-no-repeat bg-cover opacity-90 pointer-events-none"
        style={{
          backgroundImage: 'url(https://cdn.poehali.dev/files/dbce22b3-5783-4e5a-8006-0f7a8ff4d125.jpg)',
          backgroundPosition: 'bottom',
          maskImage: 'linear-gradient(to top, white, transparent)',
          WebkitMaskImage: 'linear-gradient(to top, white, transparent)'
        }}
      />
    </div>
  );
}