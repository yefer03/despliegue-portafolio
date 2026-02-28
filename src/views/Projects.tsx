import { useState } from "react";
import { Reveal } from "../components";
import { projects } from "../data";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn } from "../utils/variants";
import { transition } from "../utils/transition";

type Category = "all" | "backend" | "frontend";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filteredProjects = () => {
    if (activeCategory === "all") return projects;
    return projects.filter((item) => item.category === activeCategory);
  };

  const categories: { key: Category; label: string }[] = [
    { key: "all", label: "Todos" },
    { key: "backend", label: "Backend" },
    { key: "frontend", label: "Frontend" },
  ];

  return (
    <section id="projects" className="min-h-screen relative py-20">
      <div className="max-w-screen-xl w-full px-6 sm:px-12 mx-auto">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Mis <span className="gradient-text">proyectos</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full mb-4" />
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mb-8">
            Proyectos personales y de aprendizaje disponibles en GitHub.
          </p>
        </Reveal>

        {/* Category filters */}
        <motion.div
          variants={fadeIn("up")}
          transition={transition()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="flex flex-wrap gap-3 mb-10"
        >
          {categories.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeCategory === key
                  ? "bg-gradient-to-r from-cyan-500 to-violet-500 text-white shadow-lg shadow-cyan-500/20"
                  : "bg-dark-700 text-slate-400 border border-dark-500 hover:border-cyan-500/30 hover:text-slate-200"
              }`}
            >
              {label}
            </button>
          ))}
        </motion.div>

        {/* Project grid */}
        <motion.div
          variants={fadeIn("up")}
          transition={transition()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredProjects().map((item) => (
              <motion.a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="glass rounded-2xl p-6 group hover:border-cyan-500/20 transition-all duration-300 cursor-pointer block"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-lg bg-dark-700 text-cyan-400 group-hover:bg-cyan-500/10 transition-colors">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                      />
                    </svg>
                  </div>
                  <svg
                    className="w-5 h-5 text-slate-600 group-hover:text-cyan-400 transition-colors transform group-hover:-translate-y-1 group-hover:translate-x-1 duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 17L17 7M17 7H7M17 7v10"
                    />
                  </svg>
                </div>

                <h3 className="text-lg font-semibold text-slate-200 group-hover:text-cyan-400 transition-colors mb-2">
                  {item.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {item.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 rounded bg-dark-700 text-cyan-400/70 font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full section-divider" />
    </section>
  );
};

export default Projects;
