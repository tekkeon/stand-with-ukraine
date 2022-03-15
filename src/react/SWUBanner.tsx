import React from "react";
import { WEBSITE_URL } from "../constants";
import { mergeOptionsWithDefaults, SWUBannerOptions } from "../core/banner";

export const SWUBanner = (options: SWUBannerOptions) => {
  const mergedOptions = mergeOptionsWithDefaults(options);

  return (
    <div
      className="swu-banner"
      style={{ backgroundColor: mergedOptions.bannerColor }}
    >
      <span className="swu-banner-text">{mergedOptions.text} </span>
      <a className="swu-banner-help" target="_blank" href={WEBSITE_URL}>
        {mergedOptions.helpLinkText}
      </a>
    </div>
  );
};
