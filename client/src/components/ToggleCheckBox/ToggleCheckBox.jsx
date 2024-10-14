/* eslint-disable react/prop-types */
import { useState } from "react";

export default function ToggleCheckBox({ value }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckedLabels = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <label className="relative flex items-center gap-2 cursor-pointer">
      <input
        type="checkbox"
        className="sr-only"
        checked={isChecked}
        onChange={handleCheckedLabels}
      />
      <div className="bg-slate-200 w-4 h-4 rounded shadow-inner"></div>
      <div
        className={`absolute w-4 h-4 rounded shadow transition-opacity duration-300 ${
          isChecked ? "opacity-100 bg-emerald-500" : "opacity-0"
        }`}
      ></div>
      <p className="text-gray-700">{value}</p>
    </label>
  );
}
