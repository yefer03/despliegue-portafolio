import { motion } from "framer-motion";
import { Reveal } from "../components";
import { fadeIn } from "../utils/variants";
import { transition } from "../utils/transition";

const About = () => {
  const highlights = [
    { value: "2+", label: "Años de experiencia" },
    { value: ".NET", label: "Stack principal" },
    { value: "APIs", label: "Enfoque profesional" },
    { value: "IA", label: "Integraciones MCPs" },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center relative py-20"
    >
      <div className="max-w-screen-xl w-full px-6 sm:px-12">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Sobre <span className="gradient-text">mí</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full mb-12" />
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Main text */}
          <motion.div
            variants={fadeIn("up")}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="lg:col-span-3 space-y-6"
          >
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Soy desarrollador backend con enfoque en{" "}
              <span className="text-cyan-400 font-semibold">.NET</span>, con más
              de 2 años de experiencia trabajando tanto en proyectos modernos
              como en mantenimiento de aplicaciones legacy sobre .NET Framework
              4.5. Desarrollo y mantengo APIs, diseñando la lógica de negocio
              bajo principios de{" "}
              <span className="text-cyan-400 font-semibold">
                Clean Architecture
              </span>{" "}
              y{" "}
              <span className="text-cyan-400 font-semibold">
                arquitectura hexagonal
              </span>
              .
            </p>

            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              Trabajo activamente con bases de datos relacionales: diseño modelos
              de datos, optimizo consultas y desarrollo stored procedures que
              integro directamente con el backend. Me integro con múltiples
              sistemas externos mediante APIs REST y SOAP, y participo en la
              definición de la arquitectura de las aplicaciones.
            </p>

            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              Implemento integraciones con IA mediante MCPs para chatbots y
              automatizaciones inteligentes. Complemento mi trabajo con
              automatización de procesos usando Python, creando scripts que
              interactúan con APIs, tareas del sistema operativo y automatización
              de navegador.
            </p>

            <div className="pt-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20">
                <span className="text-violet-400 text-sm font-medium">
                  🎓 Tecnólogo en Desarrollo de Software — Finalizando
                  Ingeniería de Software
                </span>
              </div>
            </div>
          </motion.div>

          {/* Stats cards */}
          <motion.div
            variants={fadeIn("up")}
            transition={{ ...transition(), delay: 0.3 }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="lg:col-span-2 grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <div
                key={index}
                className="gradient-border p-6 flex flex-col items-center justify-center text-center group hover:scale-105 transition-transform duration-300"
              >
                <span className="text-2xl sm:text-3xl font-bold gradient-text">
                  {item.value}
                </span>
                <span className="text-slate-400 text-xs sm:text-sm mt-2">
                  {item.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full section-divider" />
    </section>
  );
};

export default About;
