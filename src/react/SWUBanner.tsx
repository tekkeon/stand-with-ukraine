import { useEffect, useState } from "react";
import { createSWUBanner, SWUBannerElement, SWUBannerOptions } from "../core";

export const SWUBanner = (options: SWUBannerOptions) => {
  const [banner, setBanner] = useState<SWUBannerElement>();

  useEffect(() => {
    if (!banner) {
      setBanner(createSWUBanner(options));
    } else {
      banner.update(options);
    }
  }, [options]);

  return null;
};
