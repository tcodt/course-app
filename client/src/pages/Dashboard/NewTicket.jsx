export default function NewTicket() {
  return (
    <div className="container mx-auto max-w-[600px]">
      <h2 className="text-lg font-bold mb-4 text-gray-800 dark:text-zinc-100">
        ارسال تیکت
      </h2>
      <hr />
      <div className="mt-8 flex flex-col gap-6">
        <label className="flex flex-col gap-2 text-gray-600 dark:text-zinc-400">
          موضوع تیکت
          <input
            type="text"
            placeholder="موضوع تیکت خود را وارد کنید"
            className="focus-visible:outline-none bg-slate-100 dark:text-zinc-300 dark:bg-slate-700 dark:border-slate-500 border-2 focus-visible:border-slate-300 border-slate-200 text-gray-700 h-12 p-2 rounded-lg"
          />
        </label>
        <label className="flex flex-col gap-2 text-gray-600 dark:text-zinc-400">
          متن تیکت
          <textarea
            cols="30"
            rows="10"
            placeholder="متن تیکت خود را وارد کنید"
            className="border-2 border-slate-200 bg-slate-100 dark:text-zinc-300 dark:bg-slate-700 dark:border-slate-500 rounded-lg focus-visible:border-slate-300 p-4 focus-visible:outline-none"
          ></textarea>
        </label>
        <button className="bg-sky-500 p-1 h-12 w-1/4 rounded-lg text-white hover:bg-sky-600 transition">
          ارسال تیکت
        </button>
      </div>
    </div>
  );
}
