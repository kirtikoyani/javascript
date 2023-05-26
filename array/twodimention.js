// Rotate a 2D Array 90 Degrees Clockwise
const rotate = matrix => {
    return matrix.map((row, i) =>
      row.map((val, j) => matrix[matrix.length - 1 - j][i])
    );
  };