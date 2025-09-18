import { FaMapMarkerAlt, FaHeart, FaSearch } from 'react-icons/fa';
import clienteImage from '../assets/images/PageSouCliente/representacao-da-acao-cliente.jpg'
import { Link } from 'react-router-dom';


const SouClientePage = () => {
return (
        <div className="min-h-screen bg-gray-50">
            {/* Seção 1*/}
            <section className="bg-azul-profundo text-white py-24 md:py-32 text-center px-4">
                <div className="container mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#99d31d]">
                        Bem-vindo à Sua Vitrine Online
                    </h1>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        Conecte-se com negócios locais incríveis e descubra produtos e serviços de qualidade. Aqui, você encontra o que precisa e apoia o empreendedorismo da sua comunidade.
                    </p>
                </div>
            </section>

            {/* Seção 2 Benefícios em Cards */}
      <section className="bg-gray-100 py-16 px-4 md:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Por que usar a nossa Vitrine?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1 Encontre Perto de Você */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center transform transition-transform duration-300 hover:scale-105">
              <FaMapMarkerAlt className="text-5xl mx-auto mb-4" style={{ color: '#ff8c00' }} />
              <h3 className="text-xl font-bold mb-4 text-gray-800">Encontre Perto de Você</h3>
              <p className="text-gray-600">
                Localize com facilidade os melhores negócios e serviços da sua região.
              </p>
            </div>

            {/* Card 2 Descubra Novidades */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center transform transition-transform duration-300 hover:scale-105">
              <FaSearch className="text-5xl mx-auto mb-4" style={{ color: '#ff8c00' }} />
              <h3 className="text-xl font-bold mb-4 text-gray-800">Descubra Novidades</h3>
              <p className="text-gray-600">
                Fique por dentro dos lançamentos e dos novos empreendedores que estão surgindo em sua comunidade.
              </p>
            </div>

            {/* Card 3 Apoie Empreendedores Locais */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center transform transition-transform duration-300 hover:scale-105">
              <FaHeart className="text-5xl mx-auto mb-4" style={{ color: '#ff8c00' }} />
              <h3 className="text-xl font-bold mb-4 text-gray-800">Apoie Empreendedores Locais</h3>
              <p className="text-gray-600">
                Ao comprar de negócios locais, você fortalece a economia da sua cidade e faz a diferença.
              </p>
            </div>

          </div>
        </div>
      </section>
      <section className="bg-white py-12 px-4 md:px-8 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Encontre um Empreendedor perto de você
          </h3>
          <a
              href="https://www.google.com/maps/search/neg%C3%B3cios+locais+em+Macei%C3%B3"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-laranja-vibrante text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-laranja-escuro transition-colors duration-300"
          >
              Buscar no Google Maps
          </a>
      </section>

      {/* Seção Chamada para a Vitrine */}
      <section className="bg-azul-profundo text-white py-16 px-4 md:px-8 text-center">
        <div className="container mx-auto max-w-6xl">
            <div className="p-8 md:p-12 rounded-2xl shadow-xl flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2 text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#99d31d' }}>
                        Pronto para Ajudar o Comércio Local?
                    </h2>
                    <p className="text-lg md:text-xl leading-relaxed mb-8">
                        Explore nossa vitrine de negócios e descubra empreendedores que estão transformando a economia de Maceió.
                        </p>
                    <Link to="/vitrine">
                    <button className="bg-laranja-vibrante text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-laranja-escuro transition-colors duration-300">
                        Explorar Vitrine
                    </button>
                    </Link>
                </div>

                <div className="md:w-1/2 flex justify-center">
                    <img
                        src={clienteImage}
                        alt="Mulher segurando um telefone, representação de ação"
                        className="rounded-lg shadow-lg max-w-full h-auto object-cover"
                    />
                </div>
            </div>
        </div>
      </section>
      
    </div>
  );
};
export default SouClientePage;