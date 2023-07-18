export function validateEmail(inputText) {
    var mailFormat =  /\S+@\S+\.\S+/;
    if (inputText.match(mailFormat)) {
      return true;
    } else {
        alert("invalid email")
      return false;

    }
  }