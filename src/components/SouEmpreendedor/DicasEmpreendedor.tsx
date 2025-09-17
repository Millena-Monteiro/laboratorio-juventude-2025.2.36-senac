import { FaPalette, FaBrain, FaBox, FaYoutube, FaUser, FaBullhorn, FaSmile } from 'react-icons/fa';

const DicasEmpreendedor = () => {
  return (
    <section className="bg-gray-100 py-16 px-4 md:px-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Dicas para <span className='text-laranja-vibrante'> Alavancar</span> o seu Negócio
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Neurovendas */}
          <div className="bg-white p-8 rounded-lg shadow-lg text-center transform transition-transform duration-300 hover:scale-105">
            <FaBrain className="text-5xl text-laranja-vibrante mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-4 text-gray-800">Neurovendas</h3>
            <p className="text-gray-600 mb-4">
              Entenda como a mente do seu cliente funciona. Detalhes sensoriais como a música, o cheiro do ambiente e a organização visual do seu espaço podem influenciar a decisão de compra.
            </p>
            <a href="https://blog.growthmachine.com.br/o-que-e-neurovendas/" className="text-laranja-vibrante font-semibold hover:underline" target="_blank"
              rel="noopener noreferrer">
              Saiba Mais &rarr;
            </a>
          </div>

          {/* Psicologia das Cores */}
          <div className="bg-white p-8 rounded-lg shadow-lg text-center transform transition-transform duration-300 hover:scale-105">
            <FaPalette className="text-5xl text-laranja-vibrante mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-4 text-gray-800">Psicologia das Cores no Marketing</h3>
            <p className="text-gray-600 mb-4">
               As cores podem influenciar a percepção de sua marca. O vermelho, por exemplo, evoca urgência em promoções, o azul transmite confiança e o verde é frequentemente usado para produtos ligados à natureza e saúde.
            </p>
            <a href="https://www.agenciatecra.com.br/psicologia-das-cores/" className="text-laranja-vibrante font-semibold hover:underline" target="_blank"
              rel="noopener noreferrer">
              Saiba Mais &rarr;
            </a>
          </div>

          {/* Gestão de Estoque */}
          <div className="bg-white p-8 rounded-lg shadow-lg text-center transform transition-transform duration-300 hover:scale-105">
            <FaBox className="text-5xl text-laranja-vibrante mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-4 text-gray-800">Gestão de Estoque</h3>
            <p className="text-gray-600 mb-4">
              Evite perdas e maximize seus lucros. Um bom controle de estoque permite que você saiba o que tem, o que precisa e quando comprar.
            </p>
            <a href="https://sebrae.com.br/sites/PortalSebrae/artigos/como-gerir-o-estoque-em-uma-pequena-empresa,45b408a96d526810VgnVCM1000001b00320aRCRD" className="text-laranja-vibrante font-semibold hover:underline" target="_blank"
              rel="noopener noreferrer">
              Saiba Mais &rarr;
            </a>
          </div>

          {/* Personas */}
          <div className="bg-white p-8 rounded-lg shadow-lg text-center transform transition-transform duration-300 hover:scale-105">
            <FaUser className="text-5xl text-laranja-vibrante mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-4 text-gray-800">Crie sua Persona Ideal</h3>
            <p className="text-gray-600 mb-4">
              Defina seu cliente ideal para direcionar suas estratégias de marketing. Crie perfis detalhados com informações sobre rotina, desejos e interesses.
            </p>
            <a 
              href="https://youtu.be/zi2X11yAg-g?si=47jYWnCLFB8NJhxE" 
              className="text-laranja-vibrante font-semibold hover:underline"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Assista no YouTube <FaYoutube className="inline-block ml-1" />
            </a>
          </div>

          {/* Tráfego Pago */}
          <div className="bg-white p-8 rounded-lg shadow-lg text-center transform transition-transform duration-300 hover:scale-105">
            <FaBullhorn className="text-5xl text-laranja-vibrante mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-4 text-gray-800">Invista em Tráfego Pago</h3>
            <p className="text-gray-600 mb-4">
              Potencialize o alcance do seu negócio. Anúncios pagos em plataformas como Instagram, TikTok e Google Ads são essenciais para atrair novos clientes de forma rápida.
            </p>
            <a 
              href="https://youtu.be/SDnPEUbYuJc?si=iQ4dhUYJ9T4EIIl5" 
              className="text-laranja-vibrante font-semibold hover:underline"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Assista no YouTube <FaYoutube className="inline-block ml-1" />
            </a>
          </div>

          {/* Atendimento Humanizado*/}
          <div className="bg-white p-8 rounded-lg shadow-lg text-center transform transition-transform duration-300 hover:scale-105">
            <FaSmile className="text-5xl text-laranja-vibrante mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-4 text-gray-800">Atendimento Humanizado</h3>
            <p className="text-gray-600 mb-4">
              Conecte-se com seus clientes de forma genuína. Um atendimento rápido, empático e focado no ser humano cria laços de confiança e fideliza sua clientela.
            </p>
            <a 
              href="https://youtu.be/GOJkUdOIiyw?si=mbFDaPZu5Essd4vd" 
              className="text-laranja-vibrante font-semibold hover:underline"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Assista no YouTube <FaYoutube className="inline-block ml-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DicasEmpreendedor;