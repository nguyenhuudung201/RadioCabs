import React, { useEffect, useState } from "react";
import HeaderCom from "../Header/HeaderCom";
import { CiSearch } from "react-icons/ci";
import Box from "../Box/Box";
import axios from "axios";
import { BackendUrl } from "../../api/backend-url";
import { DriverProfile } from "../../model/DriverProfile";

const Company = () => {
  const [profiles, setProfiles] = useState<DriverProfile[]>();
  useEffect(() => {
    axios
      .get(`${BackendUrl}/ProfileCompany/all/companies`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => setProfiles(res.data))
      .catch((err) => console.error(err));
  }, []);
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
        <div className="grid grid-cols-4 gap-4">
          {profiles?.map((p, i) => (
            <Box
              key={i}
              name={p.name}
              image={p.image}
              id={p.id}
              description={p.description}
              url="company"
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Company;
