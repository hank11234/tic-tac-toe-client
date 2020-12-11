const api = require('./api')
const ui = require('./ui')
const store = require('./../store')
let currentTurn = 'X'
let gameOver = false

const startGame = function () {
  $('.col-4').text('[]');
  currentTurn = 'X';
  gameOver = false;
  api.newGame()
    .then(ui.gameStartSuccess)
    .catch(ui.onError)
}

const takeTurn = function(event) {
    let position = event.target.id

    if (gameOver == false) {
      if ($(event.target).text() === '[]') {
        $(event.target).text(currentTurn)
        switchSides()
        $('#message').text(currentTurn + "'s turn")
      } else {
        $('#message').text('You must select a valid space.')
      }
    }
    store.game.cells[position] = currentTurn
    let over = checkWin(store.game.cells)

    api.nextTurn(position, currentTurn, over)
      .then(ui.onTurnSuccess)
      .catch(ui.onError)
}

const switchSides = function() {
  if(currentTurn == 'X') {
    currentTurn = 'O'
  } else {
    currentTurn = 'X'
  }
}

const checkWin = function(gameArray) {
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
  console.log(gameOver);
}

const showGames = function () {
  api.gamesIndex()
    .then(ui.indexSuccess)
    .catch(ui.onError)
}

module.exports = {
  startGame,
  takeTurn,
  checkWin,
  showGames
}
