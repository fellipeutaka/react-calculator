import { useCalculator } from "../hooks/use-calculator";
import { CalculatorBody } from "./calculator-body";
import { CalculatorHead } from "./calculator-head";

export function Calculator() {
  const { state, dispatch } = useCalculator();

  return (
    <div>
      <CalculatorHead value={state.previousValue} />
      <CalculatorBody dispatch={dispatch} state={state} />
    </div>
  );
}
