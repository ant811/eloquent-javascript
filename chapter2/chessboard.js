function chessboard(size) {
  const board = [];

  if (Number.isInteger(size)) {
    let evenLine = "";
    let oddLine = "";

    for (let i = 0; i < size; i++) {
      if (i % 2 === 0) {
        evenLine+=" ";
        oddLine+="#";
      } else {
        evenLine+="#";
        oddLine+=" ";
      }
    }

    for (let i = 0; i < size; i++) {
      if (i % 2 === 0) {
        board.push(evenLine);
      } else {
        board.push(oddLine);
      }
    }  
  }

  return board.join('\n');
}

module.exports = chessboard;

// console.log(chessboard(13));
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #