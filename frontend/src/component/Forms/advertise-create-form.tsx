import axios from "axios";
import { useState } from "react";
import { BackendUrl } from "../../api/backend-url";
import Logo from "../../assect/image/Logo_careera.png";
import { Link } from "react-router-dom";
const AdvertiseCreateForm = () => {
  const [file, setFile] = useState<File | undefined>();
  const [inputData, setInputData] = useState({
    CompanyName: "",
    Email: "",
    Password: "",
    Mobile: "",
    Telephone: "",
    Address: "",
    Description: "",
    Fax: "",
    Designation: "",
  });
  const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement & {
      files: FileList;
    };
    setFile(target.files[0]);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (typeof file === "undefined") return;
    const formData = new FormData();
    formData.append("companyName", inputData.CompanyName);
    formData.append("description", inputData.Description);
    formData.append("image", file);
    formData.append("mobile", inputData.Password);
    formData.append("telephone", inputData.Telephone);
    formData.append("fax", inputData.Fax);
    formData.append("designation", inputData.Designation);
    formData.append("address", inputData.Address);
    formData.append("password", inputData.Password);
    formData.append("email", inputData.Email);
    axios
      .post(`${BackendUrl}/Advertise`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        alert("data added");
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
          Registration Advertise
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
                  setInputData({ ...inputData, CompanyName: e.target.value })
                }
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="Designation"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Designation
            </label>
            <div className="mt-2">
              <input
                id="Designation"
                name="Designation"
                type="text"
                autoComplete="Designation"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) =>
                  setInputData({ ...inputData, Designation: e.target.value })
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
                  setInputData({ ...inputData, Address: e.target.value })
                }
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="Mobile"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Mobile
            </label>
            <div className="mt-2">
              <input
                id="Mobile"
                name="Mobile"
                type="text"
                autoComplete="Mobile"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) =>
                  setInputData({ ...inputData, Mobile: e.target.value })
                }
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="Telephone"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Telephone
            </label>
            <div className="mt-2">
              <input
                id="Telephone"
                name="Telephone"
                type="text"
                autoComplete="Telephone"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) =>
                  setInputData({ ...inputData, Telephone: e.target.value })
                }
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="Fax"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Fax
            </label>
            <div className="mt-2">
              <input
                id="Fax"
                name="Fax"
                type="text"
                autoComplete="Fax"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) =>
                  setInputData({ ...inputData, Fax: e.target.value })
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
                  setInputData({ ...inputData, Email: e.target.value })
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
                  setInputData({ ...inputData, Description: e.target.value })
                }
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="image"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Image
            </label>
            <div className="mt-2">
              <input
                type="file"
                name="avatar"
                id="avatar"
                accept="image/jpg,image/png"
                placeholder="Avatar"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                required
                onChange={handleOnChange}
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
                  setInputData({ ...inputData, Password: e.target.value })
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
};

export default AdvertiseCreateForm;
