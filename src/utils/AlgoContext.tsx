import { createContext, useEffect, useState } from "react";
import { Algo, Items, Settings, SettingsContext } from "./AlgoContext.types";
import { getInsertionSortAnims } from "./algorithms/insertionSort";
import { getMergeSortAnims } from "./algorithms/mergeSort";
import { animateDivs, animateMerge } from "./animate";

const initVals: Settings = {
  algoType: "merge sort",
  arrayLen: 75,
  delay: 5,
};

export const Context = createContext<SettingsContext>({
  settings: initVals,
  sort: () => {},
});

export const ItemsContext = createContext<Items>({ items: [] });

interface Props {
  children: React.ReactNode;
}

const AlgoContext: React.FC<Props> = ({ children }) => {
  const [settings, setSettings] = useState<Settings>(initVals);
  const [items, setItems] = useState<number[]>([]);

  useEffect(() => {
    const ranNums = [];
    for (let i = 0; i < settings.arrayLen; i++) {
      ranNums.push(Math.floor(Math.random() * 540));
    }
    setItems(ranNums);
  }, [settings.arrayLen]);

  const sort = (algoType: Algo) => {
    switch (algoType) {
      case "insertion sort":
        const { newArr, animArr } = getInsertionSortAnims(items);
        animateDivs({ newArr, arr: animArr, setItems, settings });
        break;
      case "merge sort":
        const aux: number[] = [];
        const arr: number[][] = [];
        const nums = [...items];
        getMergeSortAnims(nums, aux, arr, 0, items.length - 1);
        animateMerge({ newArr: nums, arr, setItems, settings });
        break;
      default:
        break;
    }
  };

  return (
    <ItemsContext.Provider value={{ items, setItems }}>
      <Context.Provider value={{ sort, settings, setSettings }}>
        {children}
      </Context.Provider>
    </ItemsContext.Provider>
  );
};

export default AlgoContext;
