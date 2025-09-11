//import React from 'react';
import { FaUserPlus, FaEnvelope, FaIdCard } from 'react-icons/fa';
//import fotoCadastro from '../assets/images/';

const SouClientePage = () => {
return (
        <div>
            {/* Seção 1:*/}
            <section className="bg-azul-profundo text-white py-20 px-4">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Apoie o Coração da sua Comunidade
                    </h1>
                    <p className="text-lg md:text-xl font-light">
                        Descubra as vantagens de comprar de pequenos negócios locais em Maceió.
                    </p>
                </div>
            </section>

            {/* Seção 2: */}
            <section className="bg-white py-16 px-4">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                        Por que comprar localmente?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Cartão de Vantagem 1 */}
                        <div className="text-center p-6 border rounded-lg shadow-sm">
                            <span className="text-4xl text-azul-profundo">🖼</span>
                            <h3 className="font-semibold text-xl my-2">Economia Local</h3>
                            <p className="text-gray-600">
                                Seu dinheiro fortalece a economia do seu bairro e cria novas oportunidades de emprego.
                            </p>
                        </div>
                        {/* Cartão de Vantagem 2 */}
                        <div className="text-center p-6 border rounded-lg shadow-sm">
                            <span className="text-4xl text-azul-profundo">🖼</span>
                            <h3 className="font-semibold text-xl my-2">Produtos Únicos</h3>
                            <p className="text-gray-600">
                                Encontre itens exclusivos, feitos com paixão e qualidade que você não vê em grandes lojas.
                            </p>
                        </div>
                        {/* Cartão de Vantagem 3 */}
                        <div className="text-center p-6 border rounded-lg shadow-sm">
                            <span className="text-4xl text-azul-profundo">🖼</span>
                            <h3 className="font-semibold text-xl my-2">Conexão Humana</h3>
                            <p className="text-gray-600">
                                Construa laços com os empreendedores e conheça a história por trás de cada produto.
                            </p>
                        </div>
                        {/* Cartão de Vantagem 4 */}
                        <div className="text-center p-6 border rounded-lg shadow-sm">
                            <span className="text-4xl text-azul-profundo">🖼</span>
                            <h3 className="font-semibold text-xl my-2">Sustentabilidade</h3>
                            <p className="text-gray-600">
                                Menos transporte, menos desperdício. Comprar perto de casa é uma escolha consciente.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Seção 3: Descontos Exclusivos */}
            <section className="bg-cinza-claro py-16 px-4">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        Descontos e Benefícios Feitos para Você
                    </h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        Cadastre-se com seu CPF para ter acesso a um mundo de vantagens: cupons de desconto exclusivos, promoções relâmpago, e a chance de participar de sorteios especiais com nossos parceiros.
                    </p>
                </div>
            </section>

            {/* Seção 4: Formulário de Cadastro ilustrativo */}
            <section 
                className="relative bg-cover bg-center bg-no-repeat py-20 px-4 min-h-screen flex items-center"
                //style={{ backgroundImage: `url(${backgroundImage})` }}
            >
                <div className="absolute inset-0 bg-grotas-azul opacity-70"></div>
                <div className="container mx-auto flex justify-center md:justify-end">
                    <div className="relative z-10 max-w-xl md:w-1/2 p-8 rounded-xl shadow-2xl bg-white bg-opacity-90">
                        <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">
                            Cadastre-se e Comece a Economizar!
                        </h3>
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="nome" className="block text-gray-700 font-semibold mb-1">Nome Completo</label>
                                <div className="relative">
                                    <FaUserPlus className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
                                    <input 
                                        type="text" 
                                        id="nome" 
                                        className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-grotas-azul transition-all duration-200" 
                                        placeholder="Seu nome" 
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="cpf" className="block text-gray-700 font-semibold mb-1">CPF</label>
                                <div className="relative">
                                    <FaIdCard className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
                                    <input 
                                        type="text" 
                                        id="cpf" 
                                        className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-grotas-azul transition-all duration-200" 
                                        placeholder="Seu CPF (apenas números)" 
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">Email</label>
                                <div className="relative">
                                    <FaEnvelope className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
                                    <input 
                                        type="email" 
                                        id="email" 
                                        className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-grotas-azul transition-all duration-200" 
                                        placeholder="seu-email@exemplo.com" 
                                    />
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-3 mt-4 bg-azul-profundo text-white font-bold rounded-lg hover:bg-opacity-90 transition-all duration-300"
                            >
                                Cadastrar
                            </button>
                            <p className="text-center text-sm text-gray-400 mt-2">
                                *Este é um formulário de demonstração. Os dados não serão armazenados.
                            </p>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SouClientePage;