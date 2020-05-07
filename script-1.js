// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  
  if (password !== false){
    var passwordText = document.querySelector("#password")

    passwordText.value = password;
  }
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Characters
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbers = ["1","2","3","4","5","6","7","8","9","0"];
var specialChar = ["!","@","#","$","%","^","&","*","(",")","-","+","_","="];
var maxCharLength = 128;
var minCharLength = 8;
var myArray = [];

// Generating click function to run
function generatePassword() {

var randPassword = '';

// Turn string into number
var selectedLength = parseInt(prompt("Enter length of password to generate!"));
// Prompt box input
if (selectedLength === null || isNaN(selectedLength)) {
  alert("This is not a number,please enter number");
  return false;
}

// Validate length
if (selectedLength < minCharLength || selectedLength > maxCharLength){
  alert("Password needs to be at least 8 characters or less or equal to 128 characters");
  return false;

}

// Password types
var selectedUpperCase = confirm("Do you want password to contain Upper case letters?");
var selectedLowerCase = confirm("Do you want password to contain lowercase letters?");
var selectedNumbers = confirm("Do you want password to contain Numbers?");
var selectedSpecialChar = confirm("Do you want password to contain special characters?");
// Options array
if (selectedUpperCase === true) {
  myArray.push(upperCase);
}
if (selectedLowerCase === true) {
  myArray.push(lowerCase);
}
if (selectedNumbers === true) {
  myArray.push(numbers);
}
if (selectedSpecialChar === true) {
  myArray.push(specialChar);
}

// Password loop
for (var i = 0; i < selectedLength; i ++) {
  var arrayToUse = myArray[Math.floor(Math.random()*myArray.length)];
  var randomCharIndex = Math.floor(Math.random()*arrayToUse.length);
  randPassword += arrayToUse[randomCharIndex];
}

return randPassword;
}

