import React from "react";

const Button = ({ text, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={text}
      disabled={false}
      pressed={false}
    >
      {text}
    </button>
  );
};

export default Button;
