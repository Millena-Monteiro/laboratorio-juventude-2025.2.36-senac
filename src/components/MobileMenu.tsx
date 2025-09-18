import React from 'react';

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
    return (
        <div className={`fixed top-0 right-0 h-full w-64 md:w-80 bg-laranja-vibrante text-white shadow-xl transform transition-transform duration-300 ease-in-out
                ${isOpen ? 'translate-x-0' : 'translate-x-full'} z-50`}
        >
            <div className="p-4 flex flex-col h-full">
            <div className="flex justify-end mb-8">
               <button onClick={onClose} className="focus:outline-none p-2">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>

                <div className="text-center mb-10">
                    <h1 className="font-montserrat text-2xl font-bold mb-2">Sementes de Empreender</h1>
                    <p className="text-base font-lato mt-1">Cultivando ideias, colhendo futuros</p>
                </div>
                
            <ul className="flex flex-col items-center space-y-6 text-xl mt-8">
                <li><a href="/" className="text-white hover:text-[#2f531e]" onClick={onClose}>Home</a></li>
                <li><a href="/sou-empreendedor" className="text-white hover:text-[#2f531e]" onClick={onClose}>Sou Empreendedor</a></li>
                <li><a href="/blog" className="text-white hover:text-[#2f531e]" onClick={onClose}>Blog</a></li>
                <li><a href="/sou-cliente" className="text-white hover:text-[#2f531e]" onClick={onClose}>Sou Cliente</a></li>
            </ul>
        </div>
        </div>
    );
};

export default MobileMenu;