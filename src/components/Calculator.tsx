import { useEffect, useReducer } from "react";
import { Action } from "../types/Action";
import { State } from "../types/State";
import CalculatorBody from "./CalculatorBody";
import CalculatorHead from "./CalculatorHead";

const initialValue: State = {
  previousValue: "0",
  overwrite: true,
};

function reducer(state: State, { type, payload }: Action) {
  switch (type) {
    case "CLEAR":
      return initialValue;
    case "ADD_DIGIT":
      if (payload?.digit === "0" && state.previousValue === "0") {
        console.log("AII");
        return state;
      }
      if (payload?.digit === ".") {
        return state.previousValue?.includes(".")
          ? state
          : {
              ...state,
              previousValue: `${state.previousValue}${payload?.digit}`,
              overwrite: false,
            };
      }
      if (state.overwrite || state.previousValue === "0") {
        return {
          ...state,
          previousValue: payload?.digit || "",
          overwrite: false,
        };
      }
      return {
        ...state,
        previousValue: `${state.previousValue}${payload?.digit || ""}`,
      };
    case "SET_OPERATION":
      if (state.currentValue) {
        return {
          ...state,
          overwrite: true,
          previousValue: evaluate(state),
          currentValue: evaluate(state),
          operation: payload?.operation,
        };
      }
      return {
        ...state,
        overwrite: true,
        currentValue: state.previousValue,
        operation: payload?.operation,
      };
    case "PERCENTAGE":
      return {
        ...state,
        overwrite: true,
        previousValue: (parseFloat(state.previousValue || "") / 100).toString(),
      };
    case "INVERT":
      return {
        ...state,
        overwrite: false,
        previousValue: (parseFloat(state.previousValue || "") * -1).toString(),
      };
    case "EVALUATE":
      return {
        ...state,
        overwrite: true,
        previousValue: evaluate(state),
      };
    default:
      return state;
  }
}

function evaluate({ previousValue, operation, currentValue }: State) {
  const previous = parseFloat(previousValue || "");
  const current = parseFloat(currentValue || "");
  switch (operation) {
    case "+":
      return (current + previous).toString();
    case "-":
      return (current - previous).toString();
    case "×":
      return (current * previous).toString();
    case "÷":
      return (current / previous).toString();
    default:
      throw new Error();
  }
}

export default function Calculator() {
  const [state, dispatch] = useReducer(reducer, initialValue);
  useEffect(() => console.log(state), [state]);
  return (
    <div>
      <CalculatorHead currentValue={state.previousValue || ""} />
      <CalculatorBody state={state} dispatch={dispatch} />
    </div>
  );
}
