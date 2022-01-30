import CalculatorButton from "./CalculatorButton";

export default function CalculatorBody() {
  return (
    <div className="grid w-72 grid-cols-4 grid-rows-5 gap-3">
      <CalculatorButton>AC</CalculatorButton>
      <CalculatorButton>+/-</CalculatorButton>
      <CalculatorButton>%</CalculatorButton>
      <CalculatorButton>÷</CalculatorButton>
      <CalculatorButton>7</CalculatorButton>
      <CalculatorButton>8</CalculatorButton>
      <CalculatorButton>9</CalculatorButton>
      <CalculatorButton>×</CalculatorButton>
      <CalculatorButton>4</CalculatorButton>
      <CalculatorButton>5</CalculatorButton>
      <CalculatorButton>6</CalculatorButton>
      <CalculatorButton>-</CalculatorButton>
      <CalculatorButton>1</CalculatorButton>
      <CalculatorButton>2</CalculatorButton>
      <CalculatorButton>3</CalculatorButton>
      <CalculatorButton>+</CalculatorButton>
      <CalculatorButton>0</CalculatorButton>
      <CalculatorButton>.</CalculatorButton>
      <CalculatorButton>=</CalculatorButton>
    </div>
  );
}
