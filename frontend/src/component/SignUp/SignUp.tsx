import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import CompanySigninFrom from "../Forms/company-signin-form";
import DriverSigninForm from "../Forms/driver-signin-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
const SignUp = () => {
  const { userInfo } = useSelector((state: any) => state.auth);
  const naviagte = useNavigate();
  useEffect(() => {
    if (userInfo) {
      naviagte("/profile");
    }
  }, [naviagte, userInfo]);
  const [status, setStatus] = useState<string | null>(null);
  let markup: any;
  if (!status) {
    markup = (
      <div className="h-screen flex items-center justify-center">
        <div className="flex gap-x-6">
          <Button name="Company" onClick={() => setStatus("company")}></Button>
          <Button name="Driver" onClick={() => setStatus("driver")}></Button>
        </div>
      </div>
    );
  } else if (status === "company") {
    markup = <CompanySigninFrom />;
  } else if (status === "driver") {
    markup = <DriverSigninForm />;
  }

  return markup;
};

export default SignUp;
