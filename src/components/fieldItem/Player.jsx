import React from "react";

export const Player = ({ rowIndex, columnIndex }) => {
  return (
    <div className="bg-primary" style={{ gridRow: ++rowIndex, gridColumn: ++columnIndex }}>
      Player
    </div>
  );
};
