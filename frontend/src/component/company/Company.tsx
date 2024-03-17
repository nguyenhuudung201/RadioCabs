import React from "react";
import HeaderCom from "../Header/HeaderCom";
import { CiSearch } from "react-icons/ci";
import Box from "../Box/Box";

const Company = () => {
  return (
    <>
      <section className="container-full relative">
        <HeaderCom h2="Companies" p="Discover more than just a workplace" />
      </section>
      <section className="py-[50px] text-center">
        <h4 className=" text-4xl font-bold">Search for a company</h4>
        <form action="" className="pt-5 w-[840px] flex   mx-auto">
          <div className="flex items-center relative w-1/2">
            <input
              className="block w-full p-[20px] bg-[#e8eae9] "
              type="text "
              placeholder="Find the answer"
            />
            <CiSearch className="absolute right-2 text-2xl text-[#002559]" />
          </div>
          <div className="w-1/2">
            <input
              className="block w-full p-[20px] bg-[#e8eae9] "
              type="text "
              placeholder="Find the answer"
            />
          </div>
        </form>
      </section>
      <section className="text-center container mb-[50px] mx-auto ">
        <h4 className=" text-4xl font-bold mb-[30px]">Popular Company</h4>
        <div className="flex gap-4 ">
          <div className="w-1/3 ">
            <Box />
          </div>
          <div className="w-1/3 ">
            <Box />
          </div>
          <div className="w-1/3 ">
            <Box />
          </div>
        </div>
      </section>
    </>
  );
};

export default Company;
