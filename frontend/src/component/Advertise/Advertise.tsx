import axios from "axios";
import React, { useEffect, useState } from "react";
import { BackendUrl } from "../../api/backend-url";
import { DriverProfile } from "../../model/DriverProfile";
import Box from "../Box/Box";
import { CiSearch } from "react-icons/ci";
import HeaderCom from "../Header/HeaderCom";

const Advertise = () => {
  const [profiles, setProfiles] = useState<DriverProfile[]>();
  useEffect(() => {
    axios
      .get(`${BackendUrl}/Advertise`, {
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
        <HeaderCom h2="Advertises" p="Discover more than just a workplace" />
      </section>
      <section className="py-[50px] text-center">
        <h4 className=" text-4xl font-bold">Search for a advertises</h4>
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
        <h4 className=" text-4xl font-bold mb-[30px]">Popular Advertise</h4>
        <div className="grid grid-cols-4 gap-4">
          {profiles?.map((p, i) => (
            <Box
              key={i}
              name={p.name}
              image={p.image}
              id={p.id}
              description={p.description}
              url="advertise"
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Advertise;
