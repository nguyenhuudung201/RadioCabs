import axios from "axios";
import { useState } from "react";
import { BackendUrl } from "../../api/backend-url";
import { useParams } from "react-router-dom";

const DriverEditProfileForm = () => {
  const { profileId } = useParams();
  const [file, setFile] = useState<File | undefined>();
  const [inputData, setInputData] = useState({
    DateOfBirth: "",
    SexId: "",
    MaritalId: "",
    About: "",
    Education: "",
    Skill: "",
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (typeof file === "undefined") return;
    const formData = new FormData();
    formData.append("dateOfBirth", inputData.DateOfBirth);
    formData.append("sexId", inputData.SexId);
    formData.append("maritalId", inputData.MaritalId);
    formData.append("about", inputData.About);
    formData.append("image", file);
    console.log(formData);
    console.log(profileId);
    axios
      .put(`${BackendUrl}/profileDriver/${profileId}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + sessionStorage.getItem("accessToken"),
        },
      })
      .then((res) => {
        alert("update success");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement & {
      files: FileList;
    };
    setFile(target.files[0]);
  };
  return (
    <>
      <h4 className="my-[50px] font-bold text-3xl">Edit profile online</h4>
      <form
        onSubmit={handleSubmit}
        className="w-full p-5 mx-auto shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
      >
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="file"
            name="avatar"
            id="avatar"
            accept="image/jpg,image/png"
            placeholder="Avatar"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            onChange={handleOnChange}
          />
          <label
            htmlFor="avatar"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Avatar
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <label
            htmlFor="About"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            About
          </label>
          <input
            id="About"
            type="text"
            required
            onChange={(e) =>
              setInputData({ ...inputData, About: e.target.value })
            }
            placeholder="About"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          ></input>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <label
              htmlFor="sexes"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Select an option
            </label>
            <select
              id="sexes"
              onChange={(e) =>
                setInputData({ ...inputData, SexId: e.target.value })
              }
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Choose a sex</option>
              <option value="1">Male</option>
              <option value="2">Female</option>
            </select>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <label
              htmlFor="Marital"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Select an option
            </label>
            <select
              id="Marital"
              onChange={(e) =>
                setInputData({ ...inputData, MaritalId: e.target.value })
              }
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Choose a Marital Status</option>
              <option value="1">Single</option>
              <option value="2">Married</option>
            </select>
          </div>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <label
            htmlFor="About"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Education
          </label>
          <input
            id="About"
            type="text"
            required
            onChange={(e) =>
              setInputData({ ...inputData, Education: e.target.value })
            }
            placeholder="Education"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          ></input>
          <div className="relative z-0 w-full mb-5 group">
            <label
              htmlFor="About"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Skill
            </label>
            <input
              id="Skill"
              type="text"
              required
              onChange={(e) =>
                setInputData({ ...inputData, Skill: e.target.value })
              }
              placeholder="Skill"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            ></input>
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="date"
              name="date"
              id="date"
              placeholder="DD/MM/YY"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              onChange={(e) =>
                setInputData({ ...inputData, DateOfBirth: e.target.value })
              }
            />
            <label
              htmlFor="date"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Date of birth
            </label>
          </div>
        </div>
        <button
          type="submit"
          className=" rounded-md bg-[#71b131] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#90c754] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Update
        </button>
      </form>
    </>
  );
};
export default DriverEditProfileForm;
