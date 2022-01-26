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
        ? "col-span-2 w-32 bg-numbers text-white justify-start pl-6"
        : "bg-numbers text-white justify-center";
    } else if (types.operator.includes(text)) {
      return "bg-operators text-white font-bold justify-center";
    } else {
      return "bg-clear justify-center";
    }
  };
  return (
    <button
      className={`flex items-center text-3xl rounded-full ${setStyles()} w-16 h-16`}
    >
      {text}
    </button>
  );
}
