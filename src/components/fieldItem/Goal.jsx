import React from "react";

export const Goal = ({ rowIndex, columnIndex }) => {
  return (
    <div className="bg-danger" style={{ gridRow: ++rowIndex, gridColumn: ++columnIndex }}>
      Goal
    </div>
  );
};
