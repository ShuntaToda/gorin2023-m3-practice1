export const getPlayerPosition = (field) => {
  let playerColumnIndex = 0;
  let playerRowIndex = 0;
  playerColumnIndex = field.findIndex((row) => {
    const index = row.findIndex((item) => item == 2);
    if (index >= 0) {
      playerRowIndex = index;
      return true;
    }
  });
  return { row: playerRowIndex, column: playerColumnIndex };
};
