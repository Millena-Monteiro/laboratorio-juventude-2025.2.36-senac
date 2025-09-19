import { FaHeart, FaHandshake, FaGlobe, FaUsers, FaHandsHelping, FaLightbulb } from 'react-icons/fa';
import NossaEquipe from '../components/NossaEquipe';


const SobreNosPage = () => {
    return (
        <div className="bg-gray-50">
             <section className="py-16 px-4 md:px-8">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="text-3xl font-bold text-center mb-12 text-laranja-vibrante">
                        Nossa Missão
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="p-6">
                            <FaHeart className="text-4xl mx-auto mb-4 text-laranja-vibrante" />
                            <h3 className="text-xl font-bold mb-2">Conectar Pessoas</h3>
                            <p className="text-gray-600">
                                 Ser a ponte entre empreendedores e a comunidade, criando um ciclo de apoio mútuo.
                            </p>
                        </div>
                        <div className="p-6">
                            <FaHandshake className="text-4xl mx-auto mb-4 text-laranja-vibrante" />
                            <h3 className="text-xl font-bold mb-2">Capacitar e Apoiar</h3>
                            <p className="text-gray-600">
                                Oferecer acesso a informações e recursos que impulsionam o crescimento de pequenos negócios.
                            </p>
                        </div>
                        <div className="p-6">
                            <FaGlobe className="text-4xl mx-auto mb-4 text-laranja-vibrante" />
                            <h3 className="text-xl font-bold mb-2">Impacto Local</h3>
                            <p className="text-gray-600">
                                Fortalecer a economia de comunidades, transformando a vida de famílias e bairros inteiros.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

             <section className="bg-azul-profundo text-white py-16 px-4 md:px-8">
                <div className="container mx-auto max-w-5xl text-center">
                    <h2 className="text-3xl font-bold mb-6" style={{ color: '#99d31d' }}>
                        Nossa História
                    </h2>
                    <p className="text-lg leading-relaxed mb-4">
                        O 'Sementes de Empreender' nasceu dentro da sala de aula do Senac, como parte do projeto 'Laboratório Juventudes'. Como jovens aprendizes, percebemos de perto a realidade de muitos colegas que precisavam usar parte, ou até todo, o seu salário para ajudar no sustento da família.
                    </p>
                    <p className="text-lg leading-relaxed">
                        Essa experiência nos motivou a ir além: entendemos que o problema não era só nosso, mas de muitos em Maceió. O empreendedorismo se mostrou uma saída real para fortalecer a autonomia financeira de diversas famílias e pessoas, incluindo mães e pais solo, pessoas com deficiência, jovens e a comunidade LGBTQIA+.
                    </p>
                    <p className="text-lg leading-relaxed">Com a orientação do nosso professor, transformamos esse insight em uma plataforma de apoio, criada por jovens para apoiar a todos que sonham com um futuro mais próspero.</p>
                </div>
            </section>

            <section className="py-16 px-4 md:px-8 bg-gray-50">
    <div className="container mx-auto max-w-5xl text-center">
        <h2 className="text-3xl font-bold mb-12 text-azul-profundo">
            Nossos Valores
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Card 1 */}
            <div className="bg-white rounded-lg p-6 shadow-md transform transition-transform duration-300 hover:scale-105">
                <FaHandsHelping className="text-4xl mx-auto mb-4 text-laranja-vibrante"/>
                <h3 className="text-xl font-bold mb-2 text-azul-profundo">
                    Apoio Comunitário
                </h3>
                <p className="text-gray-600 text-sm">
                    Acreditamos no poder da comunidade para transformar vidas e negócios.
                </p>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white rounded-lg p-6 shadow-md transform transition-transform duration-300 hover:scale-105">
                <FaLightbulb className="text-4xl mx-auto mb-4" style={{ color: '#99d31d' }} />
                <h3 className="text-xl font-bold mb-2 text-azul-profundo">
                    Inovação
                </h3>
                <p className="text-gray-600 text-sm">
                    Estamos sempre buscando novas formas de impulsionar o empreendedorismo local.
                </p>
            </div>
            
            {/* Card */}
            <div className="bg-white rounded-lg p-6 shadow-md transform transition-transform duration-300 hover:scale-105">
                <FaUsers className="text-4xl mx-auto mb-4 text-laranja-vibrante" />
                <h3 className="text-xl font-bold mb-2 text-azul-profundo">
                    Inclusão
                </h3>
                <p className="text-gray-600 text-sm">
                    Garantimos que a nossa plataforma seja um espaço equitativo para todos.
                </p>
            </div>
            
            {/* Card 4 */}
            <div className="bg-white rounded-lg p-6 shadow-md transform transition-transform duration-300 hover:scale-105">
                <FaHeart className="text-4xl mx-auto mb-4" style={{ color: '#99d31d' }} />
                <h3 className="text-xl font-bold mb-2 text-azul-profundo">
                    Paixão
                </h3>
                <p className="text-gray-600 text-sm">
                    Somos movidos pela paixão em ver pequenos negócios florescerem.
                </p>
            </div>
        </div>
    </div>
</section>
<NossaEquipe/>
</div>
    );
};

export default SobreNosPage;