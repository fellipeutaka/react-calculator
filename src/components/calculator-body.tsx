import type { Action } from "../@types/action";
import type { State } from "../@types/state";
import { CalculatorButton } from "./calculator-button";

interface CalculatorBodyProps {
  state: State;
  dispatch: React.Dispatch<Action>;
}

export function CalculatorBody({ state, dispatch }: CalculatorBodyProps) {
  const addDigit = (number: string) => {
    dispatch({ payload: { digit: number }, type: "ADD_DIGIT" });
  };

  const setOperation = (operation: "+" | "-" | "×" | "÷") => {
    dispatch({ payload: { operation }, type: "SET_OPERATION" });
  };

  return (
    <div className="grid w-72 grid-cols-4 grid-rows-5 gap-3">
      <CalculatorButton
        onClick={() => dispatch({ type: "CLEAR" })}
        variant="clear"
      >
        {!state?.currentValue && state.previousValue === "0" ? "AC" : "C"}
      </CalculatorButton>
      <CalculatorButton
        onClick={() => dispatch({ type: "INVERT" })}
        variant="clear"
      >
        +/-
      </CalculatorButton>
      <CalculatorButton
        onClick={() => dispatch({ type: "PERCENTAGE" })}
        variant="clear"
      >
        %
      </CalculatorButton>
      <CalculatorButton onClick={() => setOperation("÷")} variant="operator">
        ÷
      </CalculatorButton>

      <CalculatorButton onClick={() => addDigit("7")} variant="number">
        7
      </CalculatorButton>
      <CalculatorButton onClick={() => addDigit("8")} variant="number">
        8
      </CalculatorButton>
      <CalculatorButton onClick={() => addDigit("9")} variant="number">
        9
      </CalculatorButton>
      <CalculatorButton onClick={() => setOperation("×")} variant="operator">
        ×
      </CalculatorButton>

      <CalculatorButton onClick={() => addDigit("4")} variant="number">
        4
      </CalculatorButton>
      <CalculatorButton onClick={() => addDigit("5")} variant="number">
        5
      </CalculatorButton>
      <CalculatorButton onClick={() => addDigit("6")} variant="number">
        6
      </CalculatorButton>
      <CalculatorButton onClick={() => setOperation("-")} variant="operator">
        -
      </CalculatorButton>

      <CalculatorButton onClick={() => addDigit("1")} variant="number">
        1
      </CalculatorButton>
      <CalculatorButton onClick={() => addDigit("2")} variant="number">
        2
      </CalculatorButton>
      <CalculatorButton onClick={() => addDigit("3")} variant="number">
        3
      </CalculatorButton>
      <CalculatorButton onClick={() => setOperation("+")} variant="operator">
        +
      </CalculatorButton>

      <CalculatorButton
        className="col-span-2 w-32 justify-start pr-28 pl-6"
        onClick={() => addDigit("0")}
        variant="number"
      >
        0
      </CalculatorButton>
      <CalculatorButton onClick={() => addDigit(".")} variant="number">
        .
      </CalculatorButton>
      <CalculatorButton
        onClick={() => dispatch({ type: "EVALUATE" })}
        variant="operator"
      >
        =
      </CalculatorButton>
    </div>
  );
}
