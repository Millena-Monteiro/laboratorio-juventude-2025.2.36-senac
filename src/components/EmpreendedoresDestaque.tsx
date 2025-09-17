import React from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../index.css';
import logoManicure from '../assets/images/LogoEmpreendedores/logo-manicure-maria.jpg';
import logoBarbeiro from '../assets/images/LogoEmpreendedores/logo-barbeiro-joao.jpg';
import logoConfeiteira from '../assets/images/LogoEmpreendedores/logo-confeiteira-ana.jpg';
import logoPanificadora from '../assets/images/LogoEmpreendedores/logo-ribeiro-panificadora.png';
import logoCalcados from '../assets/images/LogoEmpreendedores/logo-agostinho-loja-calçados.png';
import logoSemiJoias from '../assets/images/LogoEmpreendedores/logo-carla-loja-semijoias.png';
import logoLancho from '../assets/images/LogoEmpreendedores/logo-lancho-lanchonete.png';
import logoDesingSombrancelhas from '../assets/images/LogoEmpreendedores/logo-michele-designer-sobrancelhas.png';
import NextArrow from './SliderArrows/NextArrow';
import PrevArrow from './SliderArrows/PrevArrow';


const logos = [
    { src: logoManicure, alt: "Logotipo Manicure Maria" },
    { src: logoBarbeiro, alt: "Logotipo barbeiro João" },
    { src: logoConfeiteira, alt: "Logotipo confeiteira Ana" },
    { src: logoPanificadora, alt: "Logotipo Panificadora Ribeiro" },
    { src: logoCalcados, alt: "Logotipo Agostinho Calçados" },
    { src: logoSemiJoias, alt: "Logotipo Carla Silva SemiJoias" },
    { src: logoLancho, alt: "Logotipo Lanchô lanchonete" },
    { src: logoDesingSombrancelhas, alt: "Logotipo Michele Designer de Sobrancelhas"},
];


const EmpreendedoresDestaque = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
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
                <h2 className="text-3xl font-bold text-center text-laranja-vibrante">
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
                                alt={logo.alt} hover:opacity-100
                                className="h-24 w-auto hover:grayscale-0  transition-all duration-300"
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