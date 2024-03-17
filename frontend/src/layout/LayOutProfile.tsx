import React from "react";
import Sidebar from "../component/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const LayOutProfile = () => {
  return (
    <section className="container-full flex  ">
      <div className="w-[20%]">
        <Sidebar />
      </div>
      <div className="w-[80%]">
        <Outlet />
      </div>
    </section>
  );
};

export default LayOutProfile;
