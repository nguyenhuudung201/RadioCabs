import React, { useState } from "react";
import Button from "../Button/Button";
import CompanySigninFrom from "../Forms/company-signin-form";
import DriverSigninForm from "../Forms/driver-signin-form";

const SignUp = () => {
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
