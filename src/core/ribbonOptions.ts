import { SWUColors } from "../constants";
import { SWUElement, SWUOptions } from "../types";

export interface SWURibbonOptions extends SWUOptions {
  ribbonPosition?: "bottom-left" | "bottom-right" | "top-left" | "top-right";
}

export interface SWURibbonElement extends SWUElement {
  ribbonPosition?: "bottom-left" | "bottom-right" | "top-left" | "top-right";
  type: "ribbon";
  update: (options: SWURibbonOptions) => void;
}

const DEFAULT_BANNER_OPTIONS: SWURibbonOptions = {
  helpLinkText: "Click to learn more.",
  ribbonPosition: "bottom-left",
  text: "We #StandWithUkraine.",
};

export const mergeOptionsWithDefaults = (
  options: SWURibbonOptions = {}
): SWURibbonOptions => {
  const mergedOptions = {
    ...DEFAULT_BANNER_OPTIONS,
    ...options,
  };

  if (options.helpLinkText === false) {
    mergedOptions.helpLinkText = "";
  }

  return mergedOptions;
};
