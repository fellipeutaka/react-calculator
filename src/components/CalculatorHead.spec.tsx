import { render } from "@testing-library/react";

import { CalculatorHead } from "./CalculatorHead";

describe("Calculator Head component", () => {
  it("should render Calculator Head component", () => {
    const { getByText } = render(<CalculatorHead value="99" />);
    expect(getByText("99")).toBeInTheDocument();
  });
});
