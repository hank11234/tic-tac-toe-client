const store = require('./../store')

const signUpSuccess = function () {
  $('#message').text('Account created!')
}

const signInSuccess = function (data) {
  $('#message').text('Logged in!')
  store.user = data.user
  $('.before-login').hide()
  $('.after-login').show()
}

const changePasswordSuccess = function () {
  $('#message').text('Changed password successfully')
  $('form').trigger('reset')
}

const logoutSuccess = function () {
  $('#message').text('Logged out')
  $('.after-login').hide()
  $('.before-login').show()
  store.user = null
  $('form').trigger('reset')
}

const onError = function (error) {
  $('#message').text('Error: ' + error.responseJSON.message)
}


module.exports = {
  signUpSuccess,
  signInSuccess,
  changePasswordSuccess,
  logoutSuccess,
  onError
}
