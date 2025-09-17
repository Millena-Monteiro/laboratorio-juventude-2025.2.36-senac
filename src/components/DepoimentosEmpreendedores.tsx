import React from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../index.css";
import mariaPhoto from '../assets/images/LogoEmpreendedores/logo-manicure-maria.jpg';
import joaoPhoto from '../assets/images/LogoEmpreendedores/logo-barbeiro-joao.jpg';
import anaPhoto from '../assets/images/LogoEmpreendedores/logo-confeiteira-ana.jpg';


interface ArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    isNext?: boolean;
}

const CustomArrow = (props: ArrowProps) => {
  const { className, style, onClick, isNext } = props;
  return (
    <div
      className={`${className} custom-slick-arrow ${isNext ? 'slick-next' : 'slick-prev'}`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    ></div>
  );
};

const DepoimentosEmpreendedores = () => {
    const testimonials = [
        {
      id: 1,
          text: "Esta iniciativa me deu as ferramentas e o apoio de que precisava para expandir meu negócio de manicure. Hoje, sinto que faço parte de algo maior e que meu trabalho realmente importa.",
          author: "Maria da Silva",
          role: "Empreendedora (Manicure)",
          photo: mariaPhoto,
        },
        {
          id: 2,
          text: "Através do apoio do projeto, conseguimos formalizar nossa barbearia e atrair mais clientes. É mais do que um negócio; é um ponto de encontro para a nossa comunidade.",
          author: "João Ferreira",
          role: "Empreendedor (Barbeiro)",
          photo: joaoPhoto,
        },
        {
          id: 3,
          text: "O projeto nos mostrou que o nosso pequeno negócio de família é essencial. Com o apoio, nossa loja de bolos cresceu e hoje emprega outras pessoas do bairro.",
          author: "Ana Paula",
          role: "Empreendedora (Confeitaria)",
          photo: anaPhoto,
    },
];

const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        NextArrow: <div className="slick-next"><CustomArrow isNext={true} /></div>,
        PrevArrow: <div className="slick-prev"><CustomArrow isNext={false} /></div>,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: true
                }
            }
        ]
    };

    return (
        <div className="relative py-12 px-4 md:px-8 bg-azul-cobalto text-white carrossel-depoimentos">
          <h2 className="text-3xl font-bold mb-10 text-center">O que eles dizem sobre o nosso trabalho</h2>
            <Slider {...settings}>
                {testimonials.map((review) => (
                    <div key={review.id} className="p-4 md:p-6">
                        <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg text-gray-800 max-w-3xl mx-auto">
                            <p className="text-lg italic font-light leading-relaxed mb-8 text-center md:text-left">
                                "{review.text}"
                            </p>

                            {/* Seção para a foto, nome e cargo */}
                            <div className="flex items-center justify-center md:justify-end mt-auto space-x-4">
                                <img
                                    src={review.photo}
                                    alt={`Foto de ${review.author}`}
                                    className="w-16 h-16 rounded-full object-cover border-2 border-[#99d31d] flex-shrink-0"
                                />
                                <div className="text-left">
                                    <h4 className="font-semibold text-xl text-gray-900">{review.author}</h4>
                                    <p className="text-md text-gray-700">{review.role}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                </Slider>
                <p className="text-center text-sm text-gray-400 mb-10">
            *Os Depoimentos acima são fictícias e utilizadas apenas para fins de demonstração.
        </p>
                </div>
    );
};

export default DepoimentosEmpreendedores;