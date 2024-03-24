import React from "react";
import DriverProfileForm from "../Forms/driver-profile-form";
import CompanyProfileForm from "../Forms/company-profile-form";
import { useSelector } from "react-redux";

const CreateProfile = () => {
  const { userInfo } = useSelector((state: any) => state.auth);

  let markup: any;
  if (userInfo.roleId === 1) {
    markup = <CompanyProfileForm />;
  } else if (userInfo.roleId === 2) {
    markup = <DriverProfileForm />;
  }
  return markup;
};

export default CreateProfile;
