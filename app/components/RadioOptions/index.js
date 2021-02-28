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
      className="container row"
    >
      {items.map((e, i) => (
        <div
          className="box header-green box-border-next border-top box-border-left flex-1"
          key={e}
        >
          <input
            // className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id={`inlineRadio${i}`}
            value={`option${i}`}
            // onClick={() => alert(`inlineRadio${i}`)}
          />
          <label
            // className="form-check-label"
            htmlFor={`inlineRadio${i}`}
          >
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
