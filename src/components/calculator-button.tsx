import type { VariantProps } from "cva";
import { cva } from "../lib/cva";

const CalculatorButtonStyles = cva({
  base: "flex h-16 w-16 items-center rounded-full text-3xl transition-opacity duration-300 hover:opacity-70",
  variants: {
    variant: {
      clear: "justify-center bg-clear-0 active:bg-clear-1",
      number: "justify-center bg-numbers-0 text-white active:bg-numbers-1",
      operator:
        "justify-center bg-operators-0 font-bold text-white active:bg-operators-1",
    },
  },
});

type CalculatorButtonProps = React.ComponentProps<"button"> &
  Required<VariantProps<typeof CalculatorButtonStyles>>;

export function CalculatorButton(props: CalculatorButtonProps) {
  return (
    <button
      {...props}
      className={CalculatorButtonStyles({
        className: props.className,
        variant: props.variant,
      })}
      type="button"
    />
  );
}
