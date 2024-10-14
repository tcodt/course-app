import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function Logo({ src, alt, className }) {
  return (
    <Link to="/">
      <img src={src} alt={alt} className={className} />
    </Link>
  );
}
