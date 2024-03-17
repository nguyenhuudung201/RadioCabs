import React from "react";
import HeaderCom from "../Header/HeaderCom";
import AboutEl from "../About-el/AboutEl";
import InfoBox from "../Infobox/InfoBox";

const Services = () => {
  return (
    <>
      <section className="container-full relative">
        <HeaderCom
          h2="Services"
          p="Bridge for industrial and corporate development"
        />
      </section>
      <AboutEl h1="About Service" h4="The best relationship building." />
      <section className="container-full bg-services">
        <div className="text-center p-10">
          <div>
            <h1>What we provide</h1>
          </div>
          <div>
            <h4>For the perfect solutions</h4>
          </div>
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="flex gap-4">
            <InfoBox />
            <InfoBox />
            <InfoBox />
          </div>
          <div className="flex gap-4 pt-3">
            <InfoBox />
            <InfoBox />
            <InfoBox />
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
