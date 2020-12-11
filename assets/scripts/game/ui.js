const store = require('./../store')
const events = require('./events')

const gameStartSuccess = function(response) {
  $('#message').text('X starts!')
  store.game = response.game
  store.user.games += response.game
  console.log(store.user);
}

const onTurnSuccess = function(response) {
  store.game = response.game
}

const onError = function (error) {
  $('#message').text('Error: ' + error.responseJSON.message)
}


module.exports = {
  gameStartSuccess,
  onTurnSuccess,
  onError
}
