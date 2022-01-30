export type Action = {
  type: "ADD_DIGIT" | "SET_OPERATION" | "EVALUATE" | "CLEAR";
  payload?: {
    digit?: string;
    operation?: "+" | "-" | "×" | "÷";
  };
};
