const api = require('./api')
const ui = require('./ui')


const startGame = function () {
  event.preventDefault()
  $('.col-4').text('[]')
  api.newGame()
    .then(ui.gameStartSuccess)
    .catch(ui.onError)
}

const takeTurn = function (event) {
  $(event.target).text('x')
}

module.exports = {
  startGame,
  takeTurn
}
