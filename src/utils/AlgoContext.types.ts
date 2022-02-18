export type Algo = "merge sort" | "insertion sort";

export interface Settings {
  algoType: Algo;
  arrayLen: number;
  delay: number;
}

export type SettingsContext = {
  settings: Settings;
  setSettings?: React.Dispatch<React.SetStateAction<Settings>>;
  sort: (algoType: Algo) => void;
};

export type Items = {
  items: number[];
  setItems?: React.Dispatch<React.SetStateAction<number[]>>;
};
