import React, { useLayoutEffect, useState } from "react";

const useWindowSize = () => {
  if (typeof document === "undefined") {
    React.useLayoutEffect = React.useEffect;
  }

  const [size, setSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    const updateSize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", updateSize);
    updateSize();

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return size;
};

export default useWindowSize;
