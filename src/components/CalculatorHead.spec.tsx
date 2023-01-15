import { CalculatorHead } from "./CalculatorHead";
import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";

describe("Calculator Head component", () => {
  it("should render Calculator Head component", () => {
    const { getByText } = render(<CalculatorHead currentValue="99" />);
    expect(getByText("99")).toBeTruthy();
  });
});
