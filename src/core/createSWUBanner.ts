import { WEBSITE_URL } from "../constants";
import {
  mergeOptionsWithDefaults,
  SWUBannerElement,
  SWUBannerOptions,
} from "./bannerOptions";

let _options: SWUBannerOptions;
let _swuBannerElement: SWUBannerElement;

export const createSWUBanner = (
  options?: SWUBannerOptions
): SWUBannerElement => {
  if (_swuBannerElement) {
    return _swuBannerElement;
  }

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
  element.style.backgroundColor = _options.darkTheme
    ? "#222425"
    : _options.bannerColor!;

  const bannerTextElement = document.createElement("span");
  bannerTextElement.className = "swu-banner-text";
  bannerTextElement.textContent = `${_options.text!} `;

  element.append(bannerTextElement);

  if (_options.helpLinkText === false) {
    return;
  }

  const bannerHelpLink = document.createElement("a");
  bannerHelpLink.className = "swu-banner-help";
  bannerHelpLink.textContent = _options.helpLinkText as string;
  bannerHelpLink.href = WEBSITE_URL;
  bannerHelpLink.target = "_blank";

  if (_options.darkTheme) {
    bannerHelpLink.style.color = _options.bannerColor!;
    bannerHelpLink.style.textDecoration = "none";
  }

  element.append(bannerHelpLink);
};
