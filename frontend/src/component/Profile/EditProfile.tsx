import React from "react";
import { useSelector } from "react-redux";
import DriverEditProfileForm from "../Forms/driver-edit-profile-form";
import CompanyEditProfileForm from "../Forms/company-edit-profile";
const EditProfile = () => {
  const { userInfo } = useSelector((state: any) => state.auth);

  let markup: any;
  if (userInfo.roleId === 1) {
    markup = <CompanyEditProfileForm />;
  } else if (userInfo.roleId === 2) {
    markup = <DriverEditProfileForm />;
  }
  return markup;
};

export default EditProfile;
