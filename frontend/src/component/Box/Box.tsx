import React from "react";
import Button from "../Button/Button";
import { DriverProfile } from "../../model/DriverProfile";
import { BackendUrlImage } from "../../api/backend-url";
import { Link } from "react-router-dom";

const Box = ({ id, name, image, description, url }: DriverProfile) => {
  return (
    <div className="w-full shadow-[0_3px_10px_rgb(0,0,0,0.2)] h-full p-5  ">
      <div className="flex items-center justify-center">
        <img src={`${BackendUrlImage}${image}`} alt="" className="w-[50%]" />
      </div>
      <div className="py-3 text-4xl font-bold">
        <h4>{name}</h4>
      </div>
      <div>
        <p className="font-light">{description.slice(0, 20)}</p>
      </div>
      <div className="pt-3">
        <Link to={`/${url}/detail/${id}`}>Detail</Link>
      </div>
    </div>
  );
};

export default Box;
