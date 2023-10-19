import React, { useEffect, useState } from "react";
import { fieldAPI } from "../api/field";
import { Wall } from "./fieldItem/Wall";
import { Player } from "./fieldItem/Player";
import { Block } from "./fieldItem/Block";
import { Goal } from "./fieldItem/Goal";

export const Field = () => {
  const [field, setField] = useState([]);
  let gridColumnNum = 0;
  useEffect(() => {
    const handleSetField = async () => {
      const data = await fieldAPI();
      const gotField = data.objects;
      setField(gotField);
      console.log(gotField[0].length);
      gridColumnNum = gotField[0].length;
    };
    handleSetField();
  }, []);

  return (
    <div>
      <div
        className="d-grid justify-content-center"
        style={{
          gridTemplateColumns: field[0] ? `repeat(${field[0].length}, 100px)` : "",
          gridAutoRows: "100px",
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
