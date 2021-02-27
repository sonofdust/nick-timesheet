import './comments.css';
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import { AppData } from './clientTestData';

function Comments({ items }) {
  return (
    <div className="container">
      <div className="row">
        <div className="box header-blue box-border-next border-top box-border-left flex-1">
          <span>JOB</span>
        </div>
        <div className="box header-blue box-border-next flex-1">
          <span>TASK</span>
        </div>
        <div className="box header-blue box-border-next border-top flex-4">
          <span>COMMENT</span>
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
            <textarea cols='51'>{e.comments}</textarea>
          </div>
        </div>
      ))}
    </div>
  );
}

Comments.propTypes = {
  items: PropTypes.object,
};
export default memo(Comments);
