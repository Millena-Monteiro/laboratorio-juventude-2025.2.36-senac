import Slider from 'react-slick';
import fotoSecao1 from '../assets/images/pexels-cristian-rojas-8448104.jpg';
import fotoSecao2 from '../assets/images/pexels-divinetechygirl-1181686.jpg';

const PrevArrow = ({ onClick } : { onClick?: () => void }) => (
  <button
    className="absolute top-1/2 -left-8 transform -translate-y-1/2 p-2 rounded-full text-grotas-azul z-10 w-12 h-12 flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors duration-200"
    onClick={onClick}
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  </button>
);

const NextArrow = ({ onClick } : { onClick?: () => void }) => (
  <button
    className="absolute top-1/2 -right-8 transform -translate-y-1/2 p-2 rounded-full text-grotas-azul z-10 w-12 h-12 flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors duration-200"
    onClick={onClick}
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  </button>
  
);
const HomePage = () => {
    // Configurações do carrossel
  const settings = {
    dots: true, // Adiciona os pontinhos de navegação
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Quantos depoimentos aparecem por vez
    slidesToScroll: 1, // Quantos depoimentos rolam por vez
    autoplay: true, // Rolagem automática
    autoplaySpeed: 3000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };
  return (
    <>
      {/* Seção 1 Principal */}
      <section
        className="relative h-[60vh] md:h-[80vh] bg-cover bg-center flex items-center justify-center text-center p-8"
        style={{ backgroundImage: `url(${fotoSecao1})` }}
      >
        {/* Camada de sobreposição escura */}
        <div className="absolute inset-0 bg-grotas-azul opacity-70"></div>
        
        {/* Conteúdo da seção */}
        <div className="relative text-white z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Sementes de Empreender
          </h1>
          <p className="text-lg md:text-xl leading-relaxed mb-8">
            Apoie e promova empreendedores de todos os tipos nas comunidades de Maceió. Juntos,
            estamos construindo um futuro de progresso através de empreendimentos familiares, femininos
            e de jovens que transformam suas vidas.
          </p>
        </div>
      </section>

       {/* Seção 2 Empreendedores mei */}
      <section className="bg-color-white flex items-center justify-center">
        <div className="container mx-auto px-4 py-16 max-w-5xl">
          
          <div>
            <h2 className="text-3xl font-bold text-center mb-10 text-black">
              Transformando Desafios <span className='text-grotas-laranja'>em Oportunidades</span>
            </h2>
            
            {/* Layout de texto e imagem */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/2">
                <p className="text-center md:text-left text-grey mb-6 text-xl">
                  Mais de <strong>160 mil microempreendedores individuais (MEIs)</strong> estão registrados em Alagoas.
                </p>
                <p className="text-center md:text-left text-black mb-4">
                  Eles não são apenas números,são o motor da nossa economia local. Eles representam a vida pulsante que corre nos bairros de Maceió, injetando dignidade e prosperidade em cada comunidade.
              </p>
              <p className="text-center md:text-left text-black mb-4">
                  O impacto de um MEI vai além do negócio individual. É a costureira que formalizou seu ateliê, garantindo seu futuro; é o barbeiro que, ao regularizar seu serviço, se tornou um pilar de sua vizinhança. Cada um deles, ao transformar seu talento em uma iniciativa formal, contribui para construir uma base sólida para o futuro.
              </p>
              <p className="text-center md:text-left text-black">
                  Eles são a prova de que a nossa economia de base é feita de pessoas reais, que com ambição e coragem, fortalecem suas famílias e constroem um futuro mais próspero e justo para todos.
              </p>
              </div>
              {/* Bloco da Imagem */}
              <div className="w-full md:w-1/2 flex justify-center">
                <img
                  src={fotoSecao2}
                  alt="Mulher Sorrindo"
                  className="w-3/4 h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
     {/* Seção 3 Parceiros com Rolagem Horizontal */}
      <section className="bg-grotas-cinza-claro py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-grotas-azul">
            Nossos Empreendedores Parceiros
          </h2>
          <p className="text-center text-gray-600 mt-2 mb-10">
            Conheça os pequenos negócios de Maceió que impulsionam suas comunidades com talento e inovação.
          </p>
          <div className="flex flex-nowrap overflow-x-auto gap-6 p-2">
            <div className="w-40 h-24 flex-none bg-gray-300 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Logo 1</span>
            </div>
            <div className="w-40 h-24 flex-none bg-gray-300 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Logo 2</span>
            </div>
            <div className="w-40 h-24 flex-none bg-gray-300 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Logo 3</span>
            </div>
            <div className="w-40 h-24 flex-none bg-gray-300 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Logo 4</span>
            </div>
            <div className="w-40 h-24 flex-none bg-gray-300 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Logo 5</span>
            </div>
            <div className="w-40 h-24 flex-none bg-gray-300 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Logo 6</span>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 4: Depoimentos */}
      <section className="bg bg-grotas-carmesim py-16">
        <div className="container mx-auto px-4 max-w-4xl text-white">
          <h2 className="text-3xl font-bold text-center mb-10">
            O que eles dizem sobre o nosso trabalho
          </h2>
          <Slider {...settings}>
            {/* Card de Depoimento 1 */}
            <div className="p-6">
              <div className="bg-meu-vermelho p-6 rounded-lg shadow-lg">
                <p className="text-lg italic mb-4">
                  "Esta iniciativa me deu as ferramentas e o apoio de que precisava para expandir meu negócio de manicure. Hoje, sinto que faço parte de algo maior e que meu trabalho realmente importa."
                </p>
                <div className="flex items-center mt-auto">
                  <div className="w-12 h-12 rounded-full bg-gray-300 flex-none mr-4"></div>
                  <div>
                    <h4 className="font-semibold text-white">Maria da Silva</h4>
                    <p className="text-sm text-gray-200">Empreendedora (Manicure)</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Card de Depoimento 2 */}
            <div className="p-6">
              <div className="bg-meu-vermelho p-6 rounded-lg shadow-lg">
                <p className="text-lg italic mb-4">
                  "Através do apoio do projeto, conseguimos formalizar nossa barbearia e atrair mais clientes. É mais do que um negócio; é um ponto de encontro para a nossa comunidade."
                </p>
                <div className="flex items-center mt-auto">
                  <div className="w-12 h-12 rounded-full bg-gray-300 flex-none mr-4"></div>
                  <div>
                    <h4 className="font-semibold text-white">João Ferreira</h4>
                    <p className="text-sm text-gray-200">Empreendedor (Barbeiro)</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Card de Depoimento 3 */}
            <div className="p-6">
              <div className="bg-meu-vermelho p-6 rounded-lg shadow-lg">
                <p className="text-lg italic mb-4">
                  "O projeto nos mostrou que o nosso pequeno negócio de família é essencial. Com o apoio, nossa loja de bolos cresceu e hoje emprega outras pessoas do bairro."
                </p>
                <div className="flex items-center mt-auto">
                  <div className="w-12 h-12 rounded-full bg-gray-300 flex-none mr-4"></div>
                  <div>
                    <h4 className="font-semibold text-white">Ana Paula</h4>
                    <p className="text-sm text-gray-200">Empreendedora (Confeitaria)</p>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
};

export default HomePage;