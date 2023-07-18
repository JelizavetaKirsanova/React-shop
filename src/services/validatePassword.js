export function validatePassword(inputText){
    if (inputText.length > 7){
        return true
    } else{
        alert("invalid password")
        return false
    }
  }