import { Action } from "../@types/Action";
import { State } from "../@types/State";
import { CalculatorButton } from "./CalculatorButton";

type CalculatorBodyProps = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

export function CalculatorBody({ state, dispatch }: CalculatorBodyProps) {
  const addDigit = (number: string) => {
    dispatch({ type: "ADD_DIGIT", payload: { digit: number } });
  };

  const setOperation = (operation: "+" | "-" | "×" | "÷") => {
    dispatch({ type: "SET_OPERATION", payload: { operation } });
  };

  return (
    <div className="grid w-72 grid-cols-4 grid-rows-5 gap-3">
      <CalculatorButton
        variant="clear"
        onClick={() => dispatch({ type: "CLEAR" })}
      >
        {!state?.currentValue && state.previousValue === "0" ? "AC" : "C"}
      </CalculatorButton>
      <CalculatorButton
        variant="clear"
        onClick={() => dispatch({ type: "INVERT" })}
      >
        +/-
      </CalculatorButton>
      <CalculatorButton
        variant="clear"
        onClick={() => dispatch({ type: "PERCENTAGE" })}
      >
        %
      </CalculatorButton>
      <CalculatorButton variant="operator" onClick={() => setOperation("÷")}>
        ÷
      </CalculatorButton>

      <CalculatorButton variant="number" onClick={() => addDigit("7")}>
        7
      </CalculatorButton>
      <CalculatorButton variant="number" onClick={() => addDigit("8")}>
        8
      </CalculatorButton>
      <CalculatorButton variant="number" onClick={() => addDigit("9")}>
        9
      </CalculatorButton>
      <CalculatorButton variant="operator" onClick={() => setOperation("×")}>
        ×
      </CalculatorButton>

      <CalculatorButton variant="number" onClick={() => addDigit("4")}>
        4
      </CalculatorButton>
      <CalculatorButton variant="number" onClick={() => addDigit("5")}>
        5
      </CalculatorButton>
      <CalculatorButton variant="number" onClick={() => addDigit("6")}>
        6
      </CalculatorButton>
      <CalculatorButton variant="operator" onClick={() => setOperation("-")}>
        -
      </CalculatorButton>

      <CalculatorButton variant="number" onClick={() => addDigit("1")}>
        1
      </CalculatorButton>
      <CalculatorButton variant="number" onClick={() => addDigit("2")}>
        2
      </CalculatorButton>
      <CalculatorButton variant="number" onClick={() => addDigit("3")}>
        3
      </CalculatorButton>
      <CalculatorButton variant="operator" onClick={() => setOperation("+")}>
        +
      </CalculatorButton>

      <CalculatorButton
        className="col-span-2 w-32 justify-start pl-6 pr-28"
        variant="number"
        onClick={() => addDigit("0")}
      >
        0
      </CalculatorButton>
      <CalculatorButton variant="number" onClick={() => addDigit(".")}>
        .
      </CalculatorButton>
      <CalculatorButton
        variant="operator"
        onClick={() => dispatch({ type: "EVALUATE" })}
      >
        =
      </CalculatorButton>
    </div>
  );
}
