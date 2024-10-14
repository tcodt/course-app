/* eslint-disable react/prop-types */
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function LandingContentTitle({ title }) {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
    });

    return () => Aos.refresh();
  }, []);

  return (
    <h1
      className="text-4xl lg:text-5xl font-extrabold leading-normal text-black"
      data-aos="zoom-in"
    >
      {title}
    </h1>
  );
}
