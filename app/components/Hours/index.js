import React, { memo } from 'react';
import PropTypes from 'prop-types';
// import ItemSelect from "../Common/itemSelect";
import { v4 } from 'uuid';
// import Table from 'react-bootstrap/Table';
import { AppData } from '../../clientTestData';
// import edit from "@material-ui/icons/Home"
// import ThreeDRotation from '@material-ui/core';

const dayOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

const timeRow = (jobName, taskName, time) => (
  <div className="row" key={v4}>
    <div className="box box-border-next box-border-left flex-4">
      <label>
        <i class="fas fa-edit">xx</i>
        {jobName} {taskName}
      </label>
    </div>
    {time.map((e, i) => (
      <div
        className={`box ${
          i == 0 || i == 6 ? 'box-green' : ''
        } box-border-next flex-1 center`}
      >
        <span>{e / 100}</span>
      </div>
    ))}
    <div className="box box-border-next flex-1 center">
      <span>{time.reduce((x, y) => x + y) / 100}</span>
    </div>
  </div>
);

function HoursTable({ items }) {
  const o = AppData;
  return (
    <div className="container">
      <div className="row">
        <div className="box header-blue box-border-next border-top box-border-left flex-4 center">
          <h9>CLIENT TASK </h9>
        </div>

        {dayOfWeek.map((e, i) => (
          <div
            className={`box ${
              i == 0 || i == 6 ? 'header-green' : 'header-blue'
            } box-border-next border-top flex-1 center`}
          >
            <span>{e}</span>
          </div>
        ))}
        <div className="box header-blue box-border-next border-top flex-1 center">
          <span>Total</span>
        </div>
      </div>

      {o.taskDetails.map((e, i) => [
        timeRow(e.jobName, e.taskName, e.time.reg),
        timeRow('', '', e.time.ot),
      ])}
    </div>
  );
}

HoursTable.propTypes = {
  items: PropTypes.object,
};
export default memo(HoursTable);
