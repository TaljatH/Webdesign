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
}

export function Header({
  cartItemCount,
  onCartClick,
}: HeaderProps) {
  return (
    <header className="w-full bg-white border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl text-primary">
                Company name
              </h1>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Makeup
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Skincare
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Collections
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              About
            </a>
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