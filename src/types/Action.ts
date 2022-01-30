export type Action = {
  type: "ADD_DIGIT" | "CLEAR";
  payload?: {
    digit?: string;
    operation?: string;
  };
};
