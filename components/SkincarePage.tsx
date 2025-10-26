import { ProductGrid } from './ProductGrid';
import { Product } from './ProductCard';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface SkincarePageProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

export function SkincarePage({ products, onAddToCart }: SkincarePageProps) {
  // Filter only skincare products
  const skincareProducts = products.filter(p => p.category.toLowerCase() === 'skincare');

  return (
    <div className="min-h-screen bg-white">
      {/* Skincare Hero Section */}
      <section className="relative bg-gradient-to-r from-green-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl text-gray-900 tracking-tight">
                  Skincare Collection
                </h1>
                <p className="text-lg text-gray-600 max-w-lg">
                  Nourish and protect your skin with our carefully curated collection of cleansers, 
                  serums, moisturizers, and treatments for healthy, radiant skin.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span>Natural Ingredients</span>
                </div>
                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span>Dermatologist Tested</span>
                </div>
                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                  <span>Cruelty Free</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-green-100 to-blue-100 shadow-xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1679394042786-5a287699d600?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luY2FyZSUyMHByb2R1Y3RzJTIwc2VydW0lMjBtb2lzdHVyaXplcnxlbnwxfHx8fDE3NTc1MjkzMzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Skincare collection showcase"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skin Types Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl text-gray-900 mb-4">
              Shop by Skin Type
            </h2>
            <p className="text-gray-600">
              Find products tailored to your unique skin needs
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Dry Skin', icon: '💧', description: 'Hydrating formulas', color: 'bg-blue-50 border-blue-200' },
              { name: 'Oily Skin', icon: '🌿', description: 'Oil-controlling care', color: 'bg-green-50 border-green-200' },
              { name: 'Sensitive', icon: '🌸', description: 'Gentle & soothing', color: 'bg-pink-50 border-pink-200' },
              { name: 'Anti-Aging', icon: '✨', description: 'Youth renewal', color: 'bg-purple-50 border-purple-200' },
            ].map((skinType) => (
              <div
                key={skinType.name}
                className={`${skinType.color} rounded-lg p-6 text-center hover:shadow-md transition-shadow cursor-pointer border`}
              >
                <div className="text-3xl mb-3">{skinType.icon}</div>
                <h3 className="text-gray-900 mb-1">{skinType.name}</h3>
                <p className="text-sm text-gray-600">{skinType.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Routine Steps */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
              Your Daily Skincare Routine
            </h2>
            <p className="text-lg text-gray-600">
              Follow these essential steps for healthy, glowing skin
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Cleanse',
                description: 'Remove makeup, dirt, and impurities with gentle cleansers',
                color: 'bg-blue-500'
              },
              {
                step: '02',
                title: 'Treat',
                description: 'Apply serums and treatments to target specific concerns',
                color: 'bg-green-500'
              },
              {
                step: '03',
                title: 'Moisturize',
                description: 'Hydrate and protect with moisturizers and SPF',
                color: 'bg-purple-500'
              }
            ].map((routineStep) => (
              <div key={routineStep.step} className="text-center">
                <div className={`w-16 h-16 ${routineStep.color} rounded-full flex items-center justify-center text-white mx-auto mb-4`}>
                  <span className="text-lg">{routineStep.step}</span>
                </div>
                <h3 className="text-xl text-gray-900 mb-3">{routineStep.title}</h3>
                <p className="text-gray-600">{routineStep.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
              All Skincare Products
            </h2>
            <p className="text-lg text-gray-600">
              {skincareProducts.length} products available
            </p>
          </div>

          {skincareProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {skincareProducts.map((product) => (
                <div key={product.id} className="group">
                  <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow p-4">
                    <div className="aspect-square bg-gray-100 rounded-lg mb-4 overflow-hidden">
                      <ImageWithFallback
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-gray-900 line-clamp-2">{product.name}</h3>
                      <p className="text-gray-600">${product.price}</p>
                      {product.rating && (
                        <div className="flex items-center space-x-1">
                          <span className="text-yellow-400">★</span>
                          <span className="text-sm text-gray-600">
                            {product.rating} ({product.reviews} reviews)
                          </span>
                        </div>
                      )}
                      <button
                        onClick={() => onAddToCart(product)}
                        className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md transition-colors"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🧴</div>
              <h3 className="text-xl text-gray-900 mb-2">No skincare products available</h3>
              <p className="text-gray-600">Check back soon for new arrivals!</p>
            </div>
          )}
        </div>
      </section>

      {/* Skincare Tips */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
              Skincare Tips
            </h2>
            <p className="text-lg text-gray-600">
              Expert advice for your best skin ever
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                tip: 'Always wear SPF during the day, even indoors',
                icon: '☀️'
              },
              {
                tip: 'Introduce new products gradually to avoid irritation',
                icon: '🧪'
              },
              {
                tip: 'Consistency is key - stick to your routine daily',
                icon: '📅'
              }
            ].map((tip, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="text-4xl mb-4">{tip.icon}</div>
                <p className="text-gray-700">{tip.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}