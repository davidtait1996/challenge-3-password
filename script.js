// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var characters = ["lowercase", "uppercase", "number", "symbol"];
var symbolArray = ["!", "@", "#", "$", "%", "^", "&", "*", "|", ".", ","];
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";


var getRandomInt = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

var getRandomSymbol = function(){
  var randomNumber = getRandomInt(0, symbolArray.length-1);
  return symbolArray[randomNumber];
};

var getRandomLetter = function(){
  var number = getRandomInt(0, letters.length-1);
  return letters[number];
};


var generatePassword = function(){
  var password = "";

  var passwordLength = window.prompt("How long should the password be? Input a number between 8 and 128.");
  while(passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)){
    window.alert("Ur stupid, put a valid input.");
    passwordLength = window.prompt("Try again. Input a number between 8 and 128.");
  }

  var symbolsIn = window.prompt("Do you want symbols? Input yes or no");
  while(symbolsIn.toLowerCase() != "yes" && symbolsIn.toLowerCase() != "no"){
    window.alert("ur stupid, put yes or no in the text field");
    symbolsIn = window.prompt("Do you want symbols? Input yes or no this time.");
  }

  var upperIn = window.prompt("Do you want upper case letters? Input yes or no");
  while(upperIn.toLowerCase() != "yes" && upperIn.toLowerCase() != "no"){
    window.alert("ur stupid, put yes or no in the text field");
    upperIn = window.prompt("Do you want upper case letters? Input yes or no this time.");
  }

  var numbersIn = window.prompt("Do you want numbers? Input yes or no");
  while(numbersIn.toLowerCase() != "yes" && numbersIn.toLowerCase() != "no"){
    window.alert("ur stupid, put yes or no in the text field");
    numbersIn = window.prompt("Do you want numbers? Input yes or no this time.");
  }



  // for loop to generate as many characters needed for password
  for(var i = 0; i < passwordLength; i++){
    //variable to determine what type of character to add to string
    var characterType = characters[getRandomInt(0, characters.length-1)];
    console.log(characters.length);
    console.log(getRandomInt(0, characters.length-1));
    console.log(characterType);
    //if we're adding a letter
    if(characterType === "lowercase"){
      //choose a random letter and concatenate it to the string
      password += (getRandomLetter()).toLowerCase();
    } else if (characterType === "uppercase" && upperIn.toLowerCase() === "yes"){
      //choose a random letter and concatenate it to the string
      password += (getRandomLetter()).toUpperCase();
    } else if (characterType === "number" && numbersIn.toLowerCase() === "yes"){
      //choose a random number and concatenate it to the string
      password += getRandomInt(0, 9);
    } else if (characterType === "symbol" && symbolsIn.toLowerCase() === "yes") {
      //choose a random symble and concatenate it to the string
      password += getRandomSymbol();
    } 
  }
  return password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
