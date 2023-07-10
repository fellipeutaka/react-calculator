import { useCalculator } from "../hooks/useCalculator";
import { CalculatorBody } from "./CalculatorBody";
import { CalculatorHead } from "./CalculatorHead";

export function Calculator() {
  const { state, dispatch } = useCalculator();

  return (
    <div>
      <CalculatorHead value={state.previousValue} />
      <CalculatorBody state={state} dispatch={dispatch} />
    </div>
  );
}
