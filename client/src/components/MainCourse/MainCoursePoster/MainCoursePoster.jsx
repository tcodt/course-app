/* eslint-disable react/prop-types */
export default function MainCoursePoster({ poster, title }) {
  return (
    <div className="flex-1">
      <img src={poster} alt={title} className="rounded-xl h-[350px]" />
    </div>
  );
}
