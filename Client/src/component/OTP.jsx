// OTPInput.jsx
import React, { useRef } from 'react';
import './OTP.css';

const OTP = ({ length = 6, onChange }) => {
  const inputs = Array.from({ length }, () => useRef());

  const handleChange = (index, value) => {
    onChange(index, value);
    if (value !== '' && index < length - 1) {
      inputs[index + 1].current.focus();
    }
  };

  const handleBackspace = (index, event) => {
    if (event.key === 'Backspace' && index > 0 && !event.target.value) {
      inputs[index - 1].current.focus();
    }
  };

  return (
    <div className="otp-container">
      {Array.from({ length }, (_, index) => (
        <input
          key={index}
          type="text"
          maxLength="1"
          ref={inputs[index]}
          className="otp-input"
          onChange={(e) => handleChange(index, e.target.value)}
          onKeyDown={(e) => handleBackspace(index, e)}
        />
      ))}
    </div>
  );
};

export default OTP;
