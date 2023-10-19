import React from "react";

export const Block = ({ rowIndex, columnIndex }) => {
  return (
    <div className="bg-secondary" style={{ gridRow: ++rowIndex, gridColumn: ++columnIndex }}>
      Block
    </div>
  );
};
