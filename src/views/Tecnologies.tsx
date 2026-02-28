import { motion } from "framer-motion";
import { Reveal } from "../components";
import { fadeIn } from "../utils/variants";
import { transition } from "../utils/transition";
import { skillCategories } from "../data-tecnologies";

const Tecnologies = () => {
  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center relative py-20"
    >
      <div className="max-w-screen-xl w-full px-6 sm:px-12">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full mb-4" />
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mb-12">
            Tecnologías y herramientas que utilizo para construir soluciones
            robustas y escalables.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up")}
              transition={{ ...transition(), delay: index * 0.1 }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              className="glass rounded-2xl p-6 hover:border-cyan-500/20 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-lg font-semibold text-slate-200 group-hover:text-cyan-400 transition-colors">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg bg-dark-700 text-slate-300 border border-dark-500 hover:border-cyan-500/30 hover:text-cyan-400 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full section-divider" />
    </section>
  );
};

export default Tecnologies;
