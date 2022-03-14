import { SWUColors, WEBSITE_URL } from "../constants";
import { SWUElement, SWUOptions } from "../types";

export interface SWURibbonOptions extends SWUOptions {
  position?: "bottom-left" | "bottom-right" | "top-left" | "top-right";
}

export interface SWURibbonElement extends SWUElement {
  bannerColor?: keyof typeof SWUColors;
  type: "ribbon";
}

let _options: SWURibbonOptions;
let _swuBannerElement: SWURibbonElement;

export const createSWURibbon = (
  options?: SWURibbonOptions
): SWURibbonElement => {
  _options = mergeOptionsWithDefaults(options);

  const ribbonElement = document.createElement("div");
  ribbonElement.classList.add("swu-ribbon");
  ribbonElement.classList.add(`swu-ribbon-${_options.position}`);

  ribbonElement.onclick = () => window.open(WEBSITE_URL, "_blank");

  _swuBannerElement = {
    element: ribbonElement,
    type: "ribbon",
    update: updateSWURibbon,
  };

  updateSWURibbon(_options);

  if (_options.containerElement) {
    _options.containerElement.append(ribbonElement);
    _swuBannerElement.containerElement = _options.containerElement;
  } else {
    document.body.prepend(ribbonElement);
  }

  return _swuBannerElement;
};

const updateSWURibbon = (options: SWURibbonOptions) => {
  _options = {
    ..._options,
    ...options,
  };

  _swuBannerElement.element.title = `${_options.text} ${_options.helpText}`;
};

const DEFAULT_BANNER_OPTIONS: SWURibbonOptions = {
  helpText: "Click to learn more.",
  position: "bottom-left",
  text: "We #StandWithUkraine.",
};

const mergeOptionsWithDefaults = (
  options: SWURibbonOptions = {}
): SWURibbonOptions => {
  const mergedOptions = {
    ...DEFAULT_BANNER_OPTIONS,
    ...options,
  };

  if (options.helpText === false) {
    mergedOptions.helpText = "";
  }

  return mergedOptions;
};
