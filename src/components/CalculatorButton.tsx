interface ButtonProps {
  text: string;
}

const types = {
  number: ["0", ".", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  operator: ["÷", "×", "-", "+", "="],
  clear: ["AC", "+/-", "%"],
};

export default function CalculatorButton({ text }: ButtonProps) {
  const setStyles = () => {
    if (types.number.includes(text)) {
      return text === "0"
        ? "col-span-2 w-32 bg-numbers-0 text-white justify-start pl-6 pr-28 active:bg-numbers-1"
        : "bg-numbers-0 text-white justify-center active:bg-numbers-1";
    } else if (types.operator.includes(text)) {
      return "bg-operators-0 text-white font-bold justify-center active:bg-operators-1";
    } else {
      return "bg-clear-0 justify-center active:bg-clear-1";
    }
  };
  return (
    <button
      className={`
        flex items-center text-3xl rounded-full w-16 h-16
        md:hover:opacity-70 transition-opacity duration-300
        ${setStyles()}
        `}
    >
      {text}
    </button>
  );
}
