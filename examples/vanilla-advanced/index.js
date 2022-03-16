const { SWU } = window;

const banner = SWU.createBanner({
  bannerColor: SWU.Colors.BLUE,
  containerElement: document.getElementById("header"),
});

const ribbon = SWU.createRibbon();

setTimeout(() => {
  banner.update({ bannerColor: SWU.Colors.PINK });
  ribbon.update({ ribbonPosition: "bottom-right" });
}, 2000);
