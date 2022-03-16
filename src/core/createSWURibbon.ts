import { WEBSITE_URL } from "../constants";
import {
  mergeOptionsWithDefaults,
  SWURibbonElement,
  SWURibbonOptions,
} from "./ribbonOptions";

let _options: SWURibbonOptions;
let _swuRibbonElement: SWURibbonElement;

export const createSWURibbon = (
  options?: SWURibbonOptions
): SWURibbonElement => {
  if (_swuRibbonElement) {
    return _swuRibbonElement;
  }

  _options = mergeOptionsWithDefaults(options);

  const ribbonElement = document.createElement("div");

  ribbonElement.onclick = () => window.open(WEBSITE_URL, "_blank");

  _swuRibbonElement = {
    element: ribbonElement,
    type: "ribbon",
    update: updateSWURibbon,
  };

  updateSWURibbon(_options);

  if (_options.containerElement) {
    _options.containerElement.append(ribbonElement);
    _swuRibbonElement.containerElement = _options.containerElement;
  } else {
    document.body.prepend(ribbonElement);
  }

  return _swuRibbonElement;
};

const updateSWURibbon = (options: SWURibbonOptions) => {
  const { element } = _swuRibbonElement;

  _options = {
    ..._options,
    ...options,
  };

  element.title = `${_options.text} ${_options.helpLinkText}`;
  element.className = "";
  element.classList.add("swu-ribbon", `swu-ribbon-${_options.ribbonPosition}`);
};
