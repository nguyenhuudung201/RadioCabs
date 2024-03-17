import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import Silder from "../Slider/Silder";
import AboutEl from "../About-el/AboutEl";
import InfoBox from "../Infobox/InfoBox";
import AboutEl2 from "../About-el/AboutEl2";
import Populated from "../Populated/Populated";
import Job from "../../assect/image/job-hunting.jpg";
const Home = () => {
  return (
    <>
      <section className="relative ">
        <img src={Job} alt="" className="w-full " />
        <div className="over-lay absolute bottom-0 left-0 top-0 right-0 opacity-50"></div>
        <section className="absolute bottom-0 left-0 top-0 right-0 mx-auto  ">
          <div className="w-[50%] absolute top-20 p-10">
            <div className="pb-2">
              <h1 className="text-7xl text-white  font-bold">
                We understand your need better.
              </h1>
              <h4 className="text-white text-2xl   pt-2">
                Pharetra magnis facilisis praesent mi pretium placerat primis
              </h4>
            </div>
            <div>
              <button className=" flex items-center gap-2 bg-[#71b131] text-white  hover:bg-[#90c754]  py-2 px-5 ">
                Find Jobs <FaLongArrowAltRight />
              </button>
            </div>
          </div>
        </section>
      </section>
      <Populated />
      <AboutEl
        h1="About Company"
        h4=" Recruitment company work with effectiveness."
      />
      <section className="container-full relative my-[100px]">
        <Silder
          h1="Recruitment Solutions for all"
          p="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
          text="Learn More"
          slider="home-slider"
        />
        <section className="mx-3 right-0 left-0 flex   gap-4 absolute z-10 top-[380px]">
          <InfoBox />
          <InfoBox />
          <InfoBox />
        </section>
      </section>
      <AboutEl2 h1="Solutions" h4="Adding People Strategy in Every Company" />
    </>
  );
};

export default Home;
