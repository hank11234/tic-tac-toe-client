'use strict'

// use require with a reference to bundle the file and use it in this file
const authEvents = require('./auth/events')
const gameEvents = require('./game/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('.after-login').hide()
  $('#gameBoard').hide()
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#logout').on('submit', authEvents.onLogout)
  $('#newGameButton').on('click', gameEvents.startGame)
  $('.col-4').one('click', gameEvents.takeTurn)
  // $('#button1').on('click', gameEvents.takeTurn)
  // $('#button2').on('click', gameEvents.takeTurn)
  // $('#button3').on('click', gameEvents.takeTurn)
  // $('#button4').on('click', gameEvents.takeTurn)
  // $('#button5').on('click', gameEvents.takeTurn)
  // $('#button6').on('click', gameEvents.takeTurn)
  // $('#button7').on('click', gameEvents.takeTurn)
  // $('#button8').on('click', gameEvents.takeTurn)
})
