interface Props {
  currentValue: string;
}

export default function CalculatorHead({ currentValue }: Props) {
  return (
    <header className="w-72 h-36 flex justify-end items-end pb-4 pr-5">
      <span className="text-white text-7xl font-light">{currentValue}</span>
    </header>
  );
}
