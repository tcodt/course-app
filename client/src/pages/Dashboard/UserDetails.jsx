/* eslint-disable react/prop-types */

export default function UserDetails(props) {
  let { title, preTitle, color, icon, course, ticket, credite, cursorButton } =
    props;

  return (
    <>
      <section className=" p-4 rounded-lg my-12 flex gap-4 justify-evenly flex-1">
        <div
          className={`flex items-center ${
            color === "yellow"
              ? "bg-yellow-500"
              : color === "green"
              ? "bg-green-500"
              : color === "blue"
              ? "bg-sky-500"
              : color === "pink"
              ? "bg-pink-500"
              : color === "cursorButton"
              ? "bg-blue-500"
              : ""
          } ${
            cursorButton ? "cursor-pointer hover:bg-blue-400 transition" : ""
          } p-3 rounded-lg gap-3 flex-1`}
        >
          <div
            className={`${
              color === "yellow"
                ? "bg-yellow-400"
                : color === "green"
                ? "bg-green-400"
                : color === "blue"
                ? "bg-sky-400"
                : color === "pink"
                ? "bg-pink-400"
                : color === "cursorButton"
                ? "bg-blue-400"
                : ""
            } p-3 rounded-lg text-4xl text-white`}
          >
            {icon}
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm text-zinc-100">{preTitle}</span>
            <h5 className="text-lg text-white">
              {title}{" "}
              {course ? "دوره" : ticket ? "تیکت" : credite ? "تومان" : ""}
            </h5>
          </div>
        </div>
      </section>
    </>
  );
}
