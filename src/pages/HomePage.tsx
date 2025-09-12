import fotoSecao1 from '../assets/images/pexels-cristian-rojas-8448104.jpg';
import fotoSecao2 from '../assets/images/pexels-divinetechygirl-1181686.jpg';
import DepoimentosEmpreendedores from '../components/DepoimentosEmpreendedores';
import EmpreendedoresDestaque from '../components/EmpreendedoresDestaque';
import ProgramaSEmpreendedores from '../components/ProgramaSEmpreendedores';
import ProgramaSCarousel from '../components/ProgramaSCarousel';

const PrevArrow = ({ onClick } : { onClick?: () => void }) => (
  <button
    className="absolute top-1/2 -left-8 transform -translate-y-1/2 p-2 rounded-full text-azul-profundo z-10 w-12 h-12 flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors duration-200"
    onClick={onClick}
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  </button>
);

const NextArrow = ({ onClick } : { onClick?: () => void }) => (
  <button
    className="absolute top-1/2 -right-8 transform -translate-y-1/2 p-2 rounded-full text-azul-profundo z-10 w-12 h-12 flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors duration-200"
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
        <div className="absolute inset-0 bg-azul-profundo opacity-70"></div>
        
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
                  Eles não são apenas números, são o motor da nossa economia local. Eles representam a vida pulsante que corre nos bairros de Maceió, injetando dignidade e prosperidade em cada comunidade.
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
     {/* Seção 3 Parceiros*/}
      <EmpreendedoresDestaque/>

      {/* Seção 4: Depoimentos */}
      <section className="bg bg-azul-cobalto py-16">
        <div className="container mx-auto px-4 max-w-4xl text-white">
          <h2 className="text-3xl font-bold text-center mb-10">
            O que eles dizem sobre o nosso trabalho
          </h2>
          <DepoimentosEmpreendedores/>
        </div>
      </section>
      
       {/* Seção 6 Parceiros S*/}
       <ProgramaSEmpreendedores/>
      <ProgramaSCarousel/>
      <div className="container mx-auto max-w-5xl px-4 py-8">
          <p className="text-center text-sm text-gray-500 italic">
              *As logos acima representam possíveis parceiros e instituições que o programa pode envolver no futuro para oferecer uma rede de apoio completa aos empreendedores.
          </p>
      </div>
    </>
  );
};

export default HomePage;