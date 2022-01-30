import { useReducer } from "react";
import { Action } from "../types/Action";
import { State } from "../types/State";
import CalculatorBody from "./CalculatorBody";
import CalculatorHead from "./CalculatorHead";

const initialValue: State = {
  currentValue: "0",
  overwrite: true,
};

function reducer(state: State, { type, payload }: Action) {
  switch (type) {
    case "CLEAR":
      return initialValue;
    case "ADD_DIGIT":
      if (payload?.digit === "0" && state.currentValue === "0") {
        return state;
      }
      if (payload?.digit === ".") {
        return state.currentValue.includes(".")
          ? state
          : {
              ...state,
              currentValue: `${state.currentValue}${payload?.digit}`,
              overwrite: false,
            };
      }
      if (state.overwrite) {
        return {
          ...state,
          currentValue: payload?.digit || "",
          overwrite: false,
        };
      }
      return {
        ...state,
        currentValue: `${state.currentValue}${payload?.digit || ""}`,
      };
    default:
      return state;
  }
}

export default function Calculator() {
  const [state, dispatch] = useReducer(reducer, initialValue);
  return (
    <div>
      <CalculatorHead currentValue={state.currentValue} />
      <CalculatorBody dispatch={dispatch} />
    </div>
  );
}
