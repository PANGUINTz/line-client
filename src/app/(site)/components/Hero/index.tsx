import React from "react";
import Image from "next/image";
import HeroImage from "../../../../assets/images/hero_image.png";

const index = () => {
  return (
    <div className="relative">
      <Image
        src={HeroImage}
        alt="hero"
        className="w-screen"
        style={{ height: "480px" }}
      />
      <div className="bg-white absolute z-10 p-3 w-1/3 shadow-2xl bottom-0 right-1/2 translate-x-1/2 translate-y-1/2 shadow-gray-600 max-md:w-full">
        <div className="flex justify-between">
          <p className="font-light">
            กรุณากรอกรหัสวิชาสำหรับตรวจสอบการเทียบโอน
          </p>
          <p className="text-red-500">กรุณากรอกรหัสวิชาให้ครบถ้วน</p>
        </div>

        <div className="flex">
          <input
            type="text"
            className="w-full my-2 mr-3 p-2 rounded border border-gray-400 "
            placeholder="ตัวอย่างการกรอกรหัสวิชา 30000-1200 , 30000-1201"
          />
          <button className="bg-green-500 py-2 px-5 text-white hover:bg-green-900 duration-300 rounded-lg h-fit mt-2">
            ยืนยัน
          </button>
        </div>
      </div>
    </div>
  );
};

export default index;
