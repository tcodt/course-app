/* eslint-disable react/prop-types */
import { PiMoon } from "react-icons/pi";

export default function ThemeBtn({ size, color }) {
  return (
    <button className="p-3 bg-slate-100 rounded-full shadow-sm">
      <PiMoon size={size} color={color} />
    </button>
  );
}
