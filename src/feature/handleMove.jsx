import { getPlayerPosition } from "./getPlayerPosition";

export const handleRightMove = (field, setField, addMove) => {
  // 右矢印を押されたときの処理
  const playerPosition = getPlayerPosition(field);
  if (field[playerPosition.column][playerPosition.row + 1] === 0) {
    // プレイヤーの右側が何もなかったら
    setField((prevField) => {
      prevField[playerPosition.column][playerPosition.row] = 0;
      prevField[playerPosition.column][playerPosition.row + 1] = 2;
      return [...prevField];
    });
    addMove();
  } else if (field[playerPosition.column][playerPosition.row + 1] === 3) {
    if (field[playerPosition.column][playerPosition.row + 2] === 0) {
      setField((prevField) => {
        prevField[playerPosition.column][playerPosition.row] = 0;
        prevField[playerPosition.column][playerPosition.row + 1] = 2;
        prevField[playerPosition.column][playerPosition.row + 2] = 3;
        return [...prevField];
      });
      addMove();
    }
  }
};
export const handleLeftMove = (field, setField, addMove) => {
  // 左矢印を押されたときの処理
  const playerPosition = getPlayerPosition(field);
  if (field[playerPosition.column][playerPosition.row - 1] === 0) {
    // プレイヤーの左側が何もなかったら
    setField((prevField) => {
      prevField[playerPosition.column][playerPosition.row] = 0;
      prevField[playerPosition.column][playerPosition.row - 1] = 2;
      return [...prevField];
    });
    addMove();
  } else if (field[playerPosition.column][playerPosition.row - 1] === 3) {
    if (field[playerPosition.column][playerPosition.row - 2] === 0) {
      setField((prevField) => {
        prevField[playerPosition.column][playerPosition.row] = 0;
        prevField[playerPosition.column][playerPosition.row - 1] = 2;
        prevField[playerPosition.column][playerPosition.row - 2] = 3;
        return [...prevField];
      });
      addMove();
    }
  }
};

export const handleDownMove = (field, setField, addMove) => {
  // 下矢印を押されたときの処理
  const playerPosition = getPlayerPosition(field);
  if (field[playerPosition.column + 1][playerPosition.row] === 0) {
    // プレイヤーの下側が何もなかったら
    setField((prevField) => {
      prevField[playerPosition.column][playerPosition.row] = 0;
      prevField[playerPosition.column + 1][playerPosition.row] = 2;
      console.log(prevField);
      return [...prevField];
    });
    addMove();
  } else if (field[playerPosition.column + 1][playerPosition.row] === 3) {
    if (field[playerPosition.column + 2][playerPosition.row] === 0) {
      setField((prevField) => {
        prevField[playerPosition.column][playerPosition.row] = 0;
        prevField[playerPosition.column + 1][playerPosition.row] = 2;
        prevField[playerPosition.column + 2][playerPosition.row] = 3;
        console.log(prevField);
        return [...prevField];
      });
      addMove();
    }
  }
};
export const handleUpMove = (field, setField, addMove) => {
  // 上矢印を押されたときの処理
  const playerPosition = getPlayerPosition(field);
  if (field[playerPosition.column - 1][playerPosition.row] === 0) {
    // プレイヤーの上側が何もなかったら
    setField((prevField) => {
      prevField[playerPosition.column][playerPosition.row] = 0;
      prevField[playerPosition.column - 1][playerPosition.row] = 2;
      return [...prevField];
    });
    addMove();
  } else if (field[playerPosition.column - 1][playerPosition.row] === 3) {
    if (field[playerPosition.column - 2][playerPosition.row] === 0) {
      setField((prevField) => {
        prevField[playerPosition.column][playerPosition.row] = 0;
        prevField[playerPosition.column - 1][playerPosition.row] = 2;
        prevField[playerPosition.column - 2][playerPosition.row] = 3;
        return [...prevField];
      });
      addMove();
    }
  }
};
