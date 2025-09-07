import { Big } from "big.js";
import { useEffect, useReducer } from "react";

import type { Action } from "../@types/action";
import type { State } from "../@types/state";

const initialValue: State = {
  overwrite: true,
  previousValue: "0",
};

function reducer(state: State, { type, payload }: Action) {
  switch (type) {
    case "CLEAR":
      return initialValue;
    case "ADD_DIGIT":
      if (payload?.digit === "0" && state.previousValue === "0") {
        return state;
      }
      if (payload?.digit === ".") {
        return state.previousValue?.includes(".")
          ? state
          : {
              ...state,
              overwrite: false,
              previousValue: `${state.previousValue}${payload?.digit}`,
            };
      }
      if (state.overwrite || state.previousValue === "0") {
        return {
          ...state,
          overwrite: false,
          previousValue: payload?.digit || "",
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
          currentValue: evaluate(state),
          operation: payload?.operation,
          overwrite: true,
          previousValue: evaluate(state),
        };
      }
      return {
        ...state,
        currentValue: state.previousValue,
        operation: payload?.operation,
        overwrite: true,
      };
    case "PERCENTAGE":
      return {
        ...state,
        overwrite: true,
        previousValue: new Big(state.previousValue).div(100).toString(),
      };
    case "INVERT":
      return {
        ...state,
        overwrite: false,
        previousValue: (Number.parseFloat(state.previousValue) * -1).toString(),
      };
    case "EVALUATE":
      if (!(state.previousValue && state.currentValue && state.operation)) {
        return state;
      }
      return {
        ...state,
        currentValue: state.overwrite
          ? state.currentValue
          : state.previousValue,
        overwrite: true,
        previousValue: evaluate(state),
      };
    default:
      return state;
  }
}

function evaluate({
  previousValue,
  operation,
  currentValue,
  overwrite,
}: State) {
  const previous = Number.parseFloat(previousValue || "");
  const current = Number.parseFloat(currentValue || "");
  switch (operation) {
    case "+":
      return new Big(previous).plus(current).toString();
    case "-":
      return overwrite
        ? new Big(previous).minus(current).toString()
        : new Big(current).minus(previous).toString();
    case "×":
      return new Big(previous).mul(current).toString();
    case "÷":
      return overwrite
        ? new Big(previous).div(current).toString()
        : new Big(current).div(previous).toString();
    default:
      throw new Error(`Unknown operation ${operation}`);
  }
}

export function useCalculator() {
  const [state, dispatch] = useReducer(reducer, initialValue);

  const addDigit = (number: string) => {
    dispatch({ payload: { digit: number }, type: "ADD_DIGIT" });
  };

  const setOperation = (operation: "+" | "-" | "×" | "÷") => {
    dispatch({ payload: { operation }, type: "SET_OPERATION" });
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const keys = {
        "-": () => setOperation("-"),
        ",": () => addDigit("."),
        ".": () => addDigit(e.key.toLowerCase()),
        "*": () => setOperation("×"),
        "/": () => setOperation("÷"),
        "%": () => dispatch({ type: "PERCENTAGE" }),
        "+": () => setOperation("+"),
        "=": () => dispatch({ type: "EVALUATE" }),
        0: () => addDigit(e.key.toLowerCase()),
        1: () => addDigit(e.key.toLowerCase()),
        2: () => addDigit(e.key.toLowerCase()),
        3: () => addDigit(e.key.toLowerCase()),
        4: () => addDigit(e.key.toLowerCase()),
        5: () => addDigit(e.key.toLowerCase()),
        6: () => addDigit(e.key.toLowerCase()),
        7: () => addDigit(e.key.toLowerCase()),
        8: () => addDigit(e.key.toLowerCase()),
        9: () => addDigit(e.key.toLowerCase()),
        c: () => dispatch({ type: "CLEAR" }),
        enter: () => dispatch({ type: "EVALUATE" }),
      };
      if (keys[e.key.toLowerCase() as keyof typeof keys]) {
        keys[e.key.toLowerCase() as keyof typeof keys]();
      }
    };

    document.addEventListener("keyup", handleKeyDown);

    return () => {
      document.removeEventListener("keyup", handleKeyDown);
    };
  }, [setOperation, addDigit]);

  return { dispatch, state };
}
