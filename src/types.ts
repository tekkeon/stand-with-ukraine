export interface SWUElement {
  /**
   * Text to display for the donate button/link
   */
  readonly donateText?: string;
  /**
   * As a boolean, whether or not to display default donate button URL.
   * As text, the URL for the donate button.
   */
  readonly donateUrl?: string | boolean;
  /**
   * The HTML div element.
   */
  readonly element: HTMLDivElement;
  /**
   * The text to display in the banner and call to action or alt text (for badge)
   */
  readonly text?: string;
  /**
   * The type of element (e.g. "badge" | "banner" | "callToAction")
   */
  readonly type: SWUElementType;
}

export type SWUElementType = "badge" | "banner" | "callToAction";
