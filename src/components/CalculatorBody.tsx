import { Dispatch, useEffect } from "react";
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

  useEffect(() => {
    document.addEventListener("keyup", (e) => {
      const keyPressed = e.key.toLowerCase();
      type Keys = {
        [c: string]: () => void;
        ["%"]: () => void;
        [0]: () => void;
        [1]: () => void;
        [2]: () => void;
        [3]: () => void;
        [4]: () => void;
        [5]: () => void;
        [6]: () => void;
        [7]: () => void;
        [8]: () => void;
        [9]: () => void;
        ["."]: () => void;
        ["/"]: () => void;
        ["*"]: () => void;
        ["-"]: () => void;
        ["+"]: () => void;
        ["="]: () => void;
        ["enter"]: () => void;
      };
      const keys: Keys = {
        c: () => dispatch({ type: "CLEAR" }),
        "%": () => dispatch({ type: "PERCENTAGE" }),
        0: () => addDigit(keyPressed),
        1: () => addDigit(keyPressed),
        2: () => addDigit(keyPressed),
        3: () => addDigit(keyPressed),
        4: () => addDigit(keyPressed),
        5: () => addDigit(keyPressed),
        6: () => addDigit(keyPressed),
        7: () => addDigit(keyPressed),
        8: () => addDigit(keyPressed),
        9: () => addDigit(keyPressed),
        ".": () => addDigit(keyPressed),
        "/": () => setOperation("÷"),
        "*": () => setOperation("×"),
        "-": () => setOperation("-"),
        "+": () => setOperation("+"),
        "=": () => dispatch({ type: "EVALUATE" }),
        enter: () => dispatch({ type: "EVALUATE" }),
      };
      if (keys[keyPressed]) {
        keys[keyPressed]();
      }
    });
  }, []);

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
