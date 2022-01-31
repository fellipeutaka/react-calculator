import { useEffect, useRef, useState } from "react";

interface Props {
  currentValue: string;
}

export default function CalculatorHead({ currentValue }: Props) {
  const [scale, setScale] = useState(1);
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = spanRef.current;
    const parentNode = node?.parentNode as HTMLElement;
    const availableWidth = parentNode.offsetWidth;
    const actualWidth = node!.offsetWidth;
    const actualScale = availableWidth / actualWidth;
    if (scale !== actualScale) {
      if (actualScale < 1) {
        setScale(actualScale);
      } else if (scale < 1) {
        setScale(1);
      }
    }
  }, [currentValue]);
  return (
    <header className="w-72 h-36 flex justify-end items-end pb-4 pr-5 relative">
      <span
        className="text-white text-7xl font-light absolute right-0 origin-right"
        ref={spanRef}
        style={{ transform: `scale(${scale},${scale})` }}
        tabIndex={0}
      >
        {currentValue}
      </span>
    </header>
  );
}
