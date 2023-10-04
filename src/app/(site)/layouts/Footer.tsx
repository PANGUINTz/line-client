import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-700 p-5 text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-3 md:gap-28 lg:gap-36 max-md:gap-12 max-sm:grid-cols-1 max-md:text-center">
          <div>
            <h4>Quick Links</h4>
            <div className="grid grid-cols-2 max-md:grid-cols-3 gap-1 list-none my-2 font-light">
              <li>สมัครเรียน</li>
              <li>เกี่ยวกับคณะ</li>
              <li>หลักสูตร</li>

              <li>อบรมและบริการ</li>
              <li>ศิษย์เก่า</li>
              <li>ศิษย์ปัจจุบัน</li>
            </div>
          </div>
          <div>
            <h4>ติดต่อมหาวิทยาลัย</h4>
            <p className="my-2 font-light max-md:px-5">
              126/1 ซอยวิภาวดีรังสิต 2 แขวงรัชดาภิเษก เขตดินแดง กรุงเทพมหานคร
              10400
            </p>
          </div>
          <div>
            <div>
              <h4>โทร</h4>
              <p className="font-light">02-697-6505, 095-367-5505</p>
            </div>
            <div className="my-2">
              <h4>เวลาทำการ:</h4>
              <p className="font-light">8.30 - 17.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
