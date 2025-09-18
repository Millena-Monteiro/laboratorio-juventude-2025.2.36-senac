import React from 'react';
import { empreendedores } from '../components/VitrineData';

const VitrinePage = () => {
    return (
        <section className="bg-gray-100 py-16">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl md:text-5xl font-bold text-center mb-4" style={{ color: '#012e61' }}>
                    Nossa Vitrine Online
                </h1>
                <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                    Conheça e apoie os empreendedores locais de Maceió.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {empreendedores.map(empreendedor => (
                        <div key={empreendedor.id} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                            <img 
                                src={empreendedor.imagem} 
                                alt={empreendedor.nome} 
                                className="w-full h-48 object-cover" 
                            />
                            
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-1" style={{ color: '#012e61' }}>
                                    {empreendedor.nome}
                                </h3>
                                <p className="text-sm font-semibold mb-3" style={{ color: '#ff8c00' }}>
                                    {empreendedor.servico}
                                </p>

                                <p className="text-gray-600 mb-4">
                                    {empreendedor.descricao}
                                </p>
                                
                                <a 
                                    href={`tel:${empreendedor.telefone}`} 
                                    className="bg-laranja-vibrante text-white font-bold py-2 px-6 rounded-full shadow-lg hover:bg-laranja-escuro transition-colors duration-300 inline-block"
                                >
                                    Entre em Contato
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VitrinePage;