export interface Action {
  type:
    | "ADD_DIGIT"
    | "SET_OPERATION"
    | "EVALUATE"
    | "PERCENTAGE"
    | "INVERT"
    | "CLEAR";
  payload?: {
    digit?: string;
    operation?: "+" | "-" | "×" | "÷";
  };
}
