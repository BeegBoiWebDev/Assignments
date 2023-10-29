// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

function generatePassword() {
  var pwdLength; //This variable will store what the user's input in our prompt. 
  //This will be used to check if the input is valid (between numbers 8-128)
  //Conditional statements
  var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericCharacters = "1234567890";
  var specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"

  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
