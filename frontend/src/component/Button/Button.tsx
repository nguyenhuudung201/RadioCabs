import React, { MouseEventHandler } from "react";
type Props = { name: string };
const Button = ({ name, onClick }: {name: string, onClick?: MouseEventHandler}) => {
  return (
    <button className="  bg-[#71b131] text-white  hover:bg-[#90c754]  py-2 px-5 " onClick={onClick}>
      {name}
    </button>
  );
};

export default Button;
