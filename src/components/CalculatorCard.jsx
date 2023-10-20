import { useEffect } from "react";
import useStore from "../store";

const CalculatorCard = ({ billAmount, numberOfPeople, tipPercentage }) => {
  const [tipAmountPerPerson, totalAmountPerPerson, setTipAndTotal, reset] =
    useStore((state) => [
      state.tipAmountPerPerson,
      state.totalAmountPerPerson,
      state.setTipAndTotal,
      state.reset,
    ]);

  useEffect(() => {
    setTipAndTotal(billAmount, numberOfPeople, tipPercentage);
  }, [billAmount, numberOfPeople, tipPercentage]);

  return (
    <div className="flex flex-col gap-4 rounded-2xl bg-very-dark-cyan p-8 mx-10 my-6 md:mx-4 md:w-1/2">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-white">Tip Amount</p>
          <p className="text-grayish-cyan">/ person</p>
        </div>
        <p className="text-strong-cyan text-4xl md:text-lg">
          $ {tipAmountPerPerson.toFixed(2)}
        </p>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-white">Total</p>
          <p className="text-grayish-cyan">/ person</p>
        </div>
        <p className="text-strong-cyan text-4xl md:text-lg">
          $ {totalAmountPerPerson.toFixed(2)}
        </p>
      </div>
      <button
        onClick={reset}
        className="w-full bg-strong-cyan text-very-dark-cyan rounded-xl py-3 mt-4 text-lg"
      >
        Reset
      </button>
    </div>
  );
};

export default CalculatorCard;
