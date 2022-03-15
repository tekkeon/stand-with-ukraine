import {
  createSWUBanner,
  createSWURibbon,
  SWUColors,
} from "stand-with-ukraine";
import "./styles.css";
import "stand-with-ukraine/dist/styles.css";

const banner = createSWUBanner({
  bannerColor: SWUColors.BLUE,
  containerElement: document.getElementById("header")!,
  darkTheme: true,
});

const ribbon = createSWURibbon({
  position: "bottom-left",
});

setTimeout(() => {
  banner.update({ bannerColor: SWUColors.PINK });
  ribbon.update({ position: "bottom-right" });
}, 2000);
