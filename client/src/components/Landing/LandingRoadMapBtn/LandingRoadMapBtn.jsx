/* eslint-disable react/prop-types */

import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

export default function LandingRoadMapBtn({ title }) {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
    });

    return () => Aos.refresh();
  }, []);

  return (
    <button
      className="text-base font-normal p-4 rounded-full bg-sky-500 text-white hover:bg-sky-600 transition"
      data-aos="flip-left"
    >
      {title}
    </button>
  );
}
