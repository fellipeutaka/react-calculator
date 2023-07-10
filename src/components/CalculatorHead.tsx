import { useEffect, useRef, useState } from "react";

type CalculatorHeadProps = {
  value: string;
};

export function CalculatorHead({ value }: CalculatorHeadProps) {
  const [scale, setScale] = useState(1);
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const parentNode = spanRef.current?.parentNode as HTMLElement;
    const availableWidth = parentNode?.offsetWidth;
    const actualWidth = spanRef.current?.offsetWidth;
    const actualScale = availableWidth / (actualWidth ?? 0);
    if (scale !== actualScale) {
      if (actualScale < 1) {
        setScale(actualScale);
      } else if (scale < 1) {
        setScale(1);
      }
    }
  }, [value]);

  return (
    <header className="w-72 h-36 flex justify-end items-end pb-4 pr-5 relative">
      <strong
        className="text-white text-7xl font-light absolute right-0 origin-right"
        ref={spanRef}
        style={{ transform: `scale(${scale},${scale})` }}
      >
        {value}
      </strong>
    </header>
  );
}
