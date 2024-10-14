import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import MainSearchBox from "../MainSearchBox/MainSearchBox";

export default function CoursesPageSidebar() {
  return (
    <div className="flex flex-col gap-8 mb-6">
      <MainSearchBox />
      <div className="bg-white p-4 rounded-xl shadow-sm flex items-center justify-between">
        <p className="text-gray-700">فقط دوره های رایگان</p>
        <ToggleSwitch />
      </div>
      <div className="bg-white p-4 rounded-xl shadow-sm flex items-center justify-between">
        <p className="text-gray-700">در حال پیش فروش</p>
        <ToggleSwitch />
      </div>
      <div className="bg-white p-4 rounded-xl shadow-sm flex items-center justify-between">
        <p className="text-gray-700">دوره ها خریداری شده</p>
        <ToggleSwitch />
      </div>
    </div>
  );
}
