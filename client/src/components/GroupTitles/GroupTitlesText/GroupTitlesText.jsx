/* eslint-disable react/prop-types */
export default function GroupTitlesText({ text, bgColor }) {
  return (
    <div className="flex items-center gap-2">
      <div className={`w-4 h-4 rounded animate-spin ${bgColor}`}></div>
      <h2 className="text-2xl font-bold text-gray-800">{text}</h2>
    </div>
  );
}
