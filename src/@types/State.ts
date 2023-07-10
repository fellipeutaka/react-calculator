export type State = {
  previousValue: string;
  currentValue?: string | null;
  operation?: "+" | "-" | "×" | "÷";
  overwrite?: boolean;
};
