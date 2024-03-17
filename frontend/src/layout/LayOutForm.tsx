import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const LayOutForm = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default LayOutForm;
