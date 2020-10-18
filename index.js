/* function validatePassword(password = 'alexalejandro') {
  

  for (let i = 0; i < password.length; i++) {
    if (password.length < 8) {
      return false
    } else if (password.match(/[A-Z]/g)) {
      valid = true
    }
  }

  return valid
}
console.log(validatePassword())*/

function validatePassword(password) {
  const passwordPattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$&+,:;=?@#|'<>.^*()%!-]).{8,}/g

  if (password.match(passwordPattern)) {
    return true
  } else {
    return false
  }
}

module.exports = validatePassword
