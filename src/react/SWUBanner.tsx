import React from "react";
import { DARK_THEME_COLOR, WEBSITE_URL } from "../constants";
import {
  mergeOptionsWithDefaults,
  SWUBannerOptions,
} from "../core/bannerOptions";

export const SWUBanner = (options: SWUBannerOptions) => {
  const mergedOptions = mergeOptionsWithDefaults(options);

  const { bannerColor, darkTheme } = mergedOptions;

  const helpTextStyle: React.CSSProperties = {};

  if (darkTheme) {
    helpTextStyle.color = bannerColor;
    helpTextStyle.textDecoration = "none";
  }

  return (
    <div
      className="swu-banner"
      style={{ backgroundColor: darkTheme ? DARK_THEME_COLOR : bannerColor }}
    >
      <span className="swu-banner-text">{mergedOptions.text} </span>
      <a
        className="swu-banner-help"
        target="_blank"
        href={WEBSITE_URL}
        style={helpTextStyle}
      >
        {mergedOptions.helpLinkText}
      </a>
    </div>
  );
};
