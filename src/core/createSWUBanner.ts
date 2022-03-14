import { SWUElement } from "../types";

export interface SWUBannerOptions
  extends Omit<SWUElement, "element" | "type"> {}

export interface SWUBannerElement extends SWUElement {
  type: "banner";
}

export const createSWUBanner = (
  options: SWUBannerOptions
): SWUBannerElement => {
  const mergedOptions = mergeOptionsWithDefaults(options);

  const bannerElement = document.createElement("div");

  bannerElement.innerHTML = `
    <span class="swu-banner">${mergedOptions.text}</span>
  `;

  document.body.prepend(bannerElement);

  return {
    element: bannerElement,
    type: "banner",
  };
};

const DEFAULT_BANNER_OPTIONS: SWUBannerOptions = {
  text: "We stand with Ukraine.",
  donateText: "Donate Now",
  donateUrl: "",
};

const mergeOptionsWithDefaults = (
  options: SWUBannerOptions
): SWUBannerOptions => ({
  ...DEFAULT_BANNER_OPTIONS,
  ...options,
});
