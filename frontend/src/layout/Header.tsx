import React, { useState } from "react";

import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Logo from "../assect/image/Logo_careera.png";
const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <header className="bg-white md:py-5 ">
      <nav className=" flex justify-between  items-center w-[92%]  mx-auto">
        <div>
          <img src={Logo} alt="" />
        </div>
        <div
          className={`nav-links md:static absolute bg-white md:min-h-fit  left-0 ${
            toggle ? "top-[-100%]" : "top-[20%]"
          }  md:auto w-full flex items-center md:pl-10 px-5 z-10`}
        >
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4VW] gap-6">
            <li>
              <Link to={"/"} className="  font-medium  ">
                Home
              </Link>
            </li>
            <li>
              <a className="  font-medium  ">About Us</a>
            </li>
            <li>
              <Link to={`services`} className="  font-medium  ">
                Services
              </Link>
            </li>
            <li>
              <Link to={`contact`} className=" font-medium   ">
                Contact Us
              </Link>
            </li>
            <li
              onMouseEnter={() => setToggle(true)}
              onMouseLeave={() => setToggle(false)}
              className="relative  "
            >
              <a className="flex justify-between font-medium   items-center gap-2   ">
                Listing <FaAngleDown />
              </a>
              {
                <div
                  className={`${
                    !toggle && "opacity-0"
                  } transition duration-700 ease-in-out absolute bg-gray-100 right-0 rounded-md py-2`}
                >
                  <ul className="space-y-2">
                    <li>
                      <Link to={`companies`} className="flex p-2 font-medium  ">
                        Companies
                      </Link>
                    </li>
                    <li>
                      <a className="flex p-2 font-medium  " href="">
                        Drives
                      </a>
                    </li>
                  </ul>
                </div>
              }
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-6">
          <button className="bg-[#71b131]   hover:bg-[#90c754] xl:block w-32 py-2 px-5 ">
            <Link className="text-white hover:text-white " to={`/signin`}>
              Sign In
            </Link>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
