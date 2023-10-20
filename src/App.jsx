import CalculatorCard from "./components/CalculatorCard";
import InputsCard from "./components/InputsCard";
import useStore from "./store";

function App() {
  const [activePercentage, billAmount, numberOfPeople] = useStore((state) => [
    state.activePercentage,
    state.billAmount,
    state.numberOfPeople,
  ]);
  return (
    <div className="flex flex-col items-center justify-center gap-10 bg-light-grayish-cyan min-h-screen">
      <img
        src="/images/logo.svg"
        alt="splitter-logo"
        className="mx-auto mt-16 w-24"
      />
      <div className="flex flex-col rounded-2xl bg-white md:flex-row md:max-w-3xl">
        <InputsCard />
        <CalculatorCard
          billAmount={billAmount}
          numberOfPeople={numberOfPeople}
          tipPercentage={parseFloat(activePercentage)}
        />
      </div>
    </div>
  );
}

export default App;
