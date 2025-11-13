import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', page: 'home' },
    { label: 'Services', page: 'services' },
    { label: 'Packages', page: 'packages' },
    { label: 'About', page: 'about' },
    { label: 'Contact', page: 'contact' }
  ];

  const handleNavClick = (page: string) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => handleNavClick('home')}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-pink-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">P</span>
            </div>
            <div className="ml-3">
              <h1 className="text-lg font-bold text-gray-900 leading-tight">Pink Accounting</h1>
              <p className="text-xs text-gray-600">& Tax Solutions</p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`text-sm font-medium transition-colors ${
                  currentPage === item.page
                    ? 'text-pink-600'
                    : 'text-gray-700 hover:text-pink-600'
                }`}
              >
                {item.label}
              </button>
            ))}
            <a
              href="tel:0735446386"
              className="flex items-center gap-2 bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition-colors text-sm font-medium"
            >
              <Phone className="w-4 h-4" />
              07 3544 6386
            </a>
          </div>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-3 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`block w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  currentPage === item.page
                    ? 'bg-pink-50 text-pink-600'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <a
              href="tel:0735446386"
              className="flex items-center justify-center gap-2 w-full bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition-colors text-sm font-medium"
            >
              <Phone className="w-4 h-4" />
              07 3544 6386
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
