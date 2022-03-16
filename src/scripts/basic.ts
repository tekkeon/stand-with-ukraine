import { createSWUBanner, createSWURibbon } from "../core";
import { getScriptOptions } from "./options";
import "../styles.css";

const options = getScriptOptions();

switch (options.type) {
  case "ribbon":
    createSWURibbon(options);
    break;

  case "banner":
    createSWUBanner(options);
    break;
}
