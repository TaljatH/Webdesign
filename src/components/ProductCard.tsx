import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Heart, Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  isNew?: boolean;
  isBestseller?: boolean;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const discountPercentage = product.originalPrice 
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;

  return (
    <Card className="group hover:shadow-lg transition-shadow duration-300 border-0 shadow-sm">
      <div className="relative overflow-hidden rounded-t-lg">
        <ImageWithFallback
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              New
            </Badge>
          )}
          {product.isBestseller && (
            <Badge variant="secondary" className="bg-orange-100 text-orange-800">
              Bestseller
            </Badge>
          )}
          {discountPercentage > 0 && (
            <Badge variant="destructive" className="bg-red-500">
              -{discountPercentage}%
            </Badge>
          )}
        </div>

        {/* Wishlist button */}
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-3 right-3 bg-white/80 hover:bg-white rounded-full p-2"
        >
          <Heart className="h-4 w-4" />
        </Button>
      </div>

      <CardContent className="p-4 space-y-3">
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground uppercase tracking-wide">
            {product.category}
          </p>
          <h3 className="line-clamp-2 text-gray-900">{product.name}</h3>
        </div>

        {/* Rating */}
        <div className="flex items-center space-x-1">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(product.rating)
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">
            ({product.reviews})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center space-x-2">
          <span className="text-lg text-gray-900">${product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${product.originalPrice}
            </span>
          )}
        </div>

        {/* Add to cart button */}
        <Button 
          className="w-full bg-pink-600 hover:bg-pink-700"
          onClick={() => onAddToCart(product)}
        >
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
}