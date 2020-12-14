const store = require('./../store')
const events = require('./events')

const gameStartSuccess = function(response) {
  $('#message').text('X starts!')
  store.game = response.game
  store.user.games += response.game
}

const onTurnSuccess = function(response) {
  store.game = response.game
}

const indexSuccess = function(response) {
  $('#message').text('Number of games played: ' + response.games.length)
}

const onError = function (error) {
  $('#message').text('Error: ' + error.responseJSON.message)
}


module.exports = {
  gameStartSuccess,
  onTurnSuccess,
  indexSuccess,
  onError
}
