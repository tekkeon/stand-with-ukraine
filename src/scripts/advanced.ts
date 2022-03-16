import { createSWUBanner, createSWURibbon, SWUColors } from "../core";

(globalThis as any).SWU = {
  createRibbon: createSWURibbon,
  createBanner: createSWUBanner,
  Colors: SWUColors,
};
