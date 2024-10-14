import Logo from "../Logo/Logo";
import MenuItems from "../MenuItems/MenuItems";
import SearchBox from "../SearchBox/SearchBox";
import ThemeBtn from "../ThemeBtn/ThemeBtn";
import AccountBtn from "../AcoountBtn/AccountBtn";
import { PiList } from "react-icons/pi";
import { GoSearch } from "react-icons/go";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

export default function MenuBox() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <header className="bg-white p-2 relative z-50" data-aos="fade-down">
      <nav className="flex items-center justify-between container mx-auto">
        <div className="block lg:hidden">
          <button className="p-3 bg-slate-100 rounded-full shadow-sm ">
            <PiList size={25} color="gray" />
          </button>
        </div>
        <ul className="flex items-center gap-8">
          <li>
            <Logo
              src="/images/tcod-logo-white.jpg"
              alt="Logo"
              className="h-20 object-contain rounded-full"
            />
          </li>
          <ul className="hidden lg:flex items-center gap-8">
            <MenuItems item="فرانت اند" />
            <MenuItems item="امنیت" />
            <MenuItems item="پایتون" />
            <MenuItems item="پی اچ پی" />
            <MenuItems item="ارتقای مهارت ها" />
            <MenuItems item="مقالات" />
          </ul>
        </ul>
        <div className="flex items-center gap-8">
          <div className="block xl:hidden">
            <button className="p-3 bg-slate-100 rounded-full shadow-sm">
              <GoSearch size={25} color="gray" />
            </button>
          </div>

          <div className="hidden xl:block">
            <SearchBox size={25} color="gray" />
          </div>

          <div className="hidden lg:block">
            <ThemeBtn size={25} color="gray" />
          </div>

          <AccountBtn size={25} color="gray" />
        </div>
      </nav>
    </header>
  );
}
