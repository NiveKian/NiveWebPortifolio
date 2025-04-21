import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-red-500 from-40% to-white to-60% bg-clip-text text-transparent text-center">
          Projetos em Destaque
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Projeto pokemon */}
          <div className="p-6 rounded-xl border-white/10 hover:-translate-y-1 hover:border-red-500/30 hover:shadow-[0_2px_8px_rgba(240,15,15,0.3)] transition">
            <h3 className="text-xl font-bold mb-2">DaFakPokemon</h3>
            <p className="text-gray-300 mb-4">
              Página html de "Quem é este pokemon?" feito com html,js e css
              padrão para rodar em qualquer navegador
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["Javascript", "Html5", "CSS"].map((tech, key) => (
                <span
                  key={key}
                  className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm
                         hover:bg-red-500/20 hover:shadow-[0_2px_8px_rgba(240,15,15,0.1)] transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <a
                href="https://github.com/NiveKian/DaFakPokemon"
                className="text-red-400 hover:text-red-300 transition-colors my-4"
              >
                Veja Projeto ➤
              </a>
            </div>
          </div>

          {/* Projeto Snake */}
          <div className="p-6 rounded-xl border-white/10 hover:-translate-y-1 hover:border-red-500/30 hover:shadow-[0_2px_8px_rgba(240,15,15,0.3)] transition">
            <h3 className="text-xl font-bold mb-2">Snake Test</h3>
            <p className="text-gray-300 mb-4">
              Projeto feito para disciplina de programação concorrente onde uso
              java e javafx para fazer o famoso "jogo da cobrinha"
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["Java", "Javafx"].map((tech, key) => (
                <span
                  key={key}
                  className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm
                         hover:bg-red-500/20 hover:shadow-[0_2px_8px_rgba(240,15,15,0.1)] transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <a
                href="https://github.com/NiveKian/Snake_Test_Git"
                className="text-red-400 hover:text-red-300 transition-colors my-4"
              >
                Veja Projeto ➤
              </a>
            </div>
          </div>
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
};
