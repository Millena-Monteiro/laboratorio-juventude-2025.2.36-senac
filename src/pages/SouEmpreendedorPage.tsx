import heroImage from '../assets/images/PageSouEmpreendedor/geminiIA-image-empreendedora.png';
import DicasEmpreendedor from '../components/SouEmpreendedor/DicasEmpreendedor';
import CursosGratuitos from '../components/SouEmpreendedor/CursosGratuitos';
import ChamadaCadastro from '../components/SouEmpreendedor/ChamadaCadastro';

const SouEmpreendedor = () => {
  return (
    <>
    <section
      className="relative h-[60vh] md:h-[80vh] bg-cover bg-center flex items-center justify-center text-center p-8"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-azul-profundo opacity-70"></div>
      <div className="relative text-white z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Sua Jornada Empreendedora Começa Aqui
        </h1>
        <p className="text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
          Encontre os recursos, o apoio e as ferramentas para transformar sua paixão em um negócio de sucesso e se conectar com uma comunidade que entende você.
        </p>
        <button className="bg-laranja-vibrante text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-laranja-escura transition-colors duration-300">
          Cadastre seu Negócio
        </button>
      </div>
    </section>

    <section>
    <DicasEmpreendedor/>
    </section>

    <section>
    <CursosGratuitos/>
    </section>

    <section> 
    <ChamadaCadastro/>
    </section>
    </>
  );
};

export default SouEmpreendedor;