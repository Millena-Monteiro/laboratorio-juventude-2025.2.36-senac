import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-laranja-intenso text-zinc-800 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex flex-col items-center">
          <span className="text-3xl font-bold">🌱</span>
          <h1 className="text-lg font-semibold">Sementes de Empreender</h1>
          <p className="text-xs font-light mt-1">Cultivando ideias, colhendo futuros</p>
        </Link>

        {/* Navegação */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-sm font-medium hover:text-white transition-colors duration-300">
            Home
          </Link>
          <Link to="/sou-empreendedor" className="text-sm font-medium hover:text-white transition-colors duration-300">
            Sou Empreendedor
          </Link>
          <Link to="/blog" className="text-sm font-medium hover:text-white transition-colors duration-300">
            Blog
          </Link>
          <Link to="/sou-cliente" className="text-sm font-medium hover:text-white transition-colors duration-300">
            Sou cliente
          </Link>
        </nav>

        {/* Botão de Ação */}
        <Link to="/apoie" className="bg-white text-zinc-800 font-bold py-2 px-4 rounded-full shadow-lg hover:bg-zinc-200 transition-colors duration-300 hidden md:block">
          Visite a loja
        </Link>
      </div>
    </header>
  );
};

export default Header;