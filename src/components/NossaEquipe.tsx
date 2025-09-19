import millenaImage from '../assets/images/EquipeImage/millena-monteiro-image.jpg';
import hillaryImage from '../assets/images/EquipeImage/hillary-sophia-image.jpg';
import claraImage from '../assets/images/EquipeImage/maria-clara-image.jpg';


const NossaEquipe = () => {
    return (
        <section className="py-16 px-4 md:px-8">
    <div className="container mx-auto max-w-6xl text-center">
        <h2 className="text-3xl font-bold mb-12 text-azul-profundo">
            Nossa Equipe
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-4 gap-6">

              {/* Cartão 1 Valdemir Wanderley SEM FOTO */}
            <div className="bg-white rounded-lg p-4 shadow-md transform transition-transform duration-300 hover:scale-105">
                <div className="w-24 h-24 rounded-full mx-auto mb-3 bg-gray-300 flex items-center justify-center">
                    <span className="text-3xl font-bold text-gray-600">VW</span>
                </div>
                <h3 className="text-lg font-bold leading-tight text-azul-profundo">Valdemir Wanderley </h3>
                <p className="text-xs font-semibold text-laranja-vibrante">Professor</p>
            </div>
            
            {/* Cartão 2 Emily Ramona SEM FOTO */}
            <div className="bg-white rounded-lg p-4 shadow-md transform transition-transform duration-300 hover:scale-105">
                <div className="w-24 h-24 rounded-full mx-auto mb-3 bg-gray-300 flex items-center justify-center">
                    <span className="text-3xl font-bold text-gray-600">ER</span>
                </div>
                <h3 className="text-lg font-bold leading-tight text-azul-profundo">Emily Ramona</h3>
                <p className="text-xs font-semibold text-laranja-vibrante">Elaboração de Slides</p>
            </div>
            
            {/* Cartão 3 Beatriz Victoria SEM FOTO */}
            <div className="bg-white rounded-lg p-4 shadow-md transform transition-transform duration-300 hover:scale-105">
                <div className="w-24 h-24 rounded-full mx-auto mb-3 bg-gray-300 flex items-center justify-center">
                    <span className="text-3xl font-bold text-gray-600">BV</span>
                </div>
                <h3 className="text-lg font-bold leading-tight text-azul-profundo">Beatriz Victoria</h3>
                <p className="text-xs font-semibold text-laranja-vibrante">Documentação</p>
            </div>

            {/* Cartão 4 Heverllyn Ferreira */}
            <div className="bg-white rounded-lg p-4 shadow-md transform transition-transform duration-300 hover:scale-105">
                <div className="w-24 h-24 rounded-full mx-auto mb-3 bg-gray-300 flex items-center justify-center">
                    <span className="text-3xl font-bold text-gray-600">HF</span>
                </div>
                <h3 className="text-lg font-bold leading-tight text-azul-profundo">Heverllyn Ferreira</h3>
                <p className="text-xs font-semibold text-laranja-vibrante">Documentação</p>
            </div>

            {/* Cartão 5 Hillary Sophia COM FOTO*/}
            <div className="bg-white rounded-lg p-4 shadow-md transform transition-transform duration-300 hover:scale-105">
                <img 
                    src={hillaryImage}
                    alt="Hillary Sophia" 
                    className="w-24 h-24 rounded-full mx-auto mb-3 object-cover" 
                />
                <h3 className="text-lg font-bold leading-tight text-azul-profundo">Hillary Sophia</h3>
                <p className="text-xs font-semibold text-laranja-vibrante">Abertura do Projeto</p>
            </div>

            {/* Cartão 6 Maria Clara COM FOTO */}
            <div className="bg-white rounded-lg p-4 shadow-md transform transition-transform duration-300 hover:scale-105">
                <img 
                    src={claraImage}
                    alt=" Maria Clara "
                    className="w-24 h-24 rounded-full mx-auto mb-3 object-cover" 
                />
                <h3 className="text-lg font-bold leading-tight text-azul-profundo">Maria Clara</h3>
                <p className="text-xs font-semibold text-laranja-vibrante">Abertura do Projeto</p>
            </div>

            {/* Cartão 7 Emily Uchôa SEM FOTO */}
            <div className="bg-white rounded-lg p-4 shadow-md transform transition-transform duration-300 hover:scale-105">
                <div className="w-24 h-24 rounded-full mx-auto mb-3 bg-gray-300 flex items-center justify-center">
                    <span className="text-3xl font-bold text-gray-600">EU</span>
                </div>
                <h3 className="text-lg font-bold leading-tight text-azul-profundo">Emily Uchôa</h3>
                <p className="text-xs font-semibold text-laranja-vibrante">Apresentação: Problematização</p>
            </div>

            {/* Cartão 8 Rayssa Vieira  SEM FOTO */}
            <div className="bg-white rounded-lg p-4 shadow-md transform transition-transform duration-300 hover:scale-105">
                <div className="w-24 h-24 rounded-full mx-auto mb-3 bg-gray-300 flex items-center justify-center">
                    <span className="text-3xl font-bold text-gray-600">RV</span>
                </div>
                <h3 className="text-lg font-bold leading-tight text-azul-profundo">Rayssa Vieira</h3>
                <p className="text-xs font-semibold text-laranja-vibrante">Apresentação: Problematização</p>
            </div>

            {/* Cartão 9 Lara Beatriz SEM FOTO */}
            <div className="bg-white rounded-lg p-4 shadow-md transform transition-transform duration-300 hover:scale-105">
                <div className="w-24 h-24 rounded-full mx-auto mb-3 bg-gray-300 flex items-center justify-center">
                    <span className="text-3xl font-bold text-gray-600">LB</span>
                </div>
                <h3 className="text-lg font-bold leading-tight text-azul-profundo">Lara Beatriz</h3>
                <p className="text-xs font-semibold text-laranja-vibrante">Apresentação: Pesquisa de Campo</p>
            </div>

            {/* Cartão 10 Paulo Adriel SEM FOTO */}
            <div className="bg-white rounded-lg p-4 shadow-md transform transition-transform duration-300 hover:scale-105">
                <div className="w-24 h-24 rounded-full mx-auto mb-3 bg-gray-300 flex items-center justify-center">
                    <span className="text-3xl font-bold text-gray-600">PA</span>
                </div>
                <h3 className="text-lg font-bold leading-tight text-azul-profundo">Paulo Adriel</h3>
                <p className="text-xs font-semibold text-laranja-vibrante">Apresentação: Pesquisa de Campo</p>
            </div>

            {/* Cartão 11 Maria Evelyn SEM FOTO */}
            <div className="bg-white rounded-lg p-4 shadow-md transform transition-transform duration-300 hover:scale-105">
                <div className="w-24 h-24 rounded-full mx-auto mb-3 bg-gray-300 flex items-center justify-center">
                    <span className="text-3xl font-bold text-gray-600">ME</span>
                </div>
                <h3 className="text-lg font-bold leading-tight text-azul-profundo">Maria Evelyn</h3>
                <p className="text-xs font-semibold text-laranja-vibrante">Apresentação: Objetivo</p>
            </div>

            {/* Cartão 12 Millena Monteiro COM FOTO */}
            <div className="bg-white rounded-lg p-4 shadow-md transform transition-transform duration-300 hover:scale-105">
                <img 
                    src={millenaImage} 
                    alt="Millena Monteiro" 
                    className="w-24 h-24 rounded-full mx-auto mb-3 object-cover" 
                />
                <h3 className="text-lg font-bold leading-tight text-azul-profundo">Millena Monteiro</h3>
                <p className="text-xs font-semibold text-laranja-vibrante">Apresentação: Solução</p>
            </div>

            {/* Cartão 13 Paulo Henrique SEM FOTO */}
            <div className="bg-white rounded-lg p-4 shadow-md transform transition-transform duration-300 hover:scale-105">
                <div className="w-24 h-24 rounded-full mx-auto mb-3 bg-gray-300 flex items-center justify-center">
                    <span className="text-3xl font-bold text-gray-600">PH</span>
                </div>
                <h3 className="text-lg font-bold leading-tight text-azul-profundo">Paulo Henrique</h3>
                <p className="text-xs font-semibold text-laranja-vibrante">Apresentação: Solução</p>
            </div>


            {/* Cartão 14 Eduardo Oliveira SEM FOTO */}
            <div className="bg-white rounded-lg p-4 shadow-md transform transition-transform duration-300 hover:scale-105">
                <div className="w-24 h-24 rounded-full mx-auto mb-3 bg-gray-300 flex items-center justify-center">
                    <span className="text-3xl font-bold text-gray-600">EO</span>
                </div>
                <h3 className="text-lg font-bold leading-tight text-azul-profundo">Eduardo Oliveira</h3>
                <p className="text-xs font-semibold text-laranja-vibrante">Apresentação: Dinâmica</p>
            </div>

              {/* Cartão 15 Maria Carol SEM FOTO */}
            <div className="bg-white rounded-lg p-4 shadow-md transform transition-transform duration-300 hover:scale-105">
                <div className="w-24 h-24 rounded-full mx-auto mb-3 bg-gray-300 flex items-center justify-center">
                    <span className="text-3xl font-bold text-gray-600">MC</span>
                </div>
                <h3 className="text-lg font-bold leading-tight text-azul-profundo">Maria Carol</h3>
                <p className="text-xs font-semibold text-laranja-vibrante">Apresentação: Dinâmica</p>
            </div>

              {/* Cartão 16 Laura Beatriz SEM FOTO */}
            <div className="bg-white rounded-lg p-4 shadow-md transform transition-transform duration-300 hover:scale-105">
                <div className="w-24 h-24 rounded-full mx-auto mb-3 bg-gray-300 flex items-center justify-center">
                    <span className="text-3xl font-bold text-gray-600">LB</span>
                </div>
                <h3 className="text-lg font-bold leading-tight text-azul-profundo">Laura Beatriz</h3>
                <p className="text-xs font-semibold text-laranja-vibrante">Apresentação: Conclusão</p>
            </div>
        </div>
    </div>
</section>
    );
};

export default NossaEquipe;