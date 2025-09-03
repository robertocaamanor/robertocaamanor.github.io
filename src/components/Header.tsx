import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-gray-200 z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-800">
            Roberto Caamaño
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Acerca de
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Proyectos
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Contacto
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-blue-600"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-2">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors py-2"
              >
                Inicio
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors py-2"
              >
                Acerca de
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors py-2"
              >
                Proyectos
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors py-2"
              >
                Contacto
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
