const store = require('./../store')

const gameStartSuccess = function() {
  
}

const onError = function (error) {
  $('#message').text('Error: ' + error.responseJSON.message)
}


module.exports = {
  gameStartSuccess,
  onError
}
