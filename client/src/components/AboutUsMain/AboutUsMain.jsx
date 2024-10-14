import { BsBarChart } from "react-icons/bs";
import {
  HiOutlineChatBubbleLeftRight,
  HiOutlineClipboardDocumentCheck,
} from "react-icons/hi2";
import { IoBookOutline } from "react-icons/io5";

export default function AboutUsMain() {
  return (
    <section className="mt-12">
      <div className="grid grid-cols-12 gap-4">
        <div className="bg-white p-4 rounded-xl col-span-12 md:col-span-6 shadow-sm">
          <div className="flex items-center gap-4">
            <IoBookOutline size={100} className="text-sky-400" />
            <div className="flex flex-col gap-4">
              <h4 className="text-xl font-semibold text-gray-700">
                تضمین کاملترین محتوا
              </h4>
              <p className="text-base font-normal text-gray-500">
                بزار خیالت راحت کنم توی دوره هامون به ریز ترین موارد پرداختیم
                بعداز دیدن این دوره نیاز به هیچ آموزش دیگه ای نداری.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl col-span-12 md:col-span-6 shadow-sm">
          <div className="flex items-center gap-4">
            <HiOutlineChatBubbleLeftRight
              size={100}
              className="text-amber-400"
            />
            <div className="flex flex-col gap-4">
              <h4 className="text-xl font-semibold text-gray-700">
                پشتیبانی دائمی
              </h4>
              <p className="text-base font-normal text-gray-500">
                هرجا سوالی داشتی به مشکل خوردی بچه های تیم آمادن که مشکلت رو حل
                کنن تلاشمون اینه بدون نگرانی دوره رو کامل کنی.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl col-span-12 md:col-span-6 shadow-sm">
          <div className="flex items-center gap-4">
            <BsBarChart size={100} className="text-green-400" />
            <div className="flex flex-col gap-4">
              <h4 className="text-xl font-semibold text-gray-700">
                پروژه محور در راستای بازار کار
              </h4>
              <p className="text-base font-normal text-gray-500">
                کل تمرکز ما رو این هستش بعداز تموم شدن دوره شخص بتونه با اعتماد
                به نفس کامل پروژه بزنه واقدام کنه برای کسب درآمد.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl col-span-12 md:col-span-6 shadow-sm">
          <div className="flex items-center gap-4">
            <HiOutlineClipboardDocumentCheck
              size={100}
              className="text-red-400"
            />
            <div className="flex flex-col gap-4">
              <h4 className="text-xl font-semibold text-gray-700">
                سراغ حرفه ای ها رفتیم
              </h4>
              <p className="text-base font-normal text-gray-500">
                به جرعت میتونم بگم سخت گیرترین شرایط جذب مدرس داریم چون برامون
                مهمه محتوا خیلی ساده و روان بیان بشه که توی یادگیری به مشکل
                نخورید.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
