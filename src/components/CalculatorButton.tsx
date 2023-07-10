import { ComponentProps } from "react";

import { tv, type VariantProps } from "tailwind-variants";

const CalculatorButtonStyles = tv({
  base: "flex items-center text-3xl rounded-full w-16 h-16 hover:opacity-70 transition-opacity duration-300",
  variants: {
    variant: {
      number: "bg-numbers-0 text-white active:bg-numbers-1 justify-center",
      operator:
        "bg-operators-0 text-white font-bold justify-center active:bg-operators-1",
      clear: "bg-clear-0 justify-center active:bg-clear-1",
    },
  },
});

type CalculatorButtonProps = ComponentProps<"button"> &
  Required<VariantProps<typeof CalculatorButtonStyles>>;

export function CalculatorButton(props: CalculatorButtonProps) {
  return (
    <button
      {...props}
      type="button"
      className={CalculatorButtonStyles({
        className: props.className,
        variant: props.variant,
      })}
    />
  );
}
