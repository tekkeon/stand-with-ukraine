import {
  createSWUBanner,
  createSWURibbon,
  SWUColors,
} from "stand-with-ukraine";
import "./styles.css";
import "stand-with-ukraine/dist/styles.css";

const banner = createSWUBanner({
  bannerColor: SWUColors.BLUE,
});

createSWURibbon({
  position: "bottom-left",
});
