'use strict'

// use require with a reference to bundle the file and use it in this file
const events = require('./auth/events')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('.after-login').hide()
  $('#sign-up').on('submit', events.onSignUp)
  $('#sign-in').on('submit', events.onSignIn)
  $('#change-password').on('submit', events.onChangePassword)
  $('#logout').on('submit', events.onLogout)
})
