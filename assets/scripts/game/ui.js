const store = require('./../store')
const logic = require('./logic')

const gameStartSuccess = function(response) {
  $('#message').text('X starts!')
  store.game = response.game
}

const onTurnSuccess = function(response) {
  store.game = response.game
  logic.checkWin(store.game.cells)
}

const onError = function (error) {
  $('#message').text('Error: ' + error.responseJSON.message)
}


module.exports = {
  gameStartSuccess,
  onTurnSuccess,
  onError
}
