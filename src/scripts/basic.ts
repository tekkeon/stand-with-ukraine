import { createSWUBanner, createSWURibbon } from "../core";
import { getScriptOptions } from "./options";
import "../public/styles.css";

const options = getScriptOptions();
console.log(options);

switch (options.type) {
  case "ribbon":
    console.log("Creating ribbon...");
    createSWURibbon(options);
    break;

  case "banner":
    console.log("Creating banner...");
    createSWUBanner(options);
    break;
}
