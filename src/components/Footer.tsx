const Footer = () => {
  return (
    <footer className="bg-laranja-intenso text-zinc-800 py-8 mt-16">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Seção 1: Logo e Slogan */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <span className="text-3xl font-bold">🌱</span>
          <h2 className="text-lg font-semibold mt-2">Sementes de Empreender</h2>
          <p className="text-sm mt-1">Cultivando ideias, colhendo futuros</p>
        </div>

        {/* Seção 2: Links de Navegação */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-md font-bold mb-2">Navegação</h3>
          <ul className="space-y-2 text-center md:text-left">
            <li><a href="/" className="text-sm hover:underline">Home</a></li>
            <li><a href="/sou-empreendedor" className="text-sm hover:underline">Sou Empreendedor</a></li>
            <li><a href="/blog" className="text-sm hover:underline">Blog</a></li>
            <li><a href="/sou-cliente" className="text-sm hover:underline">Clientes</a></li>
          </ul>
        </div>

        {/* Seção 3: Contato e Redes Sociais */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-md font-bold mb-2">Contato</h3>
          <p className="text-sm">Email: contato@sementes.com</p>
          </div>
          </div>
    </footer>
  );
};

export default Footer;