import React from "react";
import { FaHelmetSafety } from "react-icons/fa6";
import Button from "../Button/Button";
const InfoBox = () => {
  return (
    <div className="bg-white text-center px-4 py-10 border-solid shadow-[0_3px_10px_rgb(0,0,0,0.2)] h-full">
      <div className="flex justify-center text-[#71b131] text-3xl ">
        <FaHelmetSafety />
      </div>
      <div className="pt-2">
        <h4 className="text-3xl font-medium">Recruitment</h4>
      </div>
      <div className="pt-2">
        <p>
          Auctor massa finibus enim lacus quis et efficitur ullamcorper accumsan
          ornare egestas viverra
        </p>
      </div>
      <div className="pt-2">
        <Button name="Learn more" />
      </div>
    </div>
  );
};

export default InfoBox;
