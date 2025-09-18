import guiaMeiImage from '../assets/images/BlogImages/campanhaMEI-sebrae.jpg';
import feiraMulherImage from '../assets/images/BlogImages/grota-da-mulher-empreendedora.jpeg';
import semanaMeiImage from '../assets/images/BlogImages/Semana-do-MEI-Feira-de-Exposicoes-Benedito-Bentes-SEMEC-Foto-Luis-Otavio-Mendonca-64.jpg';

export const blogPosts = [
    {
        id: 1,
        title: "Tudo que você precisa saber sobre MEI",
        summary: "Guia completo do Sebrae para quem quer se tornar um Microempreendedor Individual. Conheça as vantagens, obrigações e como se formalizar.",
        image: guiaMeiImage,
        link: "https://sebrae.com.br/sites/PortalSebrae/MEI"
    },
    {
        id: 2,
        title: "Feira Negócio da Grota da Mulher Empreendedora",
        summary: "A feira da Prefeitura de Maceió celebra e impulsiona o empreendedorismo feminino nas comunidades da cidade.",
        image: feiraMulherImage,
        link: "https://maceio.al.gov.br/noticias/iplan/feira-negocio-da-grota-da-mulher-empreendedora-abre-inscricoes-gratuitas"
    },
    {
        id: 3,
        title: "Semana do MEI leva capacitações gratuitas",
        summary: "Evento anual da Prefeitura de Maceió oferece uma semana de oficinas, palestras e consultorias para microempreendedores individuais.",
        image: semanaMeiImage,
        link: "https://maceio.al.gov.br/noticias/sefaz/semana-do-mei-leva-capacitacoes-gratuitas-e-exposicao-de-produtos-no-benedito-bentes"
    }
];