import React from "react";
import Button from "../Button/Button";
import Work from "../../assect/image/work_2.png";
type Props = {
  h1: string;
  h4: string;
};
const AboutEl2 = ({ h1, h4 }: Props) => {
  return (
    <section className="container mx-auto py-[100px]">
      <div className="flex justify-between   items-center  ">
        <div className="w-1/2">
          <img src={Work} alt="" className="w-full" />
        </div>
        <div className="p-10 w-1/2">
          <div>
            <h1 className="text-2xl py-2">{h1}</h1>
          </div>
          <div>
            <h4 className="  text-5xl py-2 font-semibold ">{h4}</h4>
          </div>
          <div className="py-2 ">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
          <div>
            <Button name={"Find open positions"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutEl2;
