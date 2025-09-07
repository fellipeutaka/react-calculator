import { render } from "@testing-library/react";

import { describe, expect, it } from "vitest";

import { CalculatorHead } from "./calculator-head";

describe("Calculator Head component", () => {
  it("should render Calculator Head component", () => {
    const { getByText } = render(<CalculatorHead value="99" />);
    expect(getByText("99")).toBeInTheDocument();
  });
});
