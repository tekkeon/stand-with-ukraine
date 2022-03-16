import React from "react";
import { WEBSITE_URL } from "../constants";
import {
  mergeOptionsWithDefaults,
  SWURibbonOptions,
} from "../core/ribbonOptions";

export const SWURibbon = (options: SWURibbonOptions) => {
  const mergedOptions = mergeOptionsWithDefaults(options);

  const handleClick = () => window.open(WEBSITE_URL, "_blank");

  return (
    <div
      className={`swu-ribbon swu-ribbon-${mergedOptions.ribbonPosition}`}
      onClick={handleClick}
    ></div>
  );
};
