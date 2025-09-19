import heroImage from '../assets/images/PageSouEmpreendedor/geminiIA-image-empreendedora.png';
import DicasEmpreendedor from '../components/SouEmpreendedor/DicasEmpreendedor';
import CursosGratuitos from '../components/SouEmpreendedor/CursosGratuitos';
import ChamadaCadastro from '../components/SouEmpreendedor/ChamadaCadastro';
import AvisoPrototipo from '../components/AvisoPrototipo';

const SouEmpreendedor = () => {
  return (
    <>
    <section
      className="relative h-[60vh] md:h-[80vh] bg-cover bg-center flex items-center justify-center text-center p-8"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-azul-profundo opacity-70"></div>
      <div className="relative text-white z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Sua Jornada Empreendedora Começa Aqui
        </h1>
        <p className="text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
          Encontre os recursos, o apoio e as ferramentas para transformar sua paixão em um negócio de sucesso e se conectar com uma comunidade que entende você.
        </p>
        <button className="bg-laranja-vibrante text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-laranja-escura transition-colors duration-300">
          Cadastre seu Negócio
        </button>
      </div>
    </section>

    <section>
    <DicasEmpreendedor/>
    </section>

    <section>
    <CursosGratuitos/>
    </section>

    <AvisoPrototipo 
    texto="Este site é um protótipo para fins de demonstração. As instituições apresentadas são potenciais parceiros, cujas informações são ilustrativas para nosso projeto." 
/>

    <section className="bg-white py-16 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#012e61' }}>
            Recursos e Parcerias para o Empreendedor
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed mb-12">
            Aqui você encontra um guia completo de apoio para o seu negócio. Nossas parcerias foram pensadas para cobrir todas as etapas da sua jornada, da capacitação profissional à gestão financeira e formalização.
          </p>
          
          {/* Subseção de Capacitação e Desenvolvimento */}
          <h3 className="text-2xl font-bold text-left mb-6" style={{ color: '#ff8c00' }}>
            Capacitação e Desenvolvimento Profissional
          </h3>
          <p className="text-md text-gray-600 text-left mb-8">
            Os pequenos negócios de Maceió contam com o apoio de instituições do Sistema S, que oferecem cursos e consultorias focadas em gestão, inovação e qualificação. Invista em você e na sua equipe para garantir um crescimento sólido.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Card SEBRAE */}
            <div className="bg-white rounded-lg p-6 shadow-md border-t-4" style={{ borderColor: '#99d31d' }}>
              <h4 className="text-xl font-bold mb-2" style={{ color: '#012e61' }}>SEBRAE</h4>
              <p className="text-sm text-gray-600 mb-4">
                Referência no apoio a micro e pequenas empresas, o Sebrae oferece um vasto catálogo de cursos, consultorias e workshops para aprimorar sua gestão, marketing e finanças.
              </p>
              <a href="https://al.sebrae.com.br/" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold hover:underline" style={{ color: '#99d31d' }}>Saiba mais sobre os serviços</a>
            </div>

            {/* Card SENAC */}
            <div className="bg-white rounded-lg p-6 shadow-md border-t-4" style={{ borderColor: '#99d31d' }}>
              <h4 className="text-xl font-bold mb-2" style={{ color: '#012e61' }}>SENAC</h4>
              <p className="text-sm text-gray-600 mb-4">
                Para o setor de comércio e serviços, o Senac oferece qualificação profissional de alta qualidade. Com cursos em gastronomia, turismo e tecnologia, você e sua equipe podem se especializar.
              </p>
              <a href="https://www.al.senac.br/" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold hover:underline" style={{ color: '#99d31d' }}>Conheça os cursos</a>
            </div>

            {/* Card SENAI */}
            <div className="bg-white rounded-lg p-6 shadow-md border-t-4" style={{ borderColor: '#99d31d' }}>
              <h4 className="text-xl font-bold mb-2" style={{ color: '#012e61' }}>SENAI</h4>
              <p className="text-sm text-gray-600 mb-4">
                Focado na indústria, o Senai oferece cursos técnicos e de aperfeiçoamento para quem atua em áreas como construção civil e tecnologia da informação.
              </p>
              <a href="https://al.senai.br/" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold hover:underline" style={{ color: '#99d31d' }}>Descubra os cursos</a>
            </div>
          </div>
          
          {/* Subseção de Formalização */}
          <h3 className="text-2xl font-bold text-left mb-6" style={{ color: '#ff8c00' }}>
            Formalização e Segurança Jurídica
          </h3>
          <p className="text-md text-gray-600 text-left mb-8">
            A burocracia pode ser um obstáculo, mas com o apoio dos órgãos da Prefeitura de Maceió, você pode formalizar seu negócio de forma segura e transparente, garantindo seus direitos e evitando problemas futuros.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card SEFAZ */}
            <div className="bg-white rounded-lg p-6 shadow-md border-t-4" style={{ borderColor: '#ff8c00' }}>
              <h4 className="text-xl font-bold mb-2" style={{ color: '#012e61' }}>SEFAZ Maceió</h4>
              <p className="text-sm text-gray-600 mb-4">
                A Sefaz é a secretaria responsável pela gestão tributária do município. Eles podem ajudar com a emissão de notas fiscais, alvarás de funcionamento e informações sobre impostos.
              </p>
              <a href="https://www.sefaz.al.gov.br/" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold hover:underline" style={{ color: '#ff8c00' }}>Acesse o site</a>
            </div>

            {/* Card SEMTABES */}
            <div className="bg-white rounded-lg p-6 shadow-md border-t-4" style={{ borderColor: '#ff8c00' }}>
              <h4 className="text-xl font-bold mb-2" style={{ color: '#012e61' }}>SEMTABES</h4>
              <p className="text-sm text-gray-600 mb-4">
                A Semtabes atua no fomento do desenvolvimento econômico e social. Por meio de programas de microcrédito e feiras, a secretaria pode ser um parceiro importante para quem busca apoio e visibilidade.
              </p>
              <a href="https://maceio.al.gov.br/semtabes" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold hover:underline" style={{ color: '#ff8c00' }}>Conheça a atuação</a>
            </div>

            {/* Card PROCON */}
            <div className="bg-white rounded-lg p-6 shadow-md border-t-4" style={{ borderColor: '#ff8c00' }}>
              <h4 className="text-xl font-bold mb-2" style={{ color: '#012e61' }}>PROCON Maceió</h4>
              <p className="text-sm text-gray-600 mb-4">
                Entender o Código de Defesa do Consumidor é essencial para construir uma relação de confiança com seus clientes. O Procon Maceió oferece orientações e fiscalização para garantir que seu negócio opere de forma justa e ética.
              </p>
              <a href="https://www.procon.al.gov.br/" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold hover:underline" style={{ color: '#ff8c00' }}>Saiba mais no portal</a>
            </div>
          </div>
        </div>
      </section>

    <section> 
    <ChamadaCadastro/>
    </section>
    </>
  );
};

export default SouEmpreendedor;