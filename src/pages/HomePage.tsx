import fotoSecao1 from '../assets/images/HomeImages/pexels-cristian-rojas-8448104.jpg';
import fotoSecao2 from '../assets/images//HomeImages/pexels-divinetechygirl-1181686.jpg';
import DepoimentosEmpreendedores from '../components/DepoimentosEmpreendedores';
import EmpreendedoresDestaque from '../components/EmpreendedoresDestaque';
import PossiveisParceiros from '../components/PossiveisParceiros';

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
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
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
        <div className="absolute inset-0 bg-azul-profundo opacity-70"></div>
        
        <div className="relative text-white z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Sementes de Empreender
          </h1>
          <p className="text-lg md:text-xl leading-relaxed mb-8">
            Cada sonho de empreender é uma semente que merece florescer. Nosso projeto é uma rede de apoio para a comunidade, promovendo a autonomia e o crescimento de todos os tipos de empreendedores. Liderados por famílias, mulheres, mães e pais solo, pessoas negras, pardas, pessoas com deficiência, jovens e a comunidade LGBTQIA+, nosso objetivo é dar voz e visibilidade a quem está construindo um futuro de prosperidade com as próprias mãos.
          </p>
        </div>
      </section>

       {/* Seção 2 Info Empreendedores mei */}
      <section className="bg-color-white flex items-center justify-center">
        <div className="container mx-auto px-4 py-16 max-w-5xl">
          
          <div>
            <h2 className="text-3xl font-bold text-center mb-10 text-black">
              Transformando Desafios <span className='text-laranja-vibrante'>em Oportunidades</span>
            </h2>
            
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/2">
                <p className="text-center md:text-left mb-6 text-xl">
                  Mais de <strong >160 mil microempreendedores individuais (MEIs)</strong> estão registrados em Alagoas.
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

      <EmpreendedoresDestaque/>

          <DepoimentosEmpreendedores/>
      
       <PossiveisParceiros/>
    </>
  );
};

export default HomePage;