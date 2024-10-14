/* eslint-disable react/prop-types */
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

export default function LandingContentSub({ text }) {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
    });

    return () => Aos.refresh();
  }, []);

  return (
    <p
      className="text-xl font-semibold leading-relaxed text-gray-700"
      data-aos="fade-up"
    >
      {text}
    </p>
  );
}
