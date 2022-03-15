import { createSWUBanner, createSWURibbon } from "../core";

(globalThis as any).SWU = {
  createRibbon: createSWURibbon,
  createBanner: createSWUBanner,
};
