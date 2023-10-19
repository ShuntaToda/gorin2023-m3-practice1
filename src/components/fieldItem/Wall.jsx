import React from "react";

export const Wall = ({ rowIndex, columnIndex }) => {
  return (
    <div className="bg-black" style={{ gridRow: ++rowIndex, gridColumn: ++columnIndex }}>
      Wall
    </div>
  );
};
