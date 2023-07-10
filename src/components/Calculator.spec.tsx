import { act, render } from "@testing-library/react";

import { Calculator } from "./Calculator";

describe("Calculator", () => {
  it("should render", () => {
    expect(1 + 1).toBe(2);
  });
  it("should be able to sum 2 numbers", () => {
    const { getByRole, container } = render(<Calculator />);
    const result = container.querySelector("header strong");
    act(() => {
      getByRole("button", { name: "1" }).click();
      getByRole("button", { name: "+" }).click();
      getByRole("button", { name: "2" }).click();
      getByRole("button", { name: "=" }).click();
    });
    expect(result).toBeTruthy();
    expect(result?.textContent).toBe("3");
    expect(result?.textContent).not.toBe("4");
  });
  it("should be able to subtract 2 numbers", () => {
    const { getByRole, container } = render(<Calculator />);
    const result = container.querySelector("header strong");
    act(() => {
      getByRole("button", { name: "1" }).click();
      getByRole("button", { name: "-" }).click();
      getByRole("button", { name: "2" }).click();
      getByRole("button", { name: "=" }).click();
    });
    expect(result).toBeTruthy();
    expect(result?.textContent).toBe("-1");
    expect(result?.textContent).not.toBe("7");
  });
  it("should be able to multiply 2 numbers", () => {
    const { getByRole, container } = render(<Calculator />);
    const result = container.querySelector("header strong");
    act(() => {
      getByRole("button", { name: "4" }).click();
      getByRole("button", { name: "×" }).click();
      getByRole("button", { name: "2" }).click();
      getByRole("button", { name: "=" }).click();
    });
    expect(result).toBeTruthy();
    expect(result?.textContent).toBe("8");
    expect(result?.textContent).not.toBe("6");
  });
  it("should be able to divide 2 numbers", () => {
    const { getByRole, container } = render(<Calculator />);
    const result = container.querySelector("header strong");
    act(() => {
      getByRole("button", { name: "1" }).click();
      getByRole("button", { name: "2" }).click();
      getByRole("button", { name: "÷" }).click();
      getByRole("button", { name: "2" }).click();
      getByRole("button", { name: "=" }).click();
    });
    expect(result).toBeTruthy();
    expect(result?.textContent).toBe("6");
    expect(result?.textContent).not.toBe("10");
  });
});
