import React from 'react';

const PrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-slick-arrow slick-prev`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <span className="arrow-icon">&#10094;</span> {/* Caractere "<" */}
    </div>
  );
};

export default PrevArrow;