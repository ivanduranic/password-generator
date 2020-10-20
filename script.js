    var letter;

      var password = {
        length: [8 - 128],
        uppercase: true,
        lowercase: true,
        number: true,

        types: function() {
          alert("MUST contain at least one uppercase letter, MUST contain at least one lowercase letter, MUST contain at least one number!");
        },

        characters: function() {
          alert("Must contain at least 8 characters and no more than 128 characters!");
        }
      };

      // FUNCTIONS
      // ==============================================================================

      // Logs all of our password's current stats to the console.
      function reWriteStats() {
        console.log("Length: " + password.length);
        console.log("Uppercase: " + password.uppercase);
        console.log("Lowercase:" + password.uppercase);
        console.log("Number: " + password.number);
        console.log("------------------------------");
      }

      // MAIN PROCESS
      // ==============================================================================

      while (letter !== null) {
        // Prompt user to input a letter
        letter = prompt("Type 'c' to see how many characters the password should have, 't' to see which character types the password should have.");

        // If the letter is c, run the following functions/methods.
        if (letter === "c") {
          password.characters();
          reWriteStats();
        }
        // If the letter is t, run the following functions/methods.
        else if (letter === "t") {
          password.types();
          reWriteStats();
        }

      }

var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");
var myForm = document.getElementById("psw-form");

// When the user submits his password, the alert pops out that shows his password
myForm.onsubmit = function (event) {  
  event.preventDefault();
  alert("Your password is: " + myInput.value);
};

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
  
  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  
  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}