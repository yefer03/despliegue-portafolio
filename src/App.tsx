import { About, Hero, Projects, Tecnologies, Contact } from "./views";
import { Menu } from "./components";

const App = () => {
  return (
    <div className="bg-dark-900 text-slate-300">
      <Hero />
      <About />
      <Tecnologies />
      <Projects />
      <Contact />
      <Menu />
    </div>
  );
};

export default App;