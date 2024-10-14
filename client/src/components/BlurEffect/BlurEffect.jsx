/* eslint-disable react/prop-types */
const BlurEffect = ({
  sideY = "top-0",
  sideX = "right-0",
  bgColor = "bg-green-500",
}) => {
  return (
    <div
      className={`content-[''] absolute ${sideY} ${sideX} w-[200px] h-[200px] ${bgColor} blur-[110px] opacity-50 -z-10`}
    ></div>
  );
};

export default BlurEffect;
