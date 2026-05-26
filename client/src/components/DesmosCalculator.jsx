import { useEffect, useRef } from "react";
import Desmos from "desmos";

export const DesmosCalculator = () => {
  const el = useRef(null);

  useEffect(() => {
    const calculator = Desmos.GraphingCalculator(el.current, {
      expressions: true,
      keypad: true,
    });

    return () => calculator.destroy();
  }, []);

  return <div ref={el} style={{ width: "100%", height: "500px" }} />;
};
