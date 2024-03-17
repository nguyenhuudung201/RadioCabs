import React from "react";
import Button from "../Button/Button";

const Box = () => {
  return (
    <div className="w-full shadow-[0_3px_10px_rgb(0,0,0,0.2)] h-full p-5  ">
      <div className="flex items-center justify-center">
        <img
          src="https://show.moxcreative.com/careera/wp-content/uploads/sites/22/2021/11/kanba-1536x427.png"
          alt=""
          className="w-[50%]"
        />
      </div>
      <div className="py-3 text-4xl font-bold">
        <h4>kanba Ltd</h4>
      </div>
      <div>
        <p className="font-light">
          Pellentesque convallis curae nisi platea accumsan sociosqu dui urna
          amet suscipit nascetur
        </p>
      </div>
      <div className="pt-3">
        <Button name="Apply" />
      </div>
    </div>
  );
};

export default Box;
