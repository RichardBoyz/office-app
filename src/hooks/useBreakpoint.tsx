import { useEffect, useState } from "react";
import { WindowSize } from "../constants/windows";

type WindowDimensions = {
  width: number;
  height: number;
};

export const useBreakpoint = (): WindowSize | undefined => {
  const [breakpoint, setBreakpoint] = useState<WindowSize | undefined>(
    undefined
  );
  const [windowSize, setWindowSize] = useState<WindowDimensions>({
    width: 0,
    height: 0,
  });

  const handleResize = () => {
    setWindowSize((pre) => {
      return { width: window.innerWidth, height: window.innerHeight };
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    handleResize();

    if (0 < windowSize.width && windowSize.width <= 600) {
      setBreakpoint(WindowSize.ExtraSmall);
    }
    if (600 < windowSize.width && windowSize.width <= 960) {
      setBreakpoint(WindowSize.Small);
    }
    if (960 < windowSize.width && windowSize.width <= 1280) {
      setBreakpoint(WindowSize.Medium);
    }
    if (1280 < windowSize.width && windowSize.width <= 1920) {
      setBreakpoint(WindowSize.Large);
    }
    if (windowSize.width >= 1920) {
      setBreakpoint(WindowSize.ExtraLarge);
    }

    return () => window.removeEventListener("resize", handleResize);
  }, [windowSize.width]);

  return breakpoint;
};
