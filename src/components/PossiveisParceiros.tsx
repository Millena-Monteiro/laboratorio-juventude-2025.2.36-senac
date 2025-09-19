const PossiveisParceiros = () => {
    return (
     <section className="bg-gray-100 py-16 px-4 md:px-8">
       <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold mb-6 text-azul-profundo">
            Conheça Nossos Parceiros!
          </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Em nosso compromisso com o crescimento do empreendedorismo local, firmamos parcerias com diversas instituições que oferecem apoio essencial em capacitação, gestão e formalização.
           </p>
           <p className="text-lg text-gray-700 leading-relaxed">
            Para explorar todos os serviços e recursos disponíveis, visite a nossa página 'Sou Empreendedor' e descubra como essas parcerias podem transformar o seu negócio.
           </p>
           <a href="/sou-empreendedor" className="mt-8 inline-block px-8 py-3 text-lg font-bold text-white rounded-full transition-all duration-300 transform hover:scale-105 bg-laranja-vibrante">
            Ver os Parceiros
           </a>
     </div>
</section>
    );
};

export default PossiveisParceiros;