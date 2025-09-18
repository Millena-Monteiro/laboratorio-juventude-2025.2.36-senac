import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logoSenac from '../assets/images/LogoPatrocinadores/senac-logo.png'
import logoSenai from '../assets/images/LogoPatrocinadores/senai-logo.png';
import logoSebrae from '../assets/images/LogoPatrocinadores/sebrae-logo(2).svg'
import logoSefaz from '../assets/images/LogoPatrocinadores/sefaz-logo.png';
import logoSedics from '../assets/images/LogoPatrocinadores/sedics-logo.png';
import logoSemed from '../assets/images/LogoPatrocinadores/semed-logo.png';

interface Logo {
    src: string;
    alt: string;
}

interface LogoCarouselProps {
    logos?: Logo[];
}

const programaSlogos = [
    { src: logoSenac, alt: "Logo Senac" },
    { src: logoSenai, alt: "Logo Senai" },
    { src: logoSebrae, alt: "Logo Sebrae" },
    { src: logoSefaz, alt: "Logo Sefaz" },
    { src: logoSedics, alt: "Logo Sedics" },
    { src: logoSemed, alt: "Logo Semed" },
];

const ProgramaSCarousel: React.FC<LogoCarouselProps> = ({ logos = programaSlogos }) => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0, // deixa a rolagem contínua
        speed: 5000,
        cssEase: "linear",// Faz uma transição suave
        pauseOnHover: false,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 4 } },
            { breakpoint: 768, settings: { slidesToShow: 3 } },
            { breakpoint: 600, settings: { slidesToShow: 2 } },
        ],
    };

    return (
        <div className="py-8">
            <Slider {...settings}>
                {logos.map((logo, index) => (
                    <div key={index} className="p-2">
                        <div className="bg-[#f0f4f8] w-43 h-28 md:w-63 md:h-40 flex items-center justify-center rounded-md shadow-md overflow-hidden">
                        <img 
                            src={logo.src} 
                            alt={logo.alt} 
                            className=" object-contain hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                        />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ProgramaSCarousel;