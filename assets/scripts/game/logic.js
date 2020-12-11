let gameOver = false

const checkWin = function(gameArray) {
  if (gameOver = false) {
    if (gameArray[0, 1, 2] !== "" && gameArray[0] === gameArray[1] && gameArray[0] === gameArray[2]) {
      $('#message').text('You win!');
      gameOver = true
    } else if (gameArray[3, 4, 5] !== "" && gameArray[3] === gameArray[4] && gameArray[3] === gameArray[5]) {
      $('#message').text('You win!');
      gameOver = true
    } else if (gameArray[6, 7, 8] !== "" && gameArray[6] === gameArray[7] && gameArray[6] === gameArray[8]) {
      $('#message').text('You win!');
      gameOver = true
    } else if (gameArray[0, 3, 6] !== "" && gameArray[0] === gameArray[3] && gameArray[0] === gameArray[6]) {
      $('#message').text('You win!');
      gameOver = true
    } else if (gameArray[1, 4, 7] !== "" && gameArray[1] === gameArray[4] && gameArray[1] === gameArray[7]) {
      $('#message').text('You win!');
      gameOver = true
    } else if (gameArray[2, 5, 8] !== "" && gameArray[2] === gameArray[5] && gameArray[2] === gameArray[8]) {
      $('#message').text('You win!');
      gameOver = true
    } else if (gameArray[0, 4, 8] !== "" && gameArray[0] === gameArray[4] && gameArray[0] === gameArray[8]) {
      $('#message').text('You win!');
      gameOver = true
    } else if (gameArray[2, 4, 6] !== "" && gameArray[2] === gameArray[4] && gameArray[2] === gameArray[6]) {
      $('#message').text('You win!');
      gameOver = true
    } else if (gameArray[0] !== "" && gameArray[1] !== "" && gameArray[2] !== "" && gameArray[3] !== "" && gameArray[4] !== "" && gameArray[5] !== "" && gameArray[6] !== "" && gameArray[7] !== "" && gameArray[8] !== "") {
      $('#message').text('It\'s a draw!');
    }
  }
  console.log(gameOver);
}

module.exports = {
  checkWin
}
