import { Link } from "react-router-dom";
import Logo from "../../assect/image/Logo_careera.png";
import { useState } from "react";
import axios from "axios";
import { BackendUrl } from "../../api/backend-url";
export default function CompanyRegisterForm() {
  const [inputData, setInputData] = useState({
    companyName: "",
    companyEmail: "",
    companyPassword: "",
    companyPhone: "",
    designation: "",
    companyTelephone: "",
    address: "",
    contactPerson: "",
    fax: "",
    memberId: "",
    roleId: 1,
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    axios
      .post(`${BackendUrl}/auth/register/company`, inputData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        alert("success");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8  ">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
        <img className="mx-auto h-10 w-auto" src={Logo} alt="Your Company" />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Registration Company
        </h2>
      </div>
      <div className="w-full bg-white rounded-lg shadow dark:border p-5 mt-10 sm:mx-auto sm:w-full sm:max-w-sm ">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Company Name
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) =>
                  setInputData({ ...inputData, companyName: e.target.value })
                }
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="contactPerson"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Contact Person
            </label>
            <div className="mt-2">
              <input
                id="contactPerson"
                name="contactPerson"
                type="text"
                autoComplete="contactPerson"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) =>
                  setInputData({ ...inputData, contactPerson: e.target.value })
                }
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="designation"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Designation
            </label>
            <div className="mt-2">
              <input
                id="designation"
                name="designation"
                type="text"
                autoComplete="designation"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) =>
                  setInputData({ ...inputData, designation: e.target.value })
                }
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Address
            </label>
            <div className="mt-2">
              <input
                id="address"
                name="address"
                type="text"
                autoComplete="address"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) =>
                  setInputData({ ...inputData, address: e.target.value })
                }
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="mobile"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Mobile
            </label>
            <div className="mt-2">
              <input
                id="mobile"
                name="mobile"
                type="text"
                autoComplete="mobile"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) =>
                  setInputData({ ...inputData, companyPhone: e.target.value })
                }
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="telephone"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Telephone
            </label>
            <div className="mt-2">
              <input
                id="telephone"
                name="telephone"
                type="text"
                autoComplete="telephone"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) =>
                  setInputData({
                    ...inputData,
                    companyTelephone: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="fax"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Fax
            </label>
            <div className="mt-2">
              <input
                id="fax"
                name="fax"
                type="text"
                autoComplete="fax"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) =>
                  setInputData({ ...inputData, fax: e.target.value })
                }
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) =>
                  setInputData({ ...inputData, companyEmail: e.target.value })
                }
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="member"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Member
            </label>
            <div className="mt-2">
              <input
                id="member"
                name="member"
                type="text"
                autoComplete="member"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) =>
                  setInputData({ ...inputData, memberId: e.target.value })
                }
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) =>
                  setInputData({
                    ...inputData,
                    companyPassword: e.target.value,
                  })
                }
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-[#71b131] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#90c754] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Registration
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Have a account?
          <Link
            to={`/signin`}
            className="font-semibold leading-6 text-[#71b131] hover:text-[#90c754]"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
