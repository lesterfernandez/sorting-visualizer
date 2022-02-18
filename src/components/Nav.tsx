import { useContext } from "react";
import { Context } from "../utils/AlgoContext";
import { Algo } from "../utils/AlgoContext.types";

type InputChangeHandler = React.ChangeEventHandler<HTMLInputElement>;

const Nav = () => {
  const { sort, settings, setSettings } = useContext(Context);

  const onArrayChange: InputChangeHandler = e => {
    if (!setSettings) return;
    setSettings(c => ({ ...c, arrayLen: +e.target.value * 5 }));
  };

  const onDelayChange: InputChangeHandler = e => {
    if (!setSettings) return;
    setSettings(c => ({ ...c, delay: +e.target.value }));
  };

  const onAlgoChange = (type: Algo) => {
    if (!setSettings) return;
    setSettings(c => ({ ...c, algoType: type }));
  };

  return (
    <nav className="w-screen bg-gray-300 grid grid-flow-row">
      <div className="flex items-center justify-center w-full my-2 gap-5">
        <div>
          <button
            className={`border border-teal-100 shadow-md py-2 px-4 transition-all active:scale-95 ${
              settings.algoType === "merge sort" && "text-purple-500"
            }`}
            onClick={() => onAlgoChange("merge sort")}
          >
            Merge Sort
          </button>
          <button
            className={`border border-teal-100 shadow-md py-2 px-4 transition-all active:scale-95 ${
              settings.algoType === "insertion sort" && "text-purple-500"
            }`}
            onClick={() => onAlgoChange("insertion sort")}
          >
            Insertion Sort
          </button>
        </div>
        <button
          className="underline"
          onClick={() => sort(settings.algoType)}
        >
          Sort!
        </button>
      </div>
      <div className="flex flex-col items-center w-full pb-3">
        <label htmlFor="items_amount">
          Array Length: {settings.arrayLen}
        </label>
        <input
          type="range"
          name="items_amount"
          id="items_amount"
          className="w-full max-w-2xl"
          defaultValue={75}
          min={1}
          onChange={onArrayChange}
        />
        <label htmlFor="delay">Delay: {settings.delay}</label>
        <input
          type="range"
          name="delay"
          id="delay"
          className="w-full max-w-2xl"
          min={1}
          defaultValue={5}
          onChange={onDelayChange}
        />
      </div>
    </nav>
  );
};

export default Nav;
