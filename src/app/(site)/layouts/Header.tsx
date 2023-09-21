"use client";
import React from "react";
import Image from "next/image";
import Logo from "../../../assets/images/logo_utcc.png";

const Header = ({ handleChange, changeState }: any) => {
  console.log(handleChange, "Headers");

  return (
    <div className="bg-white py-5">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <Image src={Logo} alt="Logo" />
          <div className="flex">
            <li
              className={`list-none mx-5 border-b-2 hover:text-lime-600 duration-150  max-md:text-sm cursor-pointer ${
                changeState ? "border-b-lime-600" : "border-none"
              }`}
              onClick={() => handleChange(true)}
            >
              เทียบโอนหลักสูตร
            </li>
            <li
              className={`list-none mx-5 border-b-2 hover:text-lime-600 duration-150 max-md:text-sm cursor-pointer ${
                !changeState ? "border-b-lime-600" : "border-none"
              }`}
              onClick={() => handleChange(false)}
            >
              ประวัติการเทียบโอน
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
