import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import { v4 } from 'uuid';
// import {RadioOptions} from 'react-bootstrap';

function RadioOptions() {
  const items = [
    'Hours',
    'FCO/QPMS',
    'Client Data',
    'Comments',
    'T/S Corr',
    'Project',
    'Task Info',
  ];
  return (
    <div
      className="btn-group border border-dark"
      role="group"
      aria-label="Basic example"
    >
      {items.map((e, i) => (
        <div className="form-check form-check-inline" key={e}>
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id={`inlineRadio${i}`}
            value={`option${i}`}
            // onClick={() => alert(`inlineRadio${i}`)}
          />
          <label className="form-check-label" htmlFor={`inlineRadio${i}`}>
            {e}
          </label>
        </div>
      ))}
    </div>
  );
}

RadioOptions.propTypes = {
  // items: PropTypes.array,
  // onClick: PropTypes.func,
};
export default memo(RadioOptions);
