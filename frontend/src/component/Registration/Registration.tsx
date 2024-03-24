import { useEffect, useState } from "react";
import Button from "../Button/Button";
import CompanyRegisterForm from "../Forms/company-register-form";
import DriverRegisterForm from "../Forms/driver-register-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AdvertiseCreateForm from "../Forms/advertise-create-form";
const Registration = () => {
  const { userInfo } = useSelector((state: any) => state.auth);
  const naviagte = useNavigate();
  useEffect(() => {
    if (userInfo) {
      naviagte("/profile");
    }
  }, [naviagte, userInfo]);
  const [status, setStatus] = useState<string | null>(null);

  // const [searchParams, setSearchParams] = useSearchParams();

  // const handleClickLevel = (param: string) => {
  //   searchParams.set("level", param);
  //   setSearchParams(searchParams);

  // };

  // const handleClickSalaryRange = (param: string) => {
  //   searchParams.set("salary_range", param);
  //   setSearchParams(searchParams);
  // };

  let markup: any;

  if (!status) {
    markup = (
      <div className="h-screen flex items-center justify-center">
        <div className="flex gap-x-6">
          <Button name="Company" onClick={() => setStatus("company")}></Button>
          <Button name="Driver" onClick={() => setStatus("driver")}></Button>
          <Button name="Advertise" onClick={() => setStatus("Advertise")}></Button>
        </div>
      </div>
    );
  } else if (status === "company") {
    markup = <CompanyRegisterForm />;
  } else if (status === "driver") {
    markup = <DriverRegisterForm />;
  } else if (status==="Advertise"){
    markup= <AdvertiseCreateForm/>
  }

  return markup;
};

export default Registration;
