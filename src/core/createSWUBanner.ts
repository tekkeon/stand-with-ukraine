import { SWUColors, WEBSITE_URL } from "../constants";
import { SWUElement, SWUOptions } from "../types";

export interface SWUBannerOptions extends SWUOptions {
  bannerColor?: keyof typeof SWUColors | string;
}

export interface SWUBannerElement extends SWUElement {
  bannerColor?: keyof typeof SWUColors | string;
  type: "banner";
  update: (options: SWUBannerOptions) => void;
}

let _options: SWUBannerOptions;
let _swuBannerElement: SWUBannerElement;

export const createSWUBanner = (
  options?: SWUBannerOptions
): SWUBannerElement => {
  _options = mergeOptionsWithDefaults(options);

  const bannerElement = document.createElement("div");
  bannerElement.classList.add("swu-banner");

  _swuBannerElement = {
    element: bannerElement,
    type: "banner",
    update: updateSWUBanner,
  };

  updateSWUBanner(_options);

  if (_options.containerElement) {
    _options.containerElement.prepend(bannerElement);
    _swuBannerElement.containerElement = _options.containerElement;
  } else {
    document.body.prepend(bannerElement);
  }

  return _swuBannerElement;
};

const updateSWUBanner = (options: SWUBannerOptions) => {
  _options = {
    ..._options,
    ...options,
  };

  const { element } = _swuBannerElement;

  element.innerHTML = "";
  element.style.backgroundColor = _options.bannerColor!;

  const bannerTextElement = document.createElement("span");
  bannerTextElement.className = "swu-banner-text";
  bannerTextElement.textContent = `${_options.text!} `;

  const bannerHelpLink = document.createElement("a");
  bannerHelpLink.className = "swu-banner-help";
  bannerHelpLink.textContent = _options.helpText as string;
  bannerHelpLink.href = WEBSITE_URL;
  bannerHelpLink.target = "_blank";

  element.append(bannerTextElement, bannerHelpLink);
};

const DEFAULT_BANNER_OPTIONS: SWUBannerOptions = {
  bannerColor: "PURPLE",
  text: "We #StandWithUkraine.",
  helpText: "Learn more.",
};

const mergeOptionsWithDefaults = (
  options: SWUBannerOptions = {}
): SWUBannerOptions => {
  const mergedOptions = {
    ...DEFAULT_BANNER_OPTIONS,
    ...options,
  };

  if (SWUColors.hasOwnProperty(mergedOptions.bannerColor!)) {
    const colorKey = mergedOptions.bannerColor as keyof typeof SWUColors;
    mergedOptions.bannerColor = SWUColors[colorKey];
  }

  if (options.helpText === false) {
    mergedOptions.helpText = "";
  }

  return mergedOptions;
};
