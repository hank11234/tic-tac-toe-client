const api = require('./api')
const ui = require('./ui')

const startGame = function () {
  event.preventDefault()
  api.newGame()
    .then(ui.gameStartSuccess)
    .catch(ui.onError)
}

module.exports = {
  startGame
}
