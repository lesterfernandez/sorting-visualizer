import { Settings } from "./AlgoContext.types";

interface Animate {
  newArr: number[];
  arr: number[][];
  settings: Settings;
  setItems: React.Dispatch<React.SetStateAction<number[]>>;
}

type AnimateFunc = (animationProps: Animate) => void;

export const animateMerge: AnimateFunc = ({
  newArr,
  arr,
  settings,
  setItems,
}) => {
  arr.forEach(([newHeight, index], idx) => {
    const div = document.getElementById(`${index}`);
    if (!div) return;
    setTimeout(() => {
      div.style.backgroundColor = "#b041f0";
      div.style.height = `${newHeight / 7}%`;
      setTimeout(() => {
        div.style.backgroundColor = "#482";
        if (idx === arr.length - 1) {
          setItems(newArr);
        }
      }, settings.delay * 2);
    }, settings.delay * idx * 2);
  });
};

export const animateDivs: AnimateFunc = ({
  arr,
  newArr,
  setItems,
  settings,
}) => {
  arr.forEach(([first, second], idx) => {
    const div = document.getElementById(`${first}`);
    const div2 = document.getElementById(`${second}`);
    if (!div || !div2) return;
    setTimeout(() => {
      div.style.backgroundColor = "#b041f0";
      div2.style.backgroundColor = "#b041f0";
      const divHeight = div.style.height;
      div.style.height = div2.style.height;
      div2.style.height = divHeight;
      setTimeout(() => {
        div.style.backgroundColor = "#482";
        div2.style.backgroundColor = "#482";
        if (idx === arr.length - 1) {
          setItems(newArr);
        }
      }, settings.delay * 2);
    }, settings.delay * idx * 2);
  });
};
