const config = require('./../config')
const store = require('./../store')

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

module.exports = {
  newGame
}
