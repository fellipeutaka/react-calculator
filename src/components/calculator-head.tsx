import { useEffect, useRef, useState } from "react";

interface CalculatorHeadProps {
  value: string;
}

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
    <header className="relative flex h-36 w-72 items-end justify-end pr-5 pb-4">
      <strong
        className="absolute right-0 origin-right font-light text-7xl text-white"
        ref={spanRef}
        style={{ transform: `scale(${scale},${scale})` }}
      >
        {value}
      </strong>
    </header>
  );
}
