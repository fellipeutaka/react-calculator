import type { VariantProps } from "cva";
import { Button, composeRenderProps } from "react-aria-components";
import { cva } from "../lib/cva";

const CalculatorButtonStyles = cva({
  base: "flex size-16 items-center rounded-full text-3xl transition-colors",
  variants: {
    variant: {
      clear: "justify-center bg-[#6C6C6B] pressed:bg-[#8D8E8D]",
      number: "justify-center bg-[#4E4E4D] pressed:bg-[#808180]",
      operator: "justify-center bg-[#FF9500] pressed:bg-[#FCC78D]",
    },
  },
});

interface CalculatorButtonProps
  extends React.ComponentProps<typeof Button>,
    Required<VariantProps<typeof CalculatorButtonStyles>> {}

export function CalculatorButton({
  className,
  ...props
}: CalculatorButtonProps) {
  return (
    <Button
      {...props}
      className={composeRenderProps(className, (className) =>
        CalculatorButtonStyles({
          className,
          variant: props.variant,
        })
      )}
    />
  );
}
