const store = require('./../store')

const gameStartSuccess = function(response) {
  $('#message').text(null)
  store.game = response.game
}

const onError = function (error) {
  $('#message').text('Error: ' + error.responseJSON.message)
}


module.exports = {
  gameStartSuccess,
  onError
}
