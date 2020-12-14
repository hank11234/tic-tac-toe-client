const config = require('./../config')
const store = require('./../store')
const events = require('./events')

const newGame = function () {
  $('#gameBoard').show()
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    data: {},
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const nextTurn = function(position, currentTurn) {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game._id,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      "game": {
        "cell": {
          "index": position,
          "value": currentTurn
        },
        "over": false
      }
    }
  })
}

const gamesIndex = function() {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {},
  })
}

module.exports = {
  newGame,
  nextTurn,
  gamesIndex
}
