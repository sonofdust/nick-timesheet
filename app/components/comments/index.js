import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import { AppData } from '../../clientTestData';
// import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import Modal from '../modal';
function Comments({ items }) {
  // const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="container">
      <div className="row">
        <div className="box header-blue box-border-next border-top box-border-left flex-2 center">
          <span>JOB</span>
          <span>TASK</span>
        </div>
        <div className="box header-blue box-border-next border-top flex-4 center">
          <span>COMMENT</span>
        </div>
      </div>
      {AppData.taskDetails.map((e, i) => (
        <div className="row">
          <div className="box box-border-next box-border-left flex-2">
            <div className="btnBorder">
              <Modal idx={i} />
            </div>
            <span>{e.jobName}</span>
            <span> {e.taskName}</span>
          </div>
          <div className="box box-border-next flex-4">
            <p>{e.comments}</p>
          </div>
        </div>
      ))}
      {/* <Modal isOpen={false}>
        <h4>Nicholas D. Roman Modal</h4>
      </Modal> */}
    </div>
  );
}

Comments.propTypes = {
  // items: PropTypes.object,
};
export default memo(Comments);
