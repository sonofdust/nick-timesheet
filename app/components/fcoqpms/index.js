import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import { AppData } from './clientTestData';

function FcoQpms({ items }) {
  return (
    <div className="container">
      <div className="row">
        <div className="box header-blue box-border-next border-top box-border-left flex-1 center">
          <span>JOB</span>
        </div>
        <div className="box header-blue box-border-next flex-1 center">
          <span>TASK</span>
        </div>
        <div className="box header-blue box-border-next border-top flex-4 center">
          <span>FCO Number</span>
        </div>
        <div className="box header-blue box-border-next border-top flex-4 center">
          <span>QPMS Code</span>
        </div>
        <div className="box header-blue box-border-next border-top flex-4 center">
          <span>Work Site</span>
        </div>
      </div>
      {AppData.taskDetails.map(e => (
        <div className="row">
          <div className="box box-border-next box-border-left flex-1">
            <span>{e.jobName}</span>
          </div>
          <div className="box box-border-next flex-1">
            <span> {e.taskName}</span>
          </div>
          <div className="box box-border-next flex-4">
            <select name="cars" id="cars">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>{' '}
          </div>
          <div className="box box-border-next flex-4">
            <select name="cars" id="cars">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>{' '}
          </div>
          <div className="box box-border-next flex-4">
            <select name="cars" id="cars">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>{' '}
          </div>
        </div>
      ))}
    </div>
  );
}

FcoQpms.propTypes = {
  items: PropTypes.object,
};
export default memo(FcoQpms);
