import React, { useEffect, useState } from "react";
import { fieldAPI } from "../api/field";
import { Wall } from "./fieldItem/Wall";
import { Player } from "./fieldItem/Player";
import { Block } from "./fieldItem/Block";
import { Goal } from "./fieldItem/Goal";
import { handleDownMove, handleLeftMove, handleRightMove, handleUpMove } from "../feature/handleMove";
import { getPlayerPosition } from "../feature/getPlayerPosition";
import { checkGoal } from "../feature/checkGoal";

export const Field = ({ field, setField, addMove, setIsGoal }) => {
  const handleKeyDown = (e) => {
    if (e.key == "ArrowRight") {
      handleRightMove(field, setField, addMove);
    } else if (e.key == "ArrowLeft") {
      handleLeftMove(field, setField, addMove);
    } else if (e.key == "ArrowUp") {
      handleUpMove(field, setField, addMove);
    } else if (e.key == "ArrowDown") {
      handleDownMove(field, setField, addMove);
    }
  };

  useEffect(() => {
    if (field[0] && checkGoal(field)) {
      setIsGoal(true);
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [field]);

  return (
    <div>
      <div
        className="d-grid justify-content-center"
        style={{
          gridTemplateColumns: field[0] ? `repeat(${field[0].length}, 75px)` : "",
          gridAutoRows: "75px",
        }}
      >
        {field.map((row, rowIndex) => {
          // retrun がないと返り値がないため出力がない
          return row.map((item, itemIndex) => {
            if (item == 1) {
              return <Wall rowIndex={rowIndex} columnIndex={itemIndex} key={`row-${rowIndex}-item-${itemIndex}`}></Wall>;
            } else if (item == 2) {
              return <Player rowIndex={rowIndex} columnIndex={itemIndex} key={`row-${rowIndex}-item-${itemIndex}`}></Player>;
            } else if (item == 3) {
              return <Block rowIndex={rowIndex} columnIndex={itemIndex} key={`row-${rowIndex}-item-${itemIndex}`}></Block>;
            } else if (item == 4) {
              return <Goal rowIndex={rowIndex} columnIndex={itemIndex} key={`row-${rowIndex}-item-${itemIndex}`}></Goal>;
            }
          });
        })}
      </div>
    </div>
  );
};
