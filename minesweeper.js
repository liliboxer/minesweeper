// Player Board //

const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
  const board = [];
  for (let i = 0; i < numberOfRows; i++) { // why don't you need .length
    const row = [];
    for (let j = 0; j < numberOfColumns; j++) {
      row.push(' ');
    };
      board.push(row);
  };
  return board;
};

// Bomb Board //

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
  const board = [];
  for (let i = 0; i < numberOfRows; i++) {
    const row = [];
    for (let j = 0; j < numberOfColumns; j++) {
      row.push(null);
    };
      board.push(row);
  };
  let numberOfBombsPlaced = 0;
  while (numberOfBombsPlaced > numberOfBombs) { // can plce bombs on top of already existing bombs
    let randomRowIndex = Math.floor(Math.random() * numberOfRows);
    let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
    board[randomRowIndex][randomColumnIndex] = 'B';
    numberOfBombsPlaced ++;
  };
  return board;
};


// printBoard function //

const printBoard = board => {
  console.log(board.map(row => row.join(' | ').join(''\n''))); // don't understand syntax for thsi callback function
};
