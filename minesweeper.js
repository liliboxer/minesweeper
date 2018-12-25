let generatePlayerBoard = (numberOfRows, numberOfColumns) => {
  let board = [];
  for (let i = 0; i < numberOfRows; i++) { // why don't you need .length
    let row = [];
    for (let j = 0; j < numberOfColumns; j++) {
      row.push(' ');
    };
      board.push(row);
  };
  return board;
};

console.log(generatePlayerBoard(5, 8));
