import { FaInstagram, FaTelegramPlane } from "react-icons/fa";
import Logo from "../../components/Menu/Logo/Logo";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import { BiSolidBadgeCheck } from "react-icons/bi";

export default function Footer() {
  return (
    <footer className="bg-white py-8">
      <div className="container mx-auto">
        <div className="flex flex-col gap-12 p-4 pb-8">
          <div className="flex items-center justify-between">
            <Logo
              src="/images/tcod-logo-white.jpg"
              alt="Logo"
              className="h-20 object-contain rounded-full"
            />
            <div className="flex items-center gap-4">
              <a
                href="https://t.me/TCODT"
                className="p-3 bg-slate-200 text-gray-500 hover:bg-emerald-500 hover:text-white transition rounded-full"
              >
                <FaTelegramPlane size={25} />
              </a>
              <a
                href="https://www.instagram.com/amirkhanjani18"
                className="p-3 bg-slate-200 text-gray-500 hover:bg-emerald-500 hover:text-white transition rounded-full"
              >
                <FaInstagram size={25} />
              </a>
            </div>
          </div>
          <div className="flex items-center justify-between gap-8 md:flex-row flex-col">
            <div className="bg-emerald-50 p-4 rounded-xl">
              <h4 className="text-xl text-gray-800 mb-4 flex items-center gap-2">
                <BiSolidBadgeCheck size={25} className="text-emerald-500" />
                درباره تیکد
              </h4>
              <p className="text-base text-gray-600">
                شروع هرچیزی سخته، ولی وقتی مسیر درستی رو انتخاب کنی،با خیال راحت
                و بدون استرس میتونی از مسیر لذت ببری. ما در تیکد توی سفر به
                دنیای برنامه نویسی کنارت هستیم تا باهم رشد کنیم و از نتیجه زحمات
                مون لذت ببریم.
              </p>
            </div>
            <div className="flex items-center gap-6 md:flex-row flex-col">
              <a href="tel:09051061529" className="flex items-center gap-2">
                <BsTelephone size={20} className="text-gray-600 mb-2" />
                <span className="text-gray-500 farsi-num">09051061529</span>
              </a>
              <a
                href="mailto:amirprogrammer38@gmail.com"
                className="flex items-center gap-2"
              >
                <MdOutlineMailOutline
                  size={25}
                  className="text-gray-600 mb-2"
                />
                <span className="text-gray-500">
                  amirprogrammer38@gmail.com
                </span>
              </a>
              <a href="https://t.me/TCODT" className="flex items-center gap-2">
                <FaTelegramPlane size={20} className="text-gray-600 mb-2" />
                <span className="text-gray-500 farsi-num">TCODT</span>
              </a>
            </div>
          </div>
        </div>
        <hr />
        <div className="pt-8 text-center">
          <p className="text-base text-gray-500">
            کلیه حقوق مادی و معنوی سایت برای{" "}
            <span className="text-emerald-500">تیکد</span> محفوظ است.
          </p>
        </div>
      </div>
    </footer>
  );
}
