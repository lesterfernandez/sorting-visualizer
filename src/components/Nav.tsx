import { useContext } from "react";
import { SettingsContext } from "../utils/AlgoContext";
import { Algo } from "../utils/AlgoContext.types";
import NavButtons from "./NavButtons";

type InputChangeHandler = React.ChangeEventHandler<HTMLInputElement>;

const Nav = () => {
  const { sort, settings, setSettings } = useContext(SettingsContext);

  const onArrayChange: InputChangeHandler = (e) => {
    if (!setSettings) return;
    setSettings((c) => ({ ...c, arrayLen: +e.target.value * 5 }));
  };

  const onDelayChange: InputChangeHandler = (e) => {
    if (!setSettings) return;
    setSettings((c) => ({ ...c, delay: +e.target.value }));
  };

  const onAlgoChange = (type: Algo) => {
    if (!setSettings) return;
    setSettings((c) => ({ ...c, algoType: type }));
  };

  return (
    <nav className="row-span-3 sm:row-span-2 w-screen bg-gray-300 grid grid-rows-2 pb-4">
      <NavButtons onAlgoChange={onAlgoChange} settings={settings} sort={sort} />
      <div className="flex flex-col items-center w-full row-span-1">
        <label htmlFor="items_amount">Array Length: {settings.arrayLen}</label>
        <input
          type="range"
          name="items_amount"
          id="items_amount"
          className="w-full max-w-2xl"
          defaultValue={25}
          min={1}
          onChange={onArrayChange}
        />
        <label htmlFor="delay">Delay: {settings.delay}</label>
        <input
          type="range"
          name="delay"
          id="delay"
          className="w-full max-w-2xl z-10"
          min={1}
          defaultValue={5}
          onChange={onDelayChange}
        />
      </div>
    </nav>
  );
};

export default Nav;
