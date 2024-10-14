import { useState } from "react";

export default function ToggleSwitch() {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggleSwitch = () => {
    setIsToggled((prev) => !prev);
  };

  return (
    <label className="relative flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only"
        checked={isToggled}
        onChange={handleToggleSwitch}
      />

      {/* Switch container */}
      <div
        className={`w-12 h-6 rounded-full shadow-inner ${
          isToggled ? "bg-emerald-500" : "bg-slate-200"
        }`}
      ></div>

      {/* Circle of switch */}
      <div
        className={`absolute w-4 h-4 bg-white rounded-full shadow transition-transform duration-300 m-1 ${
          isToggled ? "-translate-x-6" : "translate-x-0"
        }`}
      ></div>
    </label>
  );
}
