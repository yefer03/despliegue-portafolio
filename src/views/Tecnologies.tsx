

import { motion } from "framer-motion";
import Reveal from "../components/Reveal";
import { fadeIn } from "../utils/variants";
import { transition } from "../utils/transition";
import { tecnologies } from "../data-tecnologies";

const Tecnologies = () => {
  return (
    <div
      id="tecnologies"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center relative p-4"
    >
      <div className="md:w-1/2 md:mr-8 text-center md:text-left">
        <Reveal>
          <h2 className="text-4xl sm:text-5xl lg:text-[64px] font-bold text-textPrimary mb-6">
            <span className="text-secondary">Technologies</span> I Work With
          </h2>
        </Reveal>
        <p className="text-lg font-bold">
          As a passionate developer, I love exploring various technologies and
          frameworks to build robust and efficient applications. My expertise
          includes working with modern front-end frameworks such as React JS,
          creating scalable back-end solutions with Node.js, and using
          databases like MongoDB and SQL Server. I also have experience with
          other technologies like JavaScript, HTML, CSS, Python, and more.
        </p>
      </div>

      <motion.div
        variants={fadeIn("up")}
        transition={transition()}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="flex flex-wrap justify-center md:w-1/2"
      >
        {tecnologies.map((tech) => (
          <div key={tech.id} className="flex flex-col items-center m-4 hover:bg-orange-300">
            <img
              src={tech.img}
              alt={tech.name}
              className="h-20 w-20 mb-2 rounded-full"
            />
            <p className="text-sm font-bold">{tech.name}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Tecnologies;
