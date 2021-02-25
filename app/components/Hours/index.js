import React, { memo } from 'react';
import PropTypes from 'prop-types';
// import ItemSelect from "../Common/itemSelect";
import { v4 } from 'uuid';
import Table from 'react-bootstrap/Table';
// import { AppData } from 'clientTestData';

const DAY = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

const header = ['Job ID', 'Task ID', '', ...DAY];

const reg = e => (
  <tr key={v4}>
    <td align="left">{e.jobName}</td>
    <td align="left">{e.taskName}</td>
    <td align="left">REG</td>
    {e.time.reg.map(t => (
      <td align="left">{t}</td>
    ))}
  </tr>
);

function HoursTable({ items }) {
  return (
    <div>
      {/* <pre>{JSON.stringify(items)}</pre> */}
      <Table striped bordered hover>
        <thead>
          <tr key={v4}>
            {header.map(e => (
              <th align="left">{e}</th>
            ))}
          </tr>
        </thead>
        <tbody>{items.taskDetails.map(e => reg(e))}</tbody>
      </Table>
    </div>
  );
}

HoursTable.propTypes = {
  items: PropTypes.object,
};
export default memo(HoursTable);

// import React from "react";
// import { JobTaskList, AppData } from "../../AppData";
// //import ItemSelect from "../Common/itemSelect";
// import { v4 } from "uuid";

// const DAY = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

// const header = ["Job ID", "Task ID", "", ...DAY];

// const reg = (e) => (
//   <TableRow key={v4}>
//     <TableCell align="left">{e.jobName}</TableCell>
//     <TableCell align="left">{e.taskName}</TableCell>
//     <TableCell align="left">REG</TableCell>
//     {e.time.reg.map((t, i) => (
//       <TableCell align="left">{t}</TableCell>
//     ))}
//   </TableRow>
// );

// const ot = (e) => (
//   <TableRow key={v4}>
//     <TableCell align="left"></TableCell>
//     <TableCell align="left"></TableCell>
//     {<TableCell align="left">OT</TableCell>}
//     {e.time.ot.map((t, i) => (
//       <TableCell align="left">{t}</TableCell>
//     ))}
//   </TableRow>
// );

// export default function MyTable() {
//   return (
//     <div className="container">
//       {/* <pre>{JSON.stringify(AppData.taskDetails[0])}</pre> */}
//       <div className="container-row">
//         {/* <JobTasksComp /> */}
//         <TableContainer component={Paper}>
//           <Table aria-label="simple table">
//             <TableHead>
//               <TableRow>
//                 {header.map((e, i) => (
//                   <TableCell align="left">{e}</TableCell>
//                 ))}
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {AppData.taskDetails.map(
//                 (e) => (
//                   <TableRow key={v4}>
//                     <TableCell align="left">{e.jobName}</TableCell>
//                     <TableCell align="left">{e.taskName}</TableCell>
//                     <TableCell align="left">
//                       REG
//                       <br />
//                       OT
//                     </TableCell>
//                     {e.time.reg.map((t, i) => (
//                       <TableCell align="left">
//                         {t}
//                         <br />
//                         {e.time.ot[i]}
//                       </TableCell>
//                     ))}
//                   </TableRow>
//                 )
//               )}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </div>
//     </div>
//   );
// }
