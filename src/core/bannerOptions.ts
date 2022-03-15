import { SWUColors } from "../constants";
import { SWUElement, SWUOptions } from "../types";

export interface SWUBannerOptions extends SWUOptions {
  /**
   * The color to use for the banner. Will either be the background color or the
   * help link color depending on darkTheme.
   */
  bannerColor?: keyof typeof SWUColors | string;
  /**
   * Whether to use a dark theme. Default is false.
   */
  darkTheme?: boolean;
}

export interface SWUBannerElement extends SWUElement {
  bannerColor?: keyof typeof SWUColors | string;
  type: "banner";
  update: (options: SWUBannerOptions) => void;
}

const DEFAULT_BANNER_OPTIONS: SWUBannerOptions = {
  bannerColor: "BLUE",
  text: "We #StandWithUkraine",
  helpLinkText: "Help Provide Aid to Ukraine",
};

export const mergeOptionsWithDefaults = (
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

  return mergedOptions;
};
