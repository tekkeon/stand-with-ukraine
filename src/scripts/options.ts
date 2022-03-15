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

  console.log({ type, text, helpLinkText });

  if (!type || !["banner", "ribbon"].includes(type)) {
    throw new Error(
      "'type' attribute must be specified as 'banner' or 'ribbon'"
    );
  }

  console.log("after type check");

  let options: SWUOptions = {};

  if (text) {
    options.text = text;
  }

  if (helpLinkText) {
    options.helpLinkText = helpLinkText === "false" ? false : helpLinkText;
  }

  console.log({ options });

  switch (type) {
    case "banner":
      console.log("banner type");
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
      console.log({ options });
      break;

    case "ribbon":
      const ribbonOptions: SWURibbonOptions = { ...options };

      const ribbonPosition = script?.getAttribute("swu-ribbon-position");
      if (ribbonPosition) {
        ribbonOptions.position = ribbonPosition as SWURibbonOptions["position"];
      }

      options = mergeBannerOptionsWithDefaults(ribbonOptions);
      break;
  }

  return {
    type,
    ...options,
  };
};
