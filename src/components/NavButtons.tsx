import { Algo, Settings } from "../utils/AlgoContext.types";

interface Props {
  onAlgoChange: (type: Algo) => void;
  settings: Settings;
  sort: (algoType: Algo) => void;
}

const NavButtons: React.FC<Props> = ({ onAlgoChange, settings, sort }) => (
  <div className="row-span-1 flex items-center justify-center w-5/6 max-w-4xl mx-auto gap-5">
    <div className="flex flex-wrap justify-center">
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
      <button
        className={`border border-teal-100 shadow-md py-2 px-4 transition-all active:scale-95 ${
          settings.algoType === "heap sort" && "text-purple-500"
        }`}
        onClick={() => onAlgoChange("heap sort")}
      >
        Heap Sort
      </button>
      <button
        className={`border border-teal-100 shadow-md py-2 px-4 transition-all active:scale-95 ${
          settings.algoType === "quick sort" && "text-purple-500"
        }`}
        onClick={() => onAlgoChange("quick sort")}
      >
        Quick Sort
      </button>
    </div>
    <button className="underline" onClick={() => sort(settings.algoType)}>
      Sort!
    </button>
  </div>
);

export default NavButtons;
