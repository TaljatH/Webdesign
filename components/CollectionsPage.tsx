import { Product } from './ProductCard';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

interface CollectionsPageProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  onNavigate?: (page: string) => void;
}

interface Collection {
  id: string;
  name: string;
  description: string;
  image: string;
  products: Product[];
  originalPrice: number;
  salePrice: number;
  badge?: string;
  theme: string;
}

export function CollectionsPage({ products, onAddToCart, onNavigate }: CollectionsPageProps) {
  // Create sample collections from available products
  const collections: Collection[] = [
    {
      id: 'starter-makeup',
      name: 'Makeup Starter Kit',
      description: 'Everything you need to get started with makeup. Perfect for beginners!',
      image: 'https://images.unsplash.com/photo-1627435601550-406e8683be82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWtldXAlMjBwYWxldHRlJTIwY29sbGVjdGlvbiUyMGx1eHVyeXxlbnwxfHx8fDE3NTc1Mjk0MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      products: products.filter(p => p.category.toLowerCase() === 'makeup').slice(0, 3),
      originalPrice: 180,
      salePrice: 149,
      badge: 'Best Seller',
      theme: 'bg-pink-50 border-pink-200'
    },
    {
      id: 'skincare-routine',
      name: 'Complete Skincare Routine',
      description: 'A comprehensive skincare set for morning and evening routines.',
      image: 'https://images.unsplash.com/photo-1666025062728-c33a25e8ee3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luY2FyZSUyMHJvdXRpbmUlMjBidW5kbGV8ZW58MXx8fHwxNzU3NTI5NDI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      products: products.filter(p => p.category.toLowerCase() === 'skincare'),
      originalPrice: 220,
      salePrice: 179,
      badge: 'New',
      theme: 'bg-green-50 border-green-200'
    },
    {
      id: 'luxury-gift',
      name: 'Luxury Gift Set',
      description: 'Premium products beautifully packaged for gifting or treating yourself.',
      image: 'https://images.unsplash.com/photo-1681542787048-be0c067fb962?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBwcm9kdWN0JTIwY29sbGVjdGlvbiUyMGdpZnQlMjBzZXRzfGVufDF8fHx8MTc1NzUyOTQyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      products: products.slice(0, 4),
      originalPrice: 350,
      salePrice: 299,
      badge: 'Limited Edition',
      theme: 'bg-purple-50 border-purple-200'
    }
  ];

  const addCollectionToCart = (collection: Collection) => {
    collection.products.forEach(product => {
      onAddToCart(product);
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Collections Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-100 via-pink-100 to-orange-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl text-gray-900 tracking-tight">
                Curated Collections
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover our carefully curated product collections, from beginner-friendly sets 
                to luxurious gift packages. Save more when you bundle your favorites.
              </p>
            </div>
            <div className="flex justify-center flex-wrap gap-4 text-sm">
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span>Curated by Experts</span>
              </div>
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                <span>Bundle Savings</span>
              </div>
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <span>Perfect for Gifting</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collection Types */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl text-gray-900 mb-4">
              Shop by Collection Type
            </h2>
            <p className="text-gray-600">
              Find the perfect set for every occasion and need
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Gift Sets', icon: '🎁', description: 'Perfect for giving' },
              { name: 'Starter Kits', icon: '✨', description: 'Beginner friendly' },
              { name: 'Travel Size', icon: '✈️', description: 'Take anywhere' },
              { name: 'Limited Edition', icon: '💎', description: 'Exclusive collections' },
            ].map((type) => (
              <div
                key={type.name}
                className="bg-white rounded-lg p-6 text-center hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="text-3xl mb-3">{type.icon}</div>
                <h3 className="text-gray-900 mb-1">{type.name}</h3>
                <p className="text-sm text-gray-600">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
              Featured Collections
            </h2>
            <p className="text-lg text-gray-600">
              Handpicked sets with exclusive savings
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {collections.map((collection) => (
              <div
                key={collection.id}
                className={`${collection.theme} rounded-2xl border overflow-hidden hover:shadow-lg transition-shadow`}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl text-gray-900">{collection.name}</h3>
                        {collection.badge && (
                          <Badge variant="secondary" className="text-xs">
                            {collection.badge}
                          </Badge>
                        )}
                      </div>
                      <p className="text-gray-600 text-sm">{collection.description}</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="text-sm text-gray-600">
                      Includes {collection.products.length} products:
                    </div>
                    <div className="space-y-1">
                      {collection.products.map((product) => (
                        <div key={product.id} className="flex items-center space-x-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                          <span className="text-gray-700">{product.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg text-gray-900">${collection.salePrice}</span>
                        <span className="text-sm text-gray-500 line-through">${collection.originalPrice}</span>
                      </div>
                      <div className="text-xs text-green-600">
                        Save ${collection.originalPrice - collection.salePrice}
                      </div>
                    </div>
                    <Button
                      onClick={() => addCollectionToCart(collection)}
                      className="bg-purple-600 hover:bg-purple-700 text-white"
                    >
                      Add Set to Cart
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
              Why Choose Our Collections?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '💝',
                title: 'Expert Curation',
                description: 'Each collection is carefully selected by our beauty experts to work perfectly together.'
              },
              {
                icon: '💰',
                title: 'Better Value',
                description: 'Save up to 25% compared to buying individual products separately.'
              },
              {
                icon: '🎀',
                title: 'Beautiful Packaging',
                description: 'All collections come in elegant packaging, perfect for gifting or keeping.'
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="text-5xl">{benefit.icon}</div>
                <h3 className="text-xl text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Build Your Own Collection */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h2 className="text-3xl lg:text-4xl text-gray-900">
              Want to Build Your Own Collection?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Mix and match any 3 or more products from our Makeup and Skincare pages 
              to create your custom collection and save 15%.
            </p>
            <div className="flex justify-center gap-4">
              <Button 
                onClick={() => onNavigate?.('makeup')}
                className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3"
              >
                Shop Makeup
              </Button>
              <Button 
                onClick={() => onNavigate?.('skincare')}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
              >
                Shop Skincare
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}