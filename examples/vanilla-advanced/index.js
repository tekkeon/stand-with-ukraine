const { SWU } = window;

const banner = SWU.createBanner({
  bannerColor: "#00bcd4",
  containerElement: document.getElementById("header"),
});

const ribbon = SWU.createRibbon();

setTimeout(() => {
  banner.update({ bannerColor: "pink" });
  ribbon.update({ position: "bottom-right" });
}, 2000);
