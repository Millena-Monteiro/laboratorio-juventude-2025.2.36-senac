import cadastroImage from '../../assets/images/PageSouEmpreendedor/carrinho-virtual-ilustration.jpg';

const ChamadaCadastro = () => {
  return (
    <section className="bg-azul-profundo py-16 px-4 md:px-8 text-center text-white">
        <div className="p-8 md:p-12 rounded-2xl shadow-xl flex flex-col md:flex-row items-center gap-8 text-white">
          
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#99d31d' }}>
              Junte-se à Nossa Vitrine Online
            </h2>
            <p className="text-lg md:text-xl leading-relaxed mb-8">
              Cadastre seu negócio em nossa vitrine online e alcance novos clientes. É gratuito, rápido e sua chance de crescer com a gente.
            </p>
            <button className="bg-laranja-vibrante text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-laranja-escuro transition-colors duration-300">
              Cadastre-se Agora
            </button>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <img
              src={cadastroImage}
              alt="mulher com o telefone na mão"
              className="rounded-lg shadow-lg max-w-full h-auto object-cover"
            />
          </div>

        </div>
    </section>
  );
};

export default ChamadaCadastro;