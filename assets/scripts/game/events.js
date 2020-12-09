const api = require('./api')
const ui = require('./ui')
let xTurn
let oTurn

const startGame = function () {
  $('.col-4').text('[]')
  api.newGame()
    .then(ui.gameStartSuccess)
    .catch(ui.onError)
}

const takeTurn = function (event) {
  const currentTurn = xTurn ? ($(event.target).text('o'), $('#message').text('X\'s turn')) : ($(event.target).text('x'), $('#message').text('O\'s turn'))
  switchSides()

}

const switchSides = function() {
  xTurn = !xTurn
}

module.exports = {
  startGame,
  takeTurn
}
