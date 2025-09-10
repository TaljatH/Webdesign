import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProductGrid } from "./components/ProductGrid";
import { Cart, CartItem } from "./components/Cart";
import { Footer } from "./components/Footer";
import { Product } from "./components/ProductCard";
import { Toaster } from "./components/ui/sonner";
import { toast } from "sonner@2.0.3";

// Sample product data
const products: Product[] = [
  {
    id: "1",
    name: "Velvet Matte Lipstick Collection",
    price: 0,
    image:
      "https://firstbenefits.org/wp-content/uploads/2017/10/placeholder-1024x1024.png",
    category: "Makeup",
    isBestseller: true,
  },
  {
    id: "2",
    name: "Hydrating Face Cream",
    price: 0,
    image:
      "https://firstbenefits.org/wp-content/uploads/2017/10/placeholder-1024x1024.png",
    category: "Skincare",
  },
  {
    id: "3",
    name: "Professional Eyeshadow Palette",
    price: 0,
    image:
      "https://firstbenefits.org/wp-content/uploads/2017/10/placeholder-1024x1024.png",
    category: "Makeup",

  },

{
  id: "4",
  name: "Celines special one",
  price: 50,
  image:
  "https://firstbenefits.org/wp-content/uploads/2017/10/placeholder-1024x1024.png",
  category: "Makeup",
  reviews: 500,
  rating: 1,
},
];

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product: Product) => {
    setCartItems((prev) => {
      const existingItem = prev.find(
        (item) => item.id === product.id,
      );
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });

    toast.success(`${product.name} added to cart!`, {
      duration: 2000,
    });
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity === 0) {
      removeFromCart(id);
      return;
    }

    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity } : item,
      ),
    );
  };

  const removeFromCart = (id: string) => {
    setCartItems((prev) =>
      prev.filter((item) => item.id !== id),
    );
    toast.success("Item removed from cart", {
      duration: 2000,
    });
  };

  const totalItems = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0,
  );

  return (
    <div className="min-h-screen bg-white">
      <Header
        cartItemCount={totalItems}
        onCartClick={() => setIsCartOpen(true)}
      />

      <main>
        <Hero />
        <ProductGrid
          products={products}
          onAddToCart={addToCart}
        />
      </main>

      <Footer />

      <Cart
        items={cartItems}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
      />

      <Toaster position="bottom-right" />
    </div>
  );
}