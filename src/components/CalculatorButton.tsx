interface ButtonProps {
  text: string;
  onClick(): void;
}

const types = {
  number: ["0", ".", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  operator: ["÷", "×", "-", "+", "="],
  clear: ["AC", "+/-", "%"],
};

export function CalculatorButton({ text, onClick }: ButtonProps) {
  const setStyles = () => {
    const styles = {
      number: "bg-numbers-0 text-white active:bg-numbers-1 ",
      operator:
        "bg-operators-0 text-white font-bold justify-center active:bg-operators-1",
      clear: "bg-clear-0 justify-center active:bg-clear-1",
    };

    return types.number.includes(text)
      ? text === "0"
        ? styles.number + "col-span-2 w-32 justify-start pl-6 pr-28"
        : styles.number + "justify-center"
      : types.operator.includes(text)
      ? styles.operator
      : styles.clear;
  };
  return (
    <button
      onClick={onClick}
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
