import { CalculatorHead } from "./CalculatorHead";
import { render } from "@testing-library/react";

describe("Calculator Head component", () => {
  it("should render Calculator Head component", () => {
    const { getByText } = render(<CalculatorHead value="99" />);
    expect(getByText("99")).toBeInTheDocument();
  });
});
