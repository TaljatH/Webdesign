import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProductGrid } from "./components/ProductGrid";
import { MakeupPage } from "./components/MakeupPage";
import { SkincarePage } from "./components/SkincarePage";
import { CollectionsPage } from "./components/CollectionsPage";
import { Cart, CartItem } from "./components/Cart";
import { Footer } from "./components/Footer";
import { Product } from "./components/ProductCard";
import { Toaster } from "./components/ui/sonner";
import { toast } from "sonner@2.0.3";

// Sample product data
const products: Product[] = [
  // Makeup Products
  {
    id: "1",
    name: "Velvet Matte Lipstick Collection",
    price: 0,
    image: "https://images.unsplash.com/photo-1709477542157-9c9249ca2cb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXBzdGljayUyMG1ha2V1cHxlbnwxfHx8fDE3NjE0NzgwNzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Makeup",
    isBestseller: true,
  },
  {
    id: "2",
    name: "Professional Eyeshadow Palette",
    price: 0,
    image: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleWVzaGFkb3clMjBwYWxldHRlfGVufDF8fHx8MTc2MTQ5NTk3NHww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Makeup",
    isNew: true,
  },
  {
    id: "3",
    name: "Radiant Liquid Foundation",
    price: 0,
    image: "https://images.unsplash.com/photo-1599733589046-10c005739ef9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3VuZGF0aW9uJTIwbWFrZXVwfGVufDF8fHx8MTc2MTQwNzMzMHww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Makeup",
    isBestseller: true,
  },
  {
    id: "4",
    name: "Rose Glow Blush",
    price: 0,
    image: "https://images.unsplash.com/photo-1625093525885-282384697917?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibHVzaCUyMG1ha2V1cHxlbnwxfHx8fDE3NjE1MDc1Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Makeup",
  },
  {
    id: "5",
    name: "Long-Lasting Setting Spray",
    price: 0,
    image: "https://images.unsplash.com/photo-1666694890673-b4f0b62fd48e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWtldXAlMjBzZXR0aW5nJTIwc3ByYXl8ZW58MXx8fHwxNzYxNTE2MDgxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Makeup",
  },
  {
    id: "6",
    name: "Luxury Beauty Bundle",
    price: 0,
    image: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleWVzaGFkb3clMjBwYWxldHRlfGVufDF8fHx8MTc2MTQ5NTk3NHww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Makeup",
    isNew: true,
  },
  
  // Skincare Products
  {
    id: "7",
    name: "Hydrating Face Cream",
    price: 0,
    image: "https://images.unsplash.com/photo-1715702129041-ff31d547e498?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWNlJTIwY3JlYW0lMjBza2luY2FyZXxlbnwxfHx8fDE3NjE1MTYwNzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Skincare",
    isBestseller: true,
  },
  {
    id: "8",
    name: "Vitamin C Brightening Serum",
    price: 0,
    image: "https://images.unsplash.com/photo-1665763630810-e6251bdd392d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXJ1bSUyMGJvdHRsZSUyMHNraW5jYXJlfGVufDF8fHx8MTc2MTQzMDIzOXww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Skincare",
    isNew: true,
  },
  {
    id: "9",
    name: "Purifying Clay Mask",
    price: 0,
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWNlJTIwbWFzayUyMHNraW5jYXJlfGVufDF8fHx8MTc2MTQ3Nzk1NXww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Skincare",
  },
  {
    id: "10",
    name: "Daily SPF Moisturizer",
    price: 0,
    image: "https://images.unsplash.com/photo-1689414480286-aae7c21fe1e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5zY3JlZW4lMjBib3R0bGV8ZW58MXx8fHwxNzYxNTA4MjE5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Skincare",
    isBestseller: true,
  },
  {
    id: "11",
    name: "Anti-Aging Eye Cream",
    price: 0,
    image: "https://images.unsplash.com/photo-1516220362602-dba5272034e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleWUlMjBjcmVhbXxlbnwxfHx8fDE3NjE1MTYwODB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Skincare",
  },
  {
    id: "12",
    name: "Gentle Foaming Cleanser",
    price: 0,
    image: "https://images.unsplash.com/photo-1614159102369-effd79eadadd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbnNlciUyMHNraW5jYXJlfGVufDF8fHx8MTc2MTUxNjA4MXww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Skincare",
    isNew: true,
  },
];

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

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

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
     
      case 'collections':
        return (
          <CollectionsPage
            products={products}
            onAddToCart={addToCart}
            onNavigate={handleNavigate}
          />
        );
        
        
      case 'makeup':
        return (
          <MakeupPage
            products={products}
            onAddToCart={addToCart}
          />
        );
      case 'skincare':
        return (
          <SkincarePage
            products={products}
            onAddToCart={addToCart}
          />
        );
      case 'home':
      default:
        return (
          <main>
            <Hero />
            <ProductGrid
              products={products}
              onAddToCart={addToCart}
            />
          </main>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header
        cartItemCount={totalItems}
        onCartClick={() => setIsCartOpen(true)}
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      {renderCurrentPage()}

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