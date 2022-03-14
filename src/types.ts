import { DonateUrls } from "./constants";

export interface SWUElement {
  /**
   * The HTML element containing the element.
   */
  containerElement?: HTMLElement;
  /**
   * The HTML div element.
   */
  element: HTMLDivElement;
  /**
   * Text to display for the donate button/link
   */
  helpText?: string | boolean;
  /**
   * The text to display in the banner and call to action or alt text (for badge)
   */
  text?: string;
  /**
   * The type of element (e.g. "badge" | "banner" | "callToAction")
   */
  type: SWUElementType;
  /**
   * Update the SWU element with new options
   */
  update: (options: SWUOptions) => void;
}

export type SWUElementType = "banner" | "callToAction" | "ribbon";

export type SWUOptions = Omit<SWUElement, "element" | "type" | "update">;
