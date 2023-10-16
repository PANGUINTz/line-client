"use client";
import React, { useState } from "react";
import Image from "next/image";
import HeroImage from "../../../../assets/images/hero_image.png";

const index = ({ changeState }: any) => {
  const [formData, setFormData] = useState("");
  console.log(formData);

  return (
    <div className="relative">
      <Image
        src={HeroImage}
        alt="hero"
        className="w-screen max-md:object-fill"
        style={{ height: "480px" }}
      />
      {changeState ? (
        <div>
          <p className="absolute text-white font-extralight tracking-widest spacing border-b border-white top-1/2 translate-x-1/2 translate-y-1/2 right-1/2 text-4xl duration-200 max-md:text-2xl max-[500px]:text-xl ">
            เทียบโอนหลักสูตร
          </p>
          <div className="bg-white absolute z-10 p-3 xl:w-1/3 shadow-2xl bottom-0 right-1/2 translate-x-1/2 translate-y-1/2 shadow-gray-600 max-xl:w-11/12 duration-200 max-[500px]:my-5 max-md:text-sm ">
            <div>
              <p className="font-light ">
                กรุณากรอกรหัสวิชาสำหรับตรวจสอบการเทียบโอน
              </p>
            </div>

            <div className="flex">
              <input
                type="text"
                className="w-full my-2 mr-3 p-2 rounded border border-gray-400 "
                placeholder="ตัวอย่างการกรอกรหัสวิชา 30000-1200 , 30000-1201"
                onChange={(e) => setFormData(e.target.value)}
              />
              <button className="bg-green-500 py-2 px-5 text-white hover:bg-green-900 duration-300 rounded-lg h-fit mt-2">
                ยืนยัน
              </button>
            </div>
            <p className="text-red-500">กรุณากรอกรหัสวิชาให้ครบถ้วน</p>
          </div>
        </div>
      ) : (
        <p className="absolute text-white font-extralight tracking-widest spacing border-b border-white top-1/2 translate-x-1/2 translate-y-1/2 right-1/2 text-4xl duration-200 max-md:text-2xl max-[500px]:text-xl ">
          ประวัติการเทียบโอน
        </p>
      )}
    </div>
  );
};

export default index;
