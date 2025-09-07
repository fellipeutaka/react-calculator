export interface State {
  previousValue: string;
  currentValue?: string | null;
  operation?: "+" | "-" | "×" | "÷";
  overwrite?: boolean;
}
