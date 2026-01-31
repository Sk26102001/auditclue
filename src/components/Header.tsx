import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, LogIn, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logo from "@/assets/logo.png";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Technology", href: "/technology" },
  { name: "Knowledge Hub", href: "/knowledge" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => location.pathname === href;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/60 backdrop-blur-lg shadow-soft py-3"
          : "bg-white backdrop-blur-lg shadow-soft py-5"
      }`}
    >
      <nav className="section-container flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Auditclue" className="h-16 w-auto"/>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`text-sm font-medium transition-colors link-underline ${
                isActive(item.href)
                  ? "text-accent"
                  : isScrolled
                  ? "text-foreground hover:text-accent"
                  : "text-navy hover:text-accent"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Login Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className={`gap-2 transition-all ${
                  isScrolled
                    ? "border-navy/20 text-navy hover:bg-navy hover:text-white"
                    : "border-navy/30 text-navy hover:bg-navy hover:text-white"
                }`}
              >
                <LogIn className="w-4 h-4" />
                Login
                <ChevronDown className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem asChild>
                <a
                  href="#client-login"
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <Users className="w-4 h-4" />
                  Client Portal
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a
                  href="#employee-login"
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <LogIn className="w-4 h-4" />
                  Employee Portal
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button className="bg-accent hover:bg-teal-dark text-white btn-premium">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-navy" />
          ) : (
            <Menu className="w-6 h-6 text-navy" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-lg border-t border-border animate-fade-in">
          <div className="section-container py-6 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block py-2 text-base font-medium transition-colors ${
                  isActive(item.href)
                    ? "text-accent"
                    : "text-foreground hover:text-accent"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-border space-y-3">
              <a
                href="#client-login"
                className="flex items-center gap-2 py-2 text-navy hover:text-accent transition-colors"
              >
                <Users className="w-4 h-4" />
                Client Portal Login
              </a>
              <a
                href="#employee-login"
                className="flex items-center gap-2 py-2 text-navy hover:text-accent transition-colors"
              >
                <LogIn className="w-4 h-4" />
                Employee Portal Login
              </a>
              <Button className="w-full bg-accent hover:bg-teal-dark text-white mt-4">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
