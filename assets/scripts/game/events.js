const api = require('./api')
const ui = require('./ui')
const store = require('./../store')
let currentTurn = 'X'
const logic = require('./logic')

const startGame = function () {
  $('.col-4').text('[]');
  currentTurn = 'X';
  api.newGame()
    .then(ui.gameStartSuccess)
    .catch(ui.onError)
}

const takeTurn = function(event) {
    let position = event.target.id

    if ($(event.target).text() === '[]') {
      $(event.target).text(currentTurn)
      switchSides()
      $('#message').text(currentTurn + "'s turn")
      const gameArray = store.game.cells
    } else {
      $('#message').text('You must select a valid space.')
    }
    api.nextTurn(position, currentTurn)
      .then(ui.onTurnSuccess)
      .catch(ui.onError)

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
