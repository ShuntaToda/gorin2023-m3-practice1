export const checkGoal = (field) => {
  let goalColumnIndex = 0;
  let goalRowIndex = 0;
  goalColumnIndex = field.findIndex((row) => {
    const index = row.findIndex((item) => item == 4);
    if (index >= 0) {
      goalRowIndex = index;
      return true;
    }
  });
  if (
    field[goalColumnIndex - 1][goalRowIndex] === 2 ||
    field[goalColumnIndex + 1][goalRowIndex] === 2 ||
    field[goalColumnIndex][goalRowIndex - 1] === 2 ||
    field[goalColumnIndex][goalRowIndex + 1] === 2
  ) {
    return true;
  }
  return false;
};
