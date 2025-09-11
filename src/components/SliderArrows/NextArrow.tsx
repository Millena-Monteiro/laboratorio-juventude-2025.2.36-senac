import React from 'react';

const NextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-slick-arrow slick-next`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <span className="arrow-icon">&#10095;</span> {/* Caractere ">" */}
    </div>
  );
};

export default NextArrow;