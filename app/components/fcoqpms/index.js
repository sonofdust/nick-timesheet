import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import { AppData } from '../../clientTestData';
import Select from '../select';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';

function FcoQpms({ items }) {
  return (
    <div className="container">
      <div className="row">
        <div className="box header-blue box-border-next border-top box-border-left flex-4 center">
          <span>JOB</span>
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
      {AppData.taskDetails.map(e => (
        <div className="row" key={v4}>
          <div className="box box-border-next box-border-left flex-4">
            <div className="btnBorder">
              <FaEdit />
            </div>
            <div className="btnBorder">{e.jobName}</div>
            <div className="btnBorder">{e.taskName}</div>
          </div>
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
