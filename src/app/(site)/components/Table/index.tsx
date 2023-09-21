import React from "react";

const index = ({ changeState }: any) => {
  const datas = [
    {
      Accept: [
        {
          Course_C: "30204-2001",
          Course_N: "พื้นฐานธุรกิจ",
          NCourse_C: "GE_104",
          NCourse_N: "ธุรกิจออนไลน์",
        },
        {
          Course_C: "30204-2002",
          Course_N: "พื้นฐานธุรกิจ",
          NCourse_C: "GE_105",
          NCourse_N: "อะไรวะ",
        },
      ],
      Repeat: [
        {
          Course_C: "30204-2006",
          Course_N: "การสร้างแบรนด์",
          RCourse_C: "30204-2001",
          RCourse_N: "พื้นฐานธุรกิจ",
        },
      ],
    },
  ];

  return (
    <div className="container mx-auto my-20">
      {changeState && (
        <table className="bg-green-700 text-white w-full text-left">
          <tbody>
            <tr>
              <th className="p-5">รหัสวิชา-ชื่อวิชา</th>
              <th className="p-5 text-center">หน่วยกิต</th>
              <th className="p-5">
                {" "}
                รหัสวิชา-ชื่อวิชา (วิชาที่เทียบหน่วยกิตได้)
              </th>
              <th className="p-5 text-center">หน่วยกิต</th>
            </tr>
            {datas[0].Accept.map((data, k) => (
              <tr
                className="border-b border-gray-500 bg-white text-black"
                key={k}
              >
                <td className="p-5">
                  {data?.Course_C} {data?.Course_N}
                </td>
                <td className="p-5 text-center">3</td>
                <td className="p-5">
                  {data?.NCourse_C} {data?.NCourse_N}
                </td>
                <td className="p-5 text-center">3</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default index;
