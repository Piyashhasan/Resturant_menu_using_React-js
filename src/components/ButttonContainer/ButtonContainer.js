import React from 'react';
import './ButtonContainer.css';

const ButtonContainer = (props) => {
  // ---------------------------------------
  // =============== JS AREA ===============
  // ---------------------------------------
  const { category, filterItem } = props;

  // ---------------------------------------
  // =============== HTML AREA =============
  // ---------------------------------------
  return (
    <div className="button-container">
      <button
        onClick={() => filterItem(category)}
        className="btn btn-warning mx-3"
      >
        {category}
      </button>
    </div>
  );
};

export default ButtonContainer;
