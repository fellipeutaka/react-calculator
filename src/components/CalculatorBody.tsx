import CalculatorButton from "./CalculatorButton";

export default function CalculatorBody() {
  return (
    <div className="grid w-72 grid-cols-4 grid-rows-5 gap-3">
      <CalculatorButton text="AC" />
      <CalculatorButton text="+/-" />
      <CalculatorButton text="%" />
      <CalculatorButton text="÷" />
      <CalculatorButton text="7" />
      <CalculatorButton text="8" />
      <CalculatorButton text="9" />
      <CalculatorButton text="×" />
      <CalculatorButton text="4" />
      <CalculatorButton text="5" />
      <CalculatorButton text="6" />
      <CalculatorButton text="-" />
      <CalculatorButton text="1" />
      <CalculatorButton text="2" />
      <CalculatorButton text="3" />
      <CalculatorButton text="+" />
      <CalculatorButton text="0" />
      <CalculatorButton text="." />
      <CalculatorButton text="=" />
    </div>
  );
}
