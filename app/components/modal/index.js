import React, { memo, useState } from 'react';
import Modal from 'react-modal';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import { Overlay } from 'react-bootstrap';
import { AppData } from '../../clientTestData';

// Modal.setAppElement('#root');
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    // backgroundColor: 'grey',
  },
};

export default function index(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div>
      <FaEdit onClick={() => setModalIsOpen(true)} />
      <Modal isOpen={modalIsOpen} onRequestClose={false} style={customStyles}>
        <div className="container">
          <div className="row">
            <div className="box header-blue box-border-next border-top box-border-left flex-1 center">
              <span>JOB</span>
            </div>
            <div className="box header-blue box-border-next border-top flex-1 center">
              <span>TASK</span>
            </div>
            <div className="box header-blue box-border-next border-top flex-4 center">
              <span>COMMENT</span>
            </div>
          </div>
          <div className="row">
            <div className="box box-border-next box-border-left flex-1">
              <span> {AppData.taskDetails[props.idx].jobName}</span>
            </div>
            <div className="box box-border-next box-border-left flex-1">
              <span> {AppData.taskDetails[props.idx].taskName}</span>
            </div>
            <div className="box box-border-next box-border-left flex-4">
              <textarea cols="70">{AppData.taskDetails[props.idx].comments}</textarea>
            </div>
          </div>
        </div>

        <button onClick={() => setModalIsOpen(false)}>Submit</button>
      </Modal>
    </div>
  );
}
