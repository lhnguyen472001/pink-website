import { Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleNavClick = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-pink-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <div className="ml-3">
                <h3 className="text-white font-bold text-lg leading-tight">Pink Accounting</h3>
                <p className="text-xs text-gray-400">& Tax Solutions</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Brisbane-based accounting firm helping local businesses thrive.
            </p>
            <p className="text-sm text-gray-400">
              98% client retention since 2020
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleNavClick('home')}
                  className="text-sm hover:text-pink-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('services')}
                  className="text-sm hover:text-pink-400 transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('packages')}
                  className="text-sm hover:text-pink-400 transition-colors"
                >
                  Packages
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('about')}
                  className="text-sm hover:text-pink-400 transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('contact')}
                  className="text-sm hover:text-pink-400 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li>Bookkeeping & Financial Management</li>
              <li>Cashflow Management</li>
              <li>Tax Compliance & Optimisation</li>
              <li>Business Consultancy</li>
              <li>System Optimisation</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a
                href="tel:0735446386"
                className="flex items-center gap-2 text-sm hover:text-pink-400 transition-colors"
              >
                <Phone className="w-4 h-4" />
                07 3544 6386
              </a>
              <a
                href="mailto:admin@pinktax.com.au"
                className="flex items-center gap-2 text-sm hover:text-pink-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                admin@pinktax.com.au
              </a>
              <div className="flex items-start gap-2 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p>1/263 Toombul Rd</p>
                  <p>Northgate QLD 4013</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Pink Accounting & Tax Solutions. All rights reserved.
            </p>
            <p className="text-sm text-gray-400">
              Proudly supporting small business owners from Brisbane to the Sunshine Coast
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
