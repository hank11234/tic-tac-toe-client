const api = require('./api')
const ui = require('./ui')
let currentTurn = 'X'

const startGame = function () {
  $('.col-4').text('[]');
  currentTurn = 'X';
  api.newGame()
    .then(ui.gameStartSuccess)
    .catch(ui.onError)
}

const takeTurn = function(event) {
    let position = event.target.id

    if ( $(event.target).text() === '[]') {
      $(event.target).text(currentTurn)
      $('#message').text(currentTurn + "'s turn")
      switchSides()
    } else {
      $('#message').text('You must select a valid space.')
    }
}

const switchSides = function(){
  if(currentTurn == 'X') {
    currentTurn = 'O'
  } else {
    currentTurn = 'X'
  }
}

module.exports = {
  startGame,
  takeTurn
}
