/* eslint-disable react/prop-types */
export default function SearchInput({ onChange, query }) {
  return (
    <input
      type="text"
      placeholder="چیو میخوای یاد بگیری؟"
      className="p-1 bg-transparent border-none outline-none"
      onChange={onChange}
      value={query}
    />
  );
}
