/* eslint-disable react/prop-types */

import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

export default function LandingFreeCoursesBtn({ title, icon }) {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
    });

    return () => Aos.refresh();
  }, []);

  return (
    <button
      className="p-2 flex items-center gap-2 text-gray-500 relative rounded-full before:content-[''] before:absolute before:bottom-0 before:right-0 before:bg-emerald-500 before:w-full before:h-full before:translate-y-full hover:before:translate-y-0 before:transition-all before:-z-10 hover:text-white transition-all overflow-hidden"
      data-aos="flip-right"
    >
      <span className="p-2 rounded-full bg-emerald-500">{icon}</span> {title}
    </button>
  );
}
