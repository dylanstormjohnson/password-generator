// Assignment Code
var generateBtn = document.querySelector("#generate");

var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.',
];
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword () {
  var passwordLength = prompt("Choose a password length between 8 and 128")

  if (!passwordLength) return "No Password";

  passwordLength = parseInt(passwordLength);
  console.log(typeof passwordLength, passwordLength);

  if (!passwordLength) {
    console.log("stop");
    alert("Please enter a valid number.");
    return generatePassword();
  }

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a number between 8 and 128.");
    return generatePassword();
  }

  var allCharacters = [];

  // Asks if numbers should be included
  var includeNumbers = confirm("Include numbers?");

  if (includeNumbers) {
    allCharacters = allCharacters.concat(numericCharacters);
  }

  // Asks if lowercase letters should be included
  var includeLowerCasedCharacters = confirm("Include lowercase letters?");

  if (includeLowerCasedCharacters) {
    allCharacters = allCharacters.concat(lowerCasedCharacters);
  }
  
  // Asks if uppercase letters should be included
  var includeUpperCasedCharacters = confirm("Include uppercase letters?");

  if (includeUpperCasedCharacters) {
    allCharacters = allCharacters.concat(upperCasedCharacters);
  }

  // Asks if special characters should be included
  var includeSpecialCharacters = confirm("Include special characters?");

  if (includeSpecialCharacters) {
    allCharacters = allCharacters.concat(specialCharacters);
  }

  console.log(allCharacters)

  var password = []

  for (i = 0; i < passwordLength; i++) {
    var index = Math.floor(Math.random() * allCharacters.length);
    var computerChoice = allCharacters[index];
    password.push(computerChoice);
  }

  return password

}