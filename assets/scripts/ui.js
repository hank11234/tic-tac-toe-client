const store = require('./store')

const signUpSuccess = function () {
  $('#message').text('Account created!')
}

const signInSuccess = function (data) {
  $('#message').text('Logged in!')
  store.user = data.user
  $('.before-login').hide()
  $('.after-login').show()
}

const onError = function (error) {
  $('#message').text('Error: ' + error.responseJSON.message)
}


module.exports = {
  signUpSuccess,
  signInSuccess,
  onError
}
