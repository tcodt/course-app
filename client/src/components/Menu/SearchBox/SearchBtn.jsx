/* eslint-disable react/prop-types */
import { GoSearch } from "react-icons/go";

export default function SearchBtn({ size, color, onClick }) {
  return (
    <button
      // className="p-3 bg-slate-100 rounded-full shadow-sm"
      onClick={onClick}
    >
      <GoSearch size={size} color={color} />
    </button>
  );
}
