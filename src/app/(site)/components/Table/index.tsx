import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/react";
const index = ({ changeState }: any) => {
  const columns = [
    {
      key: "Course_N",
      label: "รหัสวิชา-ชื่อวิชา",
    },
    {
      key: "countUnit",
      label: "หน่วยกิต",
    },
    {
      key: "NCourse_N",
      label: "รหัสวิชา-ชื่อวิชา (วิชาที่เทียบหน่วยกิตได้)",
    },
    {
      key: "countUnit",
      label: "หน่วยกิต",
    },
  ];

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
        <Table aria-label="Example table with dynamic content">
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn key={column.key} className="bg-green-700 p-5">
                {column.label}
              </TableColumn>
            )}
          </TableHeader>
          <TableBody emptyContent={"ไม่มีข้อมูล"}>
            {datas[0]?.Accept.map((v, k) => {
              return (
                <TableRow key={k}>
                  <TableCell className="p-5">
                    {v.Course_C} {v.Course_N}
                  </TableCell>
                  <TableCell className="p-5">3</TableCell>
                  <TableCell className="p-5">
                    {v.NCourse_C} {v.NCourse_N}
                  </TableCell>
                  <TableCell className="p-5">3</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      )}
    </div>
  );
};

// {changeState && (
//   <table className="bg-green-700 text-white w-full text-left">
//     <tbody>
//       <tr>
//         <th className="p-5">รหัสวิชา-ชื่อวิชา</th>
//         <th className="p-5 text-center">หน่วยกิต</th>
//         <th className="p-5">
//           {" "}
//           รหัสวิชา-ชื่อวิชา (วิชาที่เทียบหน่วยกิตได้)
//         </th>
//         <th className="p-5 text-center">หน่วยกิต</th>
//       </tr>
//       {datas[0].Accept.map((data, k) => (
//         <tr
//           className="border-b border-gray-500 bg-white text-black"
//           key={k}
//         >
//           <td className="p-5">
//             {data?.Course_C} {data?.Course_N}
//           </td>
//           <td className="p-5 text-center">3</td>
//           <td className="p-5">
//             {data?.NCourse_C} {data?.NCourse_N}
//           </td>
//           <td className="p-5 text-center">3</td>
//         </tr>
//       ))}
//     </tbody>
//   </table>
// )}
export default index;
