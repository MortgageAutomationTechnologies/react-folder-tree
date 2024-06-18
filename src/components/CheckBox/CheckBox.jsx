import React, {
  useLayoutEffect,
  useRef,
} from 'react';
import PropTypes from 'prop-types';

const CheckBox = ({ status, onChange, isDisabled = false }) => {
  const isChecked = status === 1;
  const isHalfChecked = status === 0.5;

  const checkboxRef = useRef(null);

  useLayoutEffect(() => {
    const checkboxDOM = checkboxRef?.current;
    checkboxDOM && (checkboxDOM.indeterminate = isHalfChecked);
  });

  return (
    <div className='CheckBox'>
      <input
        className='checkboxDOM'
        type='checkbox'
        checked={ isChecked }
        onChange={ onChange }
        ref={ checkboxRef }
        disabled={ isDisabled }
      />
    </div>
  );
};

CheckBox.propTypes = {
  status: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool,
};

export default CheckBox;
