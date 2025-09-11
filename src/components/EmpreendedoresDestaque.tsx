import React from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../index.css';
import logoManicure from '../assets/images/logo-manicure-maria.jpg';
import logoBarbeiro from '../assets/images/logo-barbeiro-joao.jpg';
import logoConfeiteira from '../assets/images/logo-confeiteira-ana.jpg';
import logoPanificadora from '../assets/images/logo-ribeiro-panificadora.png';
import logoCalcados from '../assets/images/logo Augostinho loja de calçados.png';
import logoSemiJoias from '../assets/images/logo Carla S. loja de semijoias.png';
import logoLancho from '../assets/images/logo Lanchô lanchonete.png';
import NextArrow from './SliderArrows/NextArrow';
import PrevArrow from './SliderArrows/PrevArrow';


const logos = [
    { src: logoManicure, alt: "Logo Manicure Maria" },
    { src: logoBarbeiro, alt: "Logo barbeiro João" },
    { src: logoConfeiteira, alt: "Logo confeiteira Ana" },
    { src: logoPanificadora, alt: "Logo Panificadora Ribeiro" },
    { src: logoCalcados, alt: "Logo Agostinho Calçados" },
    { src: logoSemiJoias, alt: "Logo Carla Silva SemiJoias" },
    { src: logoLancho, alt: "Logo Lanchô lanchonete" },
];


const EmpreendedoresDestaque = () => {
    const settings = {
        dots: false,         // Sem bolinhas de navegação
        infinite: true,      // Rolagem infinita
        slidesToShow: 4,     // Quantidade de logos visíveis na tela
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                }
            },
        ],
    };

    return (
        <section className="bg-cinza-claro py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-grotas-azul">
                    Nossos Empreendedores Parceiros
                </h2>
                <p className="text-center text-gray-600 mt-2 mb-10">
                    Conheça os pequenos negócios de Maceió que impulsionam suas comunidades com talento e inovação.
                </p>
                <Slider {...settings}>
                    {logos.map((logo, index) => (
                        <div key={index} className="p-4 flex justify-center items-center">
                            <img 
                                src={logo.src} 
                                alt={logo.alt} 
                                className="h-24 w-auto hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                            />
                        </div>
                        
                    ))}
                </Slider>
                 <p className="text-center text-sm text-gray-400 mb-10">
            *As logos acima são fictícias e utilizadas apenas para fins de demonstração.
        </p>
            </div>
        </section>
    );
};

export default EmpreendedoresDestaque;