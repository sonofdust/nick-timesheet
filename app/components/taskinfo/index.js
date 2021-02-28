
import React, { memo } from 'react';
import PropTypes from 'prop-types';
// import ItemSelect from "../Common/itemSelect";
import { v4 } from 'uuid';
// import Table from 'react-bootstrap/Table';
import { AppData } from './clientTestData';

const newRow = (p1, p2, p3, p4) => (
  <div className="row" key={v4}>
    <div className="box box-border-next box-border-left flex-2">
      <span>{p1}</span>
    </div>
    <div className="box box-border-next flex-2">
      <span>{p2}</span>
    </div>
    <div className="box box-border-next flex-2">
      <span>{p3}</span>
    </div>
    <div className="box box-border-next flex-2">
      <span>{p4}</span>
    </div>
  </div>
);

function TaskInfo({ items }) {
  const o = AppData;
  return (
    <div className="container">
      <div className="row">
        <div className="box header-blue box-border-next border-top box-border-left flex-2">
          <span>JOB</span>
        </div>
        <div className="box header-blue box-border-next border-top flex-2">
          <span>Task</span>
        </div>
        <div className="box header-blue box-border-next border-top flex-2">
          <span>Date Opened</span>
        </div>
        <div className="box header-blue box-border-next border-top flex-2">
          <span>Task/Area Description</span>
        </div>
      </div>

      {o.taskDetails.map((e, i) => [
        newRow(e.jobName, e.taskName, e.task.dateOpened, e.task.name),
        newRow('', '', '', e.task.description),
      ])}
    </div>
  );
}

TaskInfo.propTypes = {
  items: PropTypes.object,
};
export default memo(TaskInfo);
