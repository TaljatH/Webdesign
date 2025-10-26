import { ProductGrid } from './ProductGrid';
import { Product } from './ProductCard';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface MakeupPageProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

export function MakeupPage({ products, onAddToCart }: MakeupPageProps) {
  // Filter only makeup products
  const makeupProducts = products.filter(p => p.category.toLowerCase() === 'makeup');

  return (
    <div className="min-h-screen bg-white">
      {/* Makeup Hero Section */}
      <section className="relative bg-gradient-to-r from-pink-100 to-purple-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl text-gray-900 tracking-tight">
                  Makeup Collection
                </h1>
                <p className="text-lg text-gray-600 max-w-lg">
                  Discover our premium makeup collection featuring bold lipsticks, stunning eyeshadows, 
                  and everything you need to create your perfect look.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                  <span>Long-lasting Formula</span>
                </div>
                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span>Highly Pigmented</span>
                </div>
                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span>Professional Quality</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-pink-200 to-purple-200 shadow-xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWtldXAlMjBjb3NtZXRpY3N8ZW58MXx8fHwxNzU3NTExMjAzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Makeup collection showcase"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl text-gray-900 mb-4">
              Shop by Category
            </h2>
            <p className="text-gray-600">
              Find the perfect products for every look
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Lipsticks', icon: '💄', count: makeupProducts.filter(p => p.name.toLowerCase().includes('lipstick')).length },
              { name: 'Eyeshadow', icon: '👁️', count: makeupProducts.filter(p => p.name.toLowerCase().includes('eyeshadow')).length },
              { name: 'Foundation', icon: '🎨', count: makeupProducts.filter(p => p.name.toLowerCase().includes('foundation')).length },
              { name: 'Highlighter', icon: '✨', count: makeupProducts.filter(p => p.name.toLowerCase().includes('highlighter')).length },
            ].map((category) => (
              <div
                key={category.name}
                className="bg-white rounded-lg p-6 text-center hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="text-3xl mb-3">{category.icon}</div>
                <h3 className="text-gray-900 mb-1">{category.name}</h3>
                <p className="text-sm text-gray-600">{category.count} products</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
              All Makeup Products
            </h2>
            <p className="text-lg text-gray-600">
              {makeupProducts.length} products available
            </p>
          </div>

          {makeupProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {makeupProducts.map((product) => (
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
                        className="w-full bg-pink-600 hover:bg-pink-700 text-white py-2 px-4 rounded-md transition-colors"
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
              <div className="text-6xl mb-4">💄</div>
              <h3 className="text-xl text-gray-900 mb-2">No makeup products available</h3>
              <p className="text-gray-600">Check back soon for new arrivals!</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}