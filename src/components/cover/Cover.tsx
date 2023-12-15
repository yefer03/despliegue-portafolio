import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Main } from 'tsparticles-engine';
import { optionsParticles } from "./particleOptions";

export function Cover() {
  const particlesInit = useCallback(async (main: Main) => {
    await loadFull(main);
  }, []);

  const particlesLoaded = useCallback(async () => { }, []);

  return (
    <div id="cover" className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none">
      <Particles
        className="absolute w-full h-full translate-z-0"
        id="tsparticles" init={particlesInit} loaded={particlesLoaded}
        options={optionsParticles}
      />
    </div>
  );
}
