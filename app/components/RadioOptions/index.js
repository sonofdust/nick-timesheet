import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import { v4 } from 'uuid';
// import {RadioOptions} from 'react-bootstrap';

function RadioOptions(props) {
  const [setValue] = React.useState('Hours');

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
    <div className="container padd">
      <div className="row">
        {items.map((e, i) => (
          <div
            className="box header-green box-border-next border-top box-border-left flex-1 center"
            key={e}
          >
            <input
              // className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id={items[i].replace(/[^a-zA-Z]/g, '').toUpperCase()}
              value={`option${i}`}
              onClick={e => {
                props.screen(e.target.id);
                setValue(e.target.id);
              }}
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
    </div>
  );
}

RadioOptions.propTypes = {
  //  onClick: PropTypes.func,
};
export default memo(RadioOptions);
