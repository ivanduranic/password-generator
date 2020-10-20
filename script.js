// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Functions for getting the inputs from the user
function askForPasswordLength() {
  var passwordLength = 0;
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = parseInt(prompt("How long should your password be?"));
    if (passwordLength < 8 || passwordLength > 128) {
      alert("Your password has to be between 8 and 128 characters.");
    }
  }
  return passwordLength;
}

function askForLowercase() {
  var useLowercase = confirm("Do you want to include lowercase characters?");
  return useLowercase;
}

function askForUppercase() {
  var useUppercase = confirm("Do you want to include uppercase characters?");
  return useUppercase;
}

function askForNumeric() {
  var useNumeric = confirm("Do you want to include numbers?");
  return useNumeric;
}

function askForSpecial() {
  var useSpecialCharacters = confirm(
    "Do you want to include special characters?"
  );
  return useSpecialCharacters;
}

function generatePassword() {
  var passwordLength = askForPasswordLength();
  var useLowercase = askForLowercase();
  var useUppercase = askForUppercase();
  var useNumeric = askForNumeric();
  var useSpecialCharacters = askForSpecial();

  // If none of the cases is selected, the user is warned he has to do a selection
  // and he's asked again the same set of questions
  if (!useLowercase && !useUppercase && !useNumeric && !useSpecialCharacters) {
    alert("Please select at least one criteria for the password!");
    generatePassword();
  } else {
    var password = createPassword(
      passwordLength,
      useLowercase,
      useUppercase,
      useNumeric,
      useSpecialCharacters
    );

    return password;
  }
}

function createPassword(
  length,
  useLowercase,
  useUppercase,
  useNumeric,
  useSpecialCharacters
) {
  var alpha = "abcdefghijklmnopqrstuvwxyz";
  var caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numeric = "0123456789";
  var special = "!$^&*-=+_?";

  var options = [];

  if (useLowercase) {
    options.push(alpha);
  }

  if (useUppercase) {
    options.push(caps);
  }

  if (useNumeric) {
    options.push(numeric);
  }

  if (useSpecialCharacters) {
    options.push(special);

  }

  var password = "";
  var passwordArray = Array(length);

  for (i = 0; i < length; i++) {
    var currentOption = options[Math.floor(Math.random() * options.length)];
    var randomChar = currentOption.charAt(
      Math.floor(Math.random() * currentOption.length)
    );
    password += randomChar;
    passwordArray.push(randomChar);
  }

  checkPassword();

  function checkPassword() {
    var missingValueArray = [];
    var containsAll = true;

    options.forEach(function (e, i, a) {
      var hasValue = false;
      passwordArray.forEach(function (e1, i1, a1) {
        if (e.indexOf(e1) > -1) {
          hasValue = true;
        }
      });

      if (!hasValue) {
        missingValueArray = a;
        containsAll = false;
      }
    });

    if (!containsAll) {
      passwordArray[
        Math.floor(Math.random() * passwordArray.length)
      ] = missingValueArray.charAt(
        Math.floor(Math.random() * missingValueArray.length)
      );
      password = "";
      passwordArray.forEach(function (e, i, a) {
        password += e;
      });
      checkPassword();
    }
  }

  return password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);