const store = require('./store')

const signUpSuccess = function () {
  $('#message').text('Account created!')
}

const onError = function (error) {
  $('#message').text('Error: ' + error.responseJSON.message)
}


module.exports = {
  signUpSuccess,
  onError
}
