interface ArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}

import React from "react";

const NextArrow = (props: ArrowProps) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-slick-arrow slick-next`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <span className="arrow-icon">&#10095;</span>
    </div>
  );
};

export default NextArrow;