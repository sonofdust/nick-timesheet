import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import { AppData } from '../../clientTestData';
import Select from '../select';
// import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import Modal from '../modalfcoqpms';
function FcoQpms({ items }) {
  return (
    <div className="container">
      <div className="row">
        <div className="box header-blue box-border-next border-top box-border-left flex-1 center">
          <span>Edit</span>
        </div>
        <div className="box header-blue box-border-next border-top flex-1 center">
          <span>JOB</span>
        </div>
        <div className="box header-blue box-border-next border-top flex-1 center">
          <span>TASK</span>
        </div>
        <div className="box header-blue box-border-next border-top flex-2 center">
          <span>FCO Number</span>
        </div>
        <div className="box header-blue box-border-next border-top flex-2 center">
          <span>QPMS Code</span>
        </div>
        <div className="box header-blue box-border-next border-top flex-2 center">
          <span>Work Site</span>
        </div>
      </div>
      {AppData.taskDetails.map((e, i) => (
        <div className="row" key={v4}>
          <div className="box box-border-next box-border-left flex-1">
            <Modal idx={i} />
          </div>
          <div className="box box-border-next flex-1">{e.jobName}</div>
          <div className="box box-border-next flex-1">{e.taskName}</div>
          <div className="box box-border-next flex-2">
            <span>{e.fcoNum}</span>
          </div>
          <div className="box box-border-next flex-2">
            <span>{e.qpmsCode}</span>
          </div>
          <div className="box box-border-next flex-2">
            <span>{e.workSite}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

FcoQpms.propTypes = {
  //  items: PropTypes.array,
};
export default memo(FcoQpms);
