import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const MLSkills = ["Tensorflow", "Keras", "Numpy", "Jupyter"];
  const frontSkills = ["React", "typescript", "TailwindCSS"];
  const backSkills = [
    "Node.JS",
    "Python",
    "Docker",
    "AWS",
    "PostgresSQL",
    "GraphQL",
  ]; // Flask,Django
  const generalSkills = ["Git/Github", "Inglês Fluente"];

  return (
    <section
      id="about"
      className="min-h-screen felx items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-t from-red-500 to-white bg-clip-text text-transparent text-center">
            Sobre mim
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 text-center mb-6">
              Me chamo Ian S. Antunes, sou bacharel em Ciências da Computação
              pela Universidade Estadual da Bahia (UESB). Possuo experiência na
              área de desenvolvimento Backend, principalmente em TypeScript, e
              também na criação de modelos de classificação usando TensorFlow.
              Atualmente, estou buscando trabalho na área como também uma
              especialização.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* frontend list */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm
                     hover:bg-red-500/20 hover:shadow-[0_2px_8px_rgba(240,15,15,0.1)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* backend list */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm
                     hover:bg-red-500/20 hover:shadow-[0_2px_8px_rgba(240,15,15,0.1)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* general list */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Geral</h3>
                <div className="flex flex-wrap gap-2">
                  {generalSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm
                     hover:bg-red-500/20 hover:shadow-[0_2px_8px_rgba(240,15,15,0.1)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mt-8">
              <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">🎓Educação </h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>
                    <strong> Bacharel em Ciência da Computação </strong> - UESB
                    Universidade Estadual do Sudoeste da Bahia (2018 - 2024)
                  </li>
                  <li>
                    Diciplinas Relevantes: Estruturas de dados, Desenvolvimento
                    Web, Grafos...
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">💼Experiências</h3>
                <div className="space-y-4 text-gray-300">
                  <div>
                    <h4 className="font-semibold">Em construção...</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
