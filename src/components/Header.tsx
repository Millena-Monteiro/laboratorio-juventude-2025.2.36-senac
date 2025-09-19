import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MobileMenu from './MobileMenu';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

      const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-laranja-vibrante text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex flex-col items-center">
          <h1 className="font-montserrat text-2xl font-bold">Sementes de Empreender</h1>
          <p className="text-base font-lato mt-1">Cultivando ideias, colhendo futuros</p>
        </Link>

        {/* Navegação */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-sm font-medium hover:text-[#2f531e] transition-colors duration-300">
            Home
          </Link>
          <Link to="/sou-empreendedor" className="text-sm font-medium hover:text-[#2f531e] transition-colors duration-300">
            Sou Empreendedor
          </Link>
          <Link to="/blog" className="text-sm font-medium hover:text-[#2f531e] transition-colors duration-300">
            Blog
          </Link>
          <Link to="/sou-cliente" className="text-sm font-medium hover:text-[#2f531e] transition-colors duration-300">
            Sou cliente
          </Link>
          <Link to="/sobre" className="text-sm font-medium hover:text-[#2f531e] transition-colors duration-300">
            Sobre Nós
          </Link>
        </nav>

        <button 
          onClick={toggleMenu} 
          className="md:hidden focus:outline-none"
        >
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
       <MobileMenu isOpen={isMenuOpen} onClose={toggleMenu} />
    </header>
  );
};

export default Header;