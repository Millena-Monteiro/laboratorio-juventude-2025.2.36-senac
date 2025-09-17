import { FaLaptopCode } from 'react-icons/fa';

const CursosGratuitos = () => {
  const cursos = [
    {
      nome: "Empreendedorismo e Criação de Novos Negócios",
      instituicao: "Sebrae EAD",
      modalidade: "Online",
      icone: <FaLaptopCode />,
      link: "https://www.sebrae.com.br/sites/PortalSebrae/cursosonline",
      descricao: "Este curso online aborda os conceitos essenciais do empreendedorismo e ajuda você a transformar suas ideias em um negócio real e sustentável."
    },
    {
      nome: "EAD em Empreendedorismo",
      instituicao: "Senac EAD",
      modalidade: "Online",
      icone: <FaLaptopCode />,
      link: "https://www.ead.senac.br/cursos-livres/",
      descricao: "Cursos online e gratuitos sobre inovação, modelo de negócio e planejamento estratégico."
    },
    {
      nome: "Cursos de Marketing Digital (Google)",
      instituicao: "Google Ateliê Digital",
      modalidade: "Online",
      icone: <FaLaptopCode />,
      link: "https://learndigital.withgoogle.com/ateliedigital",
      descricao: "Módulos gratuitos sobre vendas online, redes sociais e como usar ferramentas do Google para o seu negócio."
    }
  ];

  return (
    <section className="bg-white py-16 px-4 md:px-8">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-center mb-12 text-azul-cobalto">
          Cursos Gratuitos para Você
        </h2>
        <p className="text-center text-lg text-gray-600 mb-12">
          Invista em seu futuro com cursos online e presenciais que impulsionarão seu conhecimento e seu negócio.
        </p>
        
        <div className="space-y-8">
          {cursos.map((curso, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center justify-between transition-transform duration-300 hover:scale-105">
              <div className="flex items-center text-left mb-4 md:mb-0">
                <div className="text-3xl mr-4 flex-shrink-0 text-azul-cobalto">
                  {curso.icone}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-azul-cobalto">{curso.nome}</h3>
                  <p className="text-gray-700">{curso.instituicao} | {curso.modalidade}</p>
                  <p className="text-gray-500 text-sm mt-1">{curso.descricao}</p>
                </div>
              </div>
              <a 
                href={curso.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-laranja-vibrante text-white font-bold py-2 px-6 rounded-full shadow-lg hover:bg-laranja-escuro transition-colors duration-300 flex-shrink-0"
              >
                Acessar Curso
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CursosGratuitos;