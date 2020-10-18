function validatePassword(password) {
    if (
      upper(password) &&
      lower(password) &&
      special(password) &&
      number(password) &&
      pLength(password)
    ) {
      return true
    } else {
      return false
    }
  }
  function pLength(password) {
    if (password.length >= 8) {
      return true
    }
  }
  
  function lower(password) {
    for (let i = 0; i < password.length; i++) {
      if (password[i] !== password[i].toUpperCase()) {
        return true
      }
    }
  
    return false
  }
  function upper(password) {
    for (let i = 0; i < password.length; i++) {
      if (password[i] !== password[i].toLowerCase()) {
        return true
      }
    }
  
    return false
  }
  
  function number(password) {
    for (let i = 0; i < password.length; i++) {
      if (password[i] >= '0' && password[i] <= '9') {
        return true
      }
    }
  
    return false
  }
  
  function special(password) {
    const spec = "!$&+,:;=?@#|'<>.^*()%-])"
  
    for (let i = 0; i < password.length; i++) {
      if (spec.indexOf(password.charAt(i)) !== -1) {
        return true
      }
    }
  }

  module.exports = validatePassword
