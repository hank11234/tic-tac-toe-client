const store = require('./../store')

const gameStartSuccess = function() {
  $('#message').text(null)
}

const onError = function (error) {
  $('#message').text('Error: ' + error.responseJSON.message)
}


module.exports = {
  gameStartSuccess,
  onError
}
