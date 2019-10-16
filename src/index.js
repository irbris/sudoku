module.exports = function solveSudoku(grid) {
  var emptyPositions = saveEmptyPositions(grid);
  var limit = 9;
  for(var i = 0; i < emptyPositions.length;) {
    var row = emptyPositions[i][0];
    var col = emptyPositions[i][1];
    var num = grid[row][col] + 1;
    var found = false;
    while(!found && num <= limit) {
      if(checkNum(grid, col, row, num)) {
        found = true;
        grid[row][col] = num;
        i++;
      } else {
        num++;
      }
    }
    if(!found) {
      grid[row][col] = 0;
      i--;
    }
  }
  return grid;
};

function saveEmptyPositions(grid){
  var emptyPositions = [];
  for(let i = 0; i < 9; i++){
    for(let j = 0; j < 9; j++){
      if(grid[i][j] === 0){
        emptyPositions.push([i, j]);
      }
    }
  }
  return emptyPositions;
};

function checkRow(grid, row, num) {
  for(let i = 0; i < 9; i++) {
    if(grid[row][i] === num) {
      return false;
    }
  }
  return true;
};

function checkColumn(grid, col, num) {
  for(let i = 0; i < 9; i++) {
    if(grid[i][col] === num) {
      return false;
    }
  }
  return true;
};

function checkSquare(grid, x, y, num) {
  let row = Math.floor(x / 3) * 3;
  let col = Math.floor(y / 3) * 3;

  for(let i = 0; i < 3; i++) {
    for(let j = 0; j < 3; j++) {
      if(grid[col + i][row + j] === num) {        
        return false;
      }
    }
  }
  return true;
};

function checkNum(grid, x, y, num) {
  return checkRow(grid, y, num) &&
         checkColumn(grid, x, num) &&
         checkSquare(grid, x, y, num)
};