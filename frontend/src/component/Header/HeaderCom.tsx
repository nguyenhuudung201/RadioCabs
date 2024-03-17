import React from "react";
import "./HeaderCom.css";
type Props = {
  h2: string;
  p: string;
};
const HeaderCom = ({ h2, p }: Props) => {
  return (
    <section className="bg-img">
      <div className="absolute right-0 left-0 top-[50%] text-center">
        <h2 className="text-white text-7xl font-bold">{h2}</h2>
        <p className="text-white">{p}</p>
      </div>
    </section>
  );
};

export default HeaderCom;
