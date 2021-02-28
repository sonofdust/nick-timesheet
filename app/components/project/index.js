import React, { memo } from 'react';
import PropTypes from 'prop-types';
// import ItemSelect from "../Common/itemSelect";
import { v4 } from 'uuid';
// import Table from 'react-bootstrap/Table';
import { AppData } from './clientTestData';

// const dayOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

const timeRow = (p1, p2, p3, p4, p5) => (
  <div className="row" key={v4}>
    <div className="box box-border-next box-border-left flex-1">
      <span>{p1}</span>
    </div>
    <div className="box box-border-next flex-1">
      <span>{p2}</span>
    </div>
    <div className="box box-border-next flex-3">
      <span>{p3}</span>
    </div>
    <div className="box box-border-next flex-3">
      <span>{p4}</span>
    </div>
    <div className="box box-border-next flex-3">
      <span>{p5}</span>
    </div>
  </div>
);

function Project({ items }) {
  const o = AppData;
  return (
    <div className="container">
      <div className="row">
        <div className="box header-blue box-border-next border-top box-border-left flex-1">
          <span>Job</span>
        </div>
        <div className="box header-blue box-border-next border-top flex-1">
          <span>Task</span>
        </div>
        <div className="box header-blue box-border-next border-top flex-3">
          <span>Project/Client.</span>
        </div>
        <div className="box header-blue box-border-next border-top flex-3">
          <span>Proj Manager/Const Eng.</span>
        </div>
        <div className="box header-blue box-border-next border-top flex-3">
          <span>Billing/AP Contracts</span>
        </div>
      </div>

      {o.taskDetails.map((e, i) => [
        timeRow(
          e.jobName,
          e.taskName,
          e.project.name,
          e.project.projectMgr,
          e.project.billing,
        ),
        timeRow('', '', e.client.name, e.project.costEng, e.project.apContacts),
      ])}
    </div>
  );
}

Project.propTypes = {
  items: PropTypes.object,
};
export default memo(Project);
