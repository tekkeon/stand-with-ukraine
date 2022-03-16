import {
  SWUBannerOptions,
  SWUElementType,
  SWUOptions,
  SWURibbonOptions,
} from "..";
import { mergeOptionsWithDefaults as mergeBannerOptionsWithDefaults } from "../core/bannerOptions";

export const getScriptOptions = ():
  | (SWUBannerOptions & { type: "banner" })
  | (SWURibbonOptions & { type: "ribbon" }) => {
  const script = document.currentScript;

  const type = script?.getAttribute("swu-type") as SWUElementType;
  const text = script?.getAttribute("swu-text");
  const helpLinkText = script?.getAttribute("swu-help-link-text");

  if (!type || !["banner", "ribbon"].includes(type)) {
    throw new Error(
      "'type' attribute must be specified as 'banner' or 'ribbon'"
    );
  }

  let options: SWUOptions = {};

  if (text) {
    options.text = text;
  }

  if (helpLinkText) {
    options.helpLinkText = helpLinkText === "false" ? false : helpLinkText;
  }

  switch (type) {
    case "banner":
      const bannerOptions: SWUBannerOptions = { ...options };

      const bannerColor = script?.getAttribute("swu-banner-color");
      if (bannerColor) {
        bannerOptions.bannerColor = bannerOptions as string;
      }

      const darkTheme = script?.getAttribute("swu-dark-theme");
      if (darkTheme === "true") {
        bannerOptions.darkTheme = true;
      }

      options = mergeBannerOptionsWithDefaults(bannerOptions);
      break;

    case "ribbon":
      const ribbonOptions: SWURibbonOptions = { ...options };

      const ribbonPosition = script?.getAttribute("swu-ribbon-position");
      if (ribbonPosition) {
        ribbonOptions.ribbonPosition =
          ribbonPosition as SWURibbonOptions["ribbonPosition"];
      }

      options = mergeBannerOptionsWithDefaults(ribbonOptions);
      break;
  }

  return {
    type,
    ...options,
  };
};
