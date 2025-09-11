import React from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../index.css";
import mariaPhoto from '../assets/images/logo-manicure-maria.jpg';
import joaoPhoto from '../assets/images/logo-barbeiro-joao.jpg';
import anaPhoto from '../assets/images/logo-confeiteira-ana.jpg';

// Interface para as propriedades das setas (para evitar o erro do TypeScript)
interface ArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const testimonials = [
    {
      text: "Esta iniciativa me deu as ferramentas e o apoio de que precisava para expandir meu negócio de manicure. Hoje, sinto que faço parte de algo maior e que meu trabalho realmente importa.",
      author: "Maria da Silva",
      role: "Empreendedora (Manicure)",
      photo: mariaPhoto,
    },
    {
      text: "Através do apoio do projeto, conseguimos formalizar nossa barbearia e atrair mais clientes. É mais do que um negócio; é um ponto de encontro para a nossa comunidade.",
      author: "João Ferreira",
      role: "Empreendedor (Barbeiro)",
      photo: joaoPhoto,
    },
    {
      text: "O projeto nos mostrou que o nosso pequeno negócio de família é essencial. Com o apoio, nossa loja de bolos cresceu e hoje emprega outras pessoas do bairro.",
      author: "Ana Paula",
      role: "Empreendedora (Confeitaria)",
      photo: anaPhoto,
    },
];

const NextArrow = (props: ArrowProps) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} custom-slick-arrow slick-next`}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        ></div>
    );
};

const PrevArrow = (props: ArrowProps) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} custom-slick-arrow slick-prev`}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        ></div>
    );
};

const DepoimentosEmpreendedores = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true
                }
            }
        ]
    };

    return (
        <div className="relative carrossel-depoimentos">
            <Slider {...settings}>
                {testimonials.map((review, index) => (
                    <div key={index} className="p-4 md:p-6">
                        <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg text-gray-800 flex flex-col items-center text-center">
                            <img
                                src={review.photo}
                                alt={`Foto de ${review.author}`}
                                className="w-24 h-24 rounded-full mb-6 object-cover border-4 border-green-600"
                            />
                            <p className="text-xl italic font-light leading-relaxed mb-6">
                                "{review.text}"
                            </p>
                            <div className="flex flex-col items-center mt-auto">
                                <h4 className="font-semibold text-xl text-gray-900">{review.author}</h4>
                                <p className="text-md text-gray-700">{review.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default DepoimentosEmpreendedores;