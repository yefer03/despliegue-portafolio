import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { transition } from "../utils/transition";
import { fadeIn } from "../utils/variants";
import { Cover } from "../components/cover";
import { Link } from "react-scroll";

const Hero = () => {
  const downloadCV = () => {
    const cvUrl = process.env.PUBLIC_URL + "/HV_page.pdf";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.target = "_blank";
    link.download = "CV_PAGE.pdf";
    link.click();
  };

  return (
    <>
      <Cover />

      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        {/* Decorative blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-screen-xl w-full px-6 sm:px-12 py-20 relative z-10">
          <motion.div
            variants={fadeIn("down")}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="space-y-6"
          >
            {/* Terminal-style tag */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/5">
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              <span className="text-cyan-400 font-mono text-sm">
                ~/yeferson-serna
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-slate-300">Hola, soy</span>
              <br />
              <span className="gradient-text">Yeferson Serna</span>
            </h1>

            <div className="text-xl sm:text-2xl md:text-3xl font-mono text-slate-400">
              <span className="text-cyan-400">{">"}</span>{" "}
              <Typewriter
                words={[
                  "Backend Developer",
                  ".NET Specialist",
                  "Software Engineer",
                  "API Architect",
                  "Python Automator",
                ]}
                cursor
                cursorStyle="█"
                typeSpeed={100}
                deleteSpeed={60}
                loop
              />
            </div>

            <p className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed">
              Desarrollador backend con enfoque en{" "}
              <span className="text-cyan-400 font-medium">.NET</span> y más de
              2 años de experiencia construyendo APIs escalables, diseñando
              arquitecturas limpias e integrando sistemas complejos.
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn("up")}
            transition={{ ...transition(), delay: 0.4 }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="mt-10 flex flex-col sm:flex-row items-start gap-4"
          >
            <Link to="contact" smooth>
              <button className="group relative px-8 py-3 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-lg font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 active:scale-95">
                Contáctame
              </button>
            </Link>
          </motion.div>

          {/* Social links */}
          <motion.div
            variants={fadeIn("up")}
            transition={{ ...transition(), delay: 0.6 }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="mt-12 flex items-center gap-4"
          >
            <div className="w-12 h-[1px] bg-slate-700" />
            <a
              href="https://github.com/yefer03"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-cyan-400 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/yeferson-serna-restrepo-659672256/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-cyan-400 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 w-full section-divider" />
      </section>
    </>
  );
};

export default Hero;

