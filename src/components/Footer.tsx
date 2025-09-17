import { FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-laranja-vibrante text-white py-12 px-4 md:px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/*logo e Slogan */}
        <div>
          <h2 className="font-montserrat text-2xl font-bold mb-2">Sementes de Empreender</h2>
          <p className="text-base font-lato mt-1">Cultivando ideias, colhendo futuros</p>
        </div>

        {/*Navegação */}
        <div>
          <h3 className="text-md font-bold mb-2">Navegação</h3>
          <ul className="space-y-2">
            <li><a href="/" className="text-sm hover:underline">Home</a></li>
            <li><a href="/sou-empreendedor" className="text-sm hover:underline">Sou Empreendedor</a></li>
            <li><a href="/blog" className="text-sm hover:underline">Blog</a></li>
            <li><a href="/sou-cliente" className="text-sm hover:underline">Sou Clientes</a></li>
          </ul>
        </div>

        {/*Contato */}
        <div>
          <h3 className="text-md font-bold mb-2">Contato</h3>
          <ul className="space-y-2">
            <li>
              <a href="mailto:contato@sementesdeempreender.com" className="flex items-center justify-center md:justify-start space-x-2 hover:underline">
                <FaEnvelope className="text-lg" />
                <span>contato@sementesdeempreender.com</span>
              </a>
            </li>
            <li>
              <a href="tel:08001234567" className="flex items-center justify-center md:justify-start space-x-2 hover:underline">
                <FaPhone className="text-lg" />
                <span>0800 123 4567</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-8 pt-4 border-t border-orange-500">
        <p className="text-sm">&copy; 2025 Sementes de Empreender. Todos os direitos reservados.</p>
          </div>
    </footer>
  );
};

export default Footer;