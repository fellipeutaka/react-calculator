import { useEffect, useReducer } from "react";

import { Big } from "big.js";

import type { Action } from "../@types/Action";
import type { State } from "../@types/State";

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
        previousValue: new Big(state.previousValue).div(100).toString(),
      };
    case "INVERT":
      return {
        ...state,
        overwrite: false,
        previousValue: (parseFloat(state.previousValue) * -1).toString(),
      };
    case "EVALUATE":
      if (!state.previousValue || !state.currentValue || !state.operation) {
        return state;
      }
      return {
        ...state,
        overwrite: true,
        previousValue: evaluate(state),
        currentValue: state.overwrite
          ? state.currentValue
          : state.previousValue,
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
  const previous = parseFloat(previousValue || "");
  const current = parseFloat(currentValue || "");
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
      throw new Error();
  }
}

export function useCalculator() {
  const [state, dispatch] = useReducer(reducer, initialValue);

  const addDigit = (number: string) => {
    dispatch({ type: "ADD_DIGIT", payload: { digit: number } });
  };

  const setOperation = (operation: "+" | "-" | "×" | "÷") => {
    dispatch({ type: "SET_OPERATION", payload: { operation } });
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const keys = {
        c: () => dispatch({ type: "CLEAR" }),
        "%": () => dispatch({ type: "PERCENTAGE" }),
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
        ".": () => addDigit(e.key.toLowerCase()),
        ",": () => addDigit("."),
        "/": () => setOperation("÷"),
        "*": () => setOperation("×"),
        "-": () => setOperation("-"),
        "+": () => setOperation("+"),
        "=": () => dispatch({ type: "EVALUATE" }),
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
  }, []);

  return { state, dispatch };
}
