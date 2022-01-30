import { Dispatch } from "react";
import { Action } from "../types/Action";
import CalculatorButton from "./CalculatorButton";

interface Props {
  dispatch: Dispatch<Action>;
}

export default function CalculatorBody({ dispatch }: Props) {
  return (
    <div className="grid w-72 grid-cols-4 grid-rows-5 gap-3">
      <CalculatorButton text="AC" onClick={() => dispatch({ type: "CLEAR" })} />
      <CalculatorButton text="+/-" onClick={() => console.log()} />
      <CalculatorButton text="%" onClick={() => console.log()} />
      <CalculatorButton text="÷" onClick={() => console.log()} />
      <CalculatorButton
        text="7"
        onClick={() => dispatch({ type: "ADD_DIGIT", payload: { digit: "7" } })}
      />

      <CalculatorButton
        text="8"
        onClick={() => dispatch({ type: "ADD_DIGIT", payload: { digit: "8" } })}
      />
      <CalculatorButton
        text="9"
        onClick={() => dispatch({ type: "ADD_DIGIT", payload: { digit: "9" } })}
      />
      <CalculatorButton text="×" onClick={() => console.log()} />
      <CalculatorButton
        text="4"
        onClick={() => dispatch({ type: "ADD_DIGIT", payload: { digit: "4" } })}
      />
      <CalculatorButton
        text="5"
        onClick={() => dispatch({ type: "ADD_DIGIT", payload: { digit: "5" } })}
      />
      <CalculatorButton
        text="6"
        onClick={() => dispatch({ type: "ADD_DIGIT", payload: { digit: "6" } })}
      />
      <CalculatorButton text="-" onClick={() => console.log()} />
      <CalculatorButton
        text="1"
        onClick={() => dispatch({ type: "ADD_DIGIT", payload: { digit: "1" } })}
      />
      <CalculatorButton
        text="2"
        onClick={() => dispatch({ type: "ADD_DIGIT", payload: { digit: "2" } })}
      />
      <CalculatorButton
        text="3"
        onClick={() => dispatch({ type: "ADD_DIGIT", payload: { digit: "3" } })}
      />
      <CalculatorButton text="+" onClick={() => console.log()} />
      <CalculatorButton
        text="0"
        onClick={() => dispatch({ type: "ADD_DIGIT", payload: { digit: "0" } })}
      />
      <CalculatorButton
        text="."
        onClick={() => dispatch({ type: "ADD_DIGIT", payload: { digit: "." } })}
      />
      <CalculatorButton text="=" onClick={() => console.log()} />
    </div>
  );
}
