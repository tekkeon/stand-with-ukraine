import React, { useEffect, useState } from "react";
import { SWUBannerOptions, SWUColors } from "../../../dist";
import { SWUBanner } from "stand-with-ukraine/react";

export default function App() {
  const [bannerOptions, setBannerOptions] = useState<SWUBannerOptions>();

  useEffect(() => {
    setTimeout(() => {
      setBannerOptions({
        bannerColor: SWUColors.GREEN,
      });
    }, 2000);
  }, []);

  return (
    <div>
      <SWUBanner {...bannerOptions} />
      Test
    </div>
  );
}
