import { FaFacebookF } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
import Logo from "../assect/image/Logo_careera.png";
const Footer = () => {
  return (
    <>
      <section className="container-full relative">
        <div className="footer-slider"></div>
        <div className="over-lay absolute  bottom-0 left-0 top-0 right-0 opacity-50"></div>
        <div className="absolute text-center left-0 right-0 top-[30%]">
          <div>
            <h1 className="text-5xl  text-white  font-bold">
              The best relationship building
            </h1>
          </div>
          <div>
            <p className="text-white py-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
          <div>
            <button className=" bg-[#71b131] text-white  hover:bg-[#90c754]  py-2 px-5 ">
              Get Started
            </button>
          </div>
        </div>
      </section>
      <footer className="bg-white py-5 w-[92%]  mx-auto ">
        <nav className=" flex justify-between  items-center  ">
          <div>
            <img
              src={Logo}
              alt=""
            />
          </div>
          <div>
            <ul className="flex justify-between items-center gap-6">
              <li className="flex justify-between items-center gap-2">
                <FaCircle className="text-[2px]  text-[]" />
                <a className="text-xs" href="">
                  About Us
                </a>
              </li>
              <li className="flex justify-between items-center gap-2">
                <FaCircle className="text-[2px]  " />
                <a className="text-xs" href="">
                  Term of Use
                </a>
              </li>
              <li className="flex justify-between items-center gap-2">
                <FaCircle className="text-[2px]  " />
                <a className="text-xs" href="">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  className="text-xs flex justify-between items-center gap-2"
                  href=""
                >
                  <FaCircle className="text-[2px]  " />
                  Help Center
                </a>
              </li>
              <li>
                <a
                  className="text-xs flex justify-between items-center gap-2"
                  href=""
                >
                  <FaCircle className="text-[2px]  " />
                  Help Center
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex justify-between items-center gap-6">
              <li>
                <FaFacebookF className="i-con " />
              </li>
              <li>
                <FaFacebookF className="i-con " />
              </li>
              <li>
                <FaFacebookF className="i-con " />
              </li>
              <li>
                <FaFacebookF className="i-con " />
              </li>
            </ul>
          </div>
        </nav>
        <div className=" border-b-2 pt-5"></div>
        <div>
          <p className="text-center text-[15px]  text-[#002559] ">
            Copyright © 2021 careera, All rights reserved. Powered by
            MoxCreative.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
