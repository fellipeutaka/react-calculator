import { Dispatch } from "react";
import { Action } from "../types/Action";
import { State } from "../types/State";
import CalculatorButton from "./CalculatorButton";

interface Props {
  state: State;
  dispatch: Dispatch<Action>;
}

export default function CalculatorBody({ state, dispatch }: Props) {
  const addDigit = (number: string) => {
    dispatch({ type: "ADD_DIGIT", payload: { digit: number } });
  };

  const setOperation = (operation: "+" | "-" | "×" | "÷") => {
    dispatch({ type: "SET_OPERATION", payload: { operation } });
  };

  return (
    <div className="grid w-72 grid-cols-4 grid-rows-5 gap-3">
      <CalculatorButton
        text={!state?.currentValue && state.previousValue === "0" ? "AC" : "C"}
        onClick={() => dispatch({ type: "CLEAR" })}
      />
      <CalculatorButton
        text="+/-"
        onClick={() => dispatch({ type: "INVERT" })}
      />
      <CalculatorButton
        text="%"
        onClick={() => dispatch({ type: "PERCENTAGE" })}
      />
      <CalculatorButton text="÷" onClick={() => setOperation("÷")} />
      <CalculatorButton text="7" onClick={() => addDigit("7")} />

      <CalculatorButton text="8" onClick={() => addDigit("8")} />
      <CalculatorButton text="9" onClick={() => addDigit("9")} />
      <CalculatorButton text="×" onClick={() => setOperation("×")} />
      <CalculatorButton text="4" onClick={() => addDigit("4")} />
      <CalculatorButton text="5" onClick={() => addDigit("5")} />
      <CalculatorButton text="6" onClick={() => addDigit("6")} />
      <CalculatorButton text="-" onClick={() => setOperation("-")} />
      <CalculatorButton text="1" onClick={() => addDigit("1")} />
      <CalculatorButton text="2" onClick={() => addDigit("2")} />
      <CalculatorButton text="3" onClick={() => addDigit("3")} />
      <CalculatorButton text="+" onClick={() => setOperation("+")} />
      <CalculatorButton text="0" onClick={() => addDigit("0")} />
      <CalculatorButton text="." onClick={() => addDigit(".")} />
      <CalculatorButton
        text="="
        onClick={() => dispatch({ type: "EVALUATE" })}
      />
    </div>
  );
}
