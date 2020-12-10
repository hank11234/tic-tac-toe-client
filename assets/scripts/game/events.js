const api = require('./api')
const ui = require('./ui')
let currentTurn = 'x'

const startGame = function () {
  $('.col-4').text('[]');
  currentTurn = 'x';
  api.newGame()
    .then(ui.gameStartSuccess)
    .catch(ui.onError)
}

const takeTurn = function(event) {
    let position = event.target.id

    if ( $(event.target).text() === '[]') {
      $(event.target).text(currentTurn)
      $('#message').text(currentTurn + " 's turn")
      switchSides()
    } else {
      $('#message').text('You must select a valid space.')
    }
}

const switchSides = function(){
  if(currentTurn == 'x') {
    currentTurn = 'o'
  } else {
    currentTurn = 'x'
  }
}

module.exports = {
  startGame,
  takeTurn
}
