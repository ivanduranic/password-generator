// VARIABLES
      // ==========================================================================
      var letter;

      var password = {
        length: 8,
        uppercase: true,
        lowercase: true,
        number: true,
        specialCharacter: true,

        types: function() {
          alert("MUST contain at least one uppercase letter, MUST contain at least one lowercase letter, MUST contain at least one number, MUST contain at least one special character (!”#$%&'()*+,-./:;<=>?@[\]^_`{|}~ )!");
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
        console.log("specialCharacter: " + password.specialCharacter);
        console.log("------------------------------");
      }

      // MAIN PROCESS
      // ==============================================================================

      // A while loop makes more sense here than a for loop, because we don't know how long the user will want to play the game
      // This loop will end when the user presses Cancel, thus setting the letter variable to "null"
      while (letter !== null) {
        // Prompt user to input a letter
        letter = prompt("Type 'c' to see how many characters the password should have, 't' to see which character types the password should have.");

        // If the letter is c, run the following functions/methods.
        if (letter === "c") {
          password.characters();
          reWriteStats();
        }
        // If the letter is t, run the following functions/methods.
        else if (letter === "t" && password.specialCharacter) {
          password.types();
          reWriteStats();
        }

      }


      