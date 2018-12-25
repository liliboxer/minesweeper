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

console.log(generatePlayerBoard(5, 8));
