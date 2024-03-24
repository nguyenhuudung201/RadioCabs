import { Link } from "react-router-dom";
import Logo from "../../assect/image/Logo_careera.png";
import axios from "axios";
import { useState } from "react";
import { BackendUrl } from "../../api/backend-url";
export default function DriverRegisterForm() {
  const [inputData, setInputData] = useState({
    driverName: "",
    email: "",
    password: "",
    mobile: "",
    city: "",
    telephone: "",
    address: "",
    contactPerson: "",
    description: "",
    experience: "",
    roleId: 2,
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(inputData);
    axios
      .post(`${BackendUrl}/auth/register/driver`, inputData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        alert(res.data);
      })
      .catch((err) => {
        alert(err.response.data);
      });
  };
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8  ">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
        <img className="mx-auto h-10 w-auto" src={Logo} alt="Your Company" />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Registration Driver
        </h2>
      </div>
      <div className="w-full bg-white rounded-lg shadow dark:border p-5 mt-10 sm:mx-auto sm:w-full sm:max-w-sm ">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Name
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
                  setInputData({ ...inputData, driverName: e.target.value })
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
              htmlFor="city"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              City
            </label>
            <div className="mt-2">
              <input
                id="city"
                name="city"
                type="text"
                autoComplete="city"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) =>
                  setInputData({ ...inputData, city: e.target.value })
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
                  setInputData({ ...inputData, mobile: e.target.value })
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
                  setInputData({ ...inputData, telephone: e.target.value })
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
                  setInputData({ ...inputData, email: e.target.value })
                }
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Description
            </label>
            <div className="mt-2">
              <input
                id="description"
                name="description"
                type="text"
                autoComplete="description"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) =>
                  setInputData({ ...inputData, description: e.target.value })
                }
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="experience"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Experience
            </label>
            <div className="mt-2">
              <input
                id="experience"
                name="experience"
                type="number"
                autoComplete="experience"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) =>
                  setInputData({ ...inputData, experience: e.target.value })
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
                  setInputData({ ...inputData, password: e.target.value })
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
