import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import PackagesPage from './pages/PackagesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const titles: Record<string, string> = {
      home: 'Pink Accounting & Tax Solutions - Brisbane Accounting Firm',
      services: 'Our Services - Pink Accounting & Tax Solutions',
      packages: 'Service Packages - Pink Accounting & Tax Solutions',
      about: 'About Us - Pink Accounting & Tax Solutions',
      contact: 'Contact Us - Pink Accounting & Tax Solutions'
    };
    document.title = titles[currentPage] || titles.home;
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'services':
        return <ServicesPage onNavigate={setCurrentPage} />;
      case 'packages':
        return <PackagesPage onNavigate={setCurrentPage} />;
      case 'about':
        return <AboutPage onNavigate={setCurrentPage} />;
      case 'contact':
        return <ContactPage onNavigate={setCurrentPage} />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}

export default App;
