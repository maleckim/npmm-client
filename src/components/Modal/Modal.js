import React from 'react';
import PropTypes from 'prop-types';

export default function Modal(props) {
  return (
    <div className="modal">
      <button type="button" onClick={props.handleExit()}>
        x
      </button>
      {props.title && <h3>{props.title}</h3>}
      <p>{props.message}</p>
      <button type="button" onClick={props.clickHandler}>
        {props.buttonText}
      </button>
    </div>
  );
}

Modal.defaultProps = {
  title: '',
  handleExit: () => {},
};

Modal.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
  handleExit: PropTypes.func,
};
