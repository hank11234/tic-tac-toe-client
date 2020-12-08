const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../lib/get-form-fields')


const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.onError)
}

module.exports = {
  onSignUp
}
