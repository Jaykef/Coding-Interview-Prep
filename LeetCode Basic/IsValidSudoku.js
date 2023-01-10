/**
 * Jaykef - Jaward Sesay
 * @param {character[][]} board
 * @return {boolean}
 */
function isValidSudoku(board) {
  let set = new Set();

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let cell = board[i][j];
      if (cell === '.') continue; // skip empty cells
      // check if value is already in row, column, or sub-box
      let row = `row-${i}-${cell}`;
      let col = `col-${j}-${cell}`;
      let subBox = `sub-${Math.floor(i / 3)}-${Math.floor(j / 3)}-${cell}`;
      if (set.has(row) || set.has(col) || set.has(subBox)) {
        return false;
      }
      // add value to set
      set.add(row);
      set.add(col);
      set.add(subBox);
    }
  }

  return true;
}
