import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-pink-50 to-purple-50 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl text-gray-900 tracking-tight">
                "heading"
                <span className="block text-pink-600">heading2</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-lg">
                "description here pls".
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-pink-600 hover:bg-pink-700">
                Shop Collection
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-white shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1612590838546-42efc879aa49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWtldXAlMjBjb3NtZXRpY3MlMjBiZWF1dHklMjBwcm9kdWN0c3xlbnwxfHx8fDE3NTc1MTExOTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Beauty products showcase"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-pink-200 rounded-full opacity-60"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-purple-200 rounded-full opacity-40"></div>
          </div>
        </div>
      </div>
    </section>
  );
}