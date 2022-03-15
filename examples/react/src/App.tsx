import React, { useEffect, useState } from "react";
import { SWUBannerOptions, SWUColors, SWURibbonOptions } from "../../../dist";
import { SWUBanner, SWURibbon } from "stand-with-ukraine/react";

export default function App() {
  const [bannerOptions, setBannerOptions] = useState<SWUBannerOptions>({
    darkTheme: true,
  });
  const [ribbonOptions, setRibbonOptions] = useState<SWURibbonOptions>();

  useEffect(() => {
    setTimeout(() => {
      setBannerOptions({
        bannerColor: SWUColors.GREEN,
        darkTheme: true,
      });
      setRibbonOptions({
        position: "bottom-right",
      });
    }, 2000);
  }, []);

  return (
    <div>
      <header
        style={{
          position: "fixed",
          top: 0,
          width: "100vw",
          backgroundColor: "turquoise",
        }}
      >
        <SWUBanner {...bannerOptions} />
        <h1 style={{ fontSize: "1.5em", color: "white" }}>This is a header</h1>
      </header>
      {[...Array(6)].map((e, i) => (
        <div style={{ width: "100%", height: "300px" }} key={i}>
          <p>This is a paragraph.</p>
        </div>
      ))}
      <SWURibbon {...ribbonOptions} />
    </div>
  );
}
