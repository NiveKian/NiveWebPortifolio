import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <div className="flex justify-center py-6">
            <img className="h-34 w-34 rounded-full" src="http://localhost:5173/NiveWebPortifolio/public/logotipo.svg"/>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-500 to-white bg-clip-text text-transparent leading-right">
            Olá, me chamo Ian Antunes
          </h1>

          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
            Dank developer da Bahia, Brasil, com experiência em programação
            backend, e interesse em ciência de dados e treinamento de modelos de
            inteligência artificial com Python.
          </p>

          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-red-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              Veja Projetos
            </a>

            <a
              href="#contact"
              className="border border-red-500/50 text-red-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 
            hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-red-500/10"
            >
              Entre em contato
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
