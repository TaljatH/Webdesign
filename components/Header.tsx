import {
  ShoppingCart,
  Search,
  Menu,
  Heart,
  User,
} from "lucide-react";
import { Button } from "./ui/button";

interface HeaderProps {
  cartItemCount: number;
  onCartClick: () => void;
  currentPage?: string;
  onNavigate?: (page: string) => void;
}

export function Header({
  cartItemCount,
  onCartClick,
  currentPage = 'home',
  onNavigate,
}: HeaderProps) {
  return (
    <header className="w-full bg-white border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <button 
                onClick={() => onNavigate?.('home')}
                className="text-2xl text-primary hover:opacity-80 transition-opacity"
              >
                BeautyGlow
              </button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => onNavigate?.('home')}
              className={`transition-colors ${
                currentPage === 'home' 
                  ? 'text-primary' 
                  : 'text-gray-700 hover:text-primary'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => onNavigate?.('makeup')}
              className={`transition-colors ${
                currentPage === 'makeup' 
                  ? 'text-primary' 
                  : 'text-gray-700 hover:text-primary'
              }`}
            >
              Makeup
            </button>
            <button
              onClick={() => onNavigate?.('skincare')}
              className={`transition-colors ${
                currentPage === 'skincare' 
                  ? 'text-primary' 
                  : 'text-gray-700 hover:text-primary'
              }`}
            >
              Skincare
            </button>
            <button
              onClick={() => onNavigate?.('collections')}
              className={`transition-colors ${
                currentPage === 'collections' 
                  ? 'text-primary' 
                  : 'text-gray-700 hover:text-primary'
              }`}
            >
              Collections
            </button>
          </nav>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="hidden sm:flex"
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="hidden sm:flex"
            >
              <Heart className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="hidden sm:flex"
            >
              <User className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={onCartClick}
              className="relative"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}