const prompt = require("prompt-sync")();

function startGame() {
  console.log(
    "Welcome to the Number Guessing Game!\nI'm thinking of a number between 1 and 100.\nYou have 5 chances to guess the correct number.",
  );

  console.log("************************");
  console.log(
    "Please select the difficulty level:\n1. Easy (10 chances)\n2. Medium (5 chances)\n3. Hard (3 chances) ",
  );
  setTimeout(guessNumber, 2000);
}

function guessNumber() {
    // Generate a random number between 1 and 100
  const randomNum = Math.floor(Math.random() * 100) + 1;


    // Map of difficulty levels to number of chances
    const commandMap = {
        "easy": 10, '1': 10,
        "medium": 5, '2': 5,
        "hard": 3, '3': 3
    };


    // Prompt user for difficulty level
    const difficulty = prompt(
      "Enter the difficulty level (easy/medium/hard or 1/2/3): ",
    ).toLowerCase();
    

    // Get the number of chances based on the selected difficulty
        const promptGuess = commandMap[difficulty];

    // Validate difficulty input
        if (!promptGuess) {
          console.log(
            "Invalid difficulty level. Please choose easy, medium, or hard.",
          );
          return;
        }
    
    // Start the game
    console.log(`Great! You have selected the ${difficulty} difficulty level.
        Let's start the game!`);

      
    const startTime = Date.now(); // Start timer
    let attempts = 0;
    
        // Game loop for user guesses
    for (let i = 0; i < promptGuess; i++) {
          
        const guess = prompt("Enter your guess: ");

        //  Convert the input to a number 
        let numGuess = parseInt(guess);

        // Validate input
        if (isNaN(numGuess) || numGuess < 1 || numGuess > 100) {
          console.log("Please enter a valid number between 1 and 100.\n");
          i--; // Don't count invalid attempts
          continue;
        }

        // Increment attempts after a valid guess
        attempts++;

          
          
          
        // Check if the guess is correct, too high, or too low
        if (numGuess === randomNum) {
          const endTime = Date.now();
          const timeTaken = ((endTime - startTime) / 1000).toFixed(2); // Convert to seconds
          console.log(
            `Congratulations! You guessed the correct number in ${attempts} ${attempts > 1 ? "attempts" : "attempt"} and ${timeTaken} seconds.`,
          );return;
            // playAgain();
        } else if (numGuess !== randomNum && numGuess > randomNum) {
          console.log(`Incorrect! The number is less than ${numGuess}.
                        `);
        } else if (numGuess !== randomNum && numGuess < randomNum) {
          console.log(`Incorrect! The number is greater than ${numGuess}.
                        `);
          }
      }
        
 console.log(
    `Game over! You've used all your attempts. The correct number was ${randomNum}.`,
  );
    playAgain();
}




function playAgain() {
  console.log("\n************************");
  const again = prompt("Do you want to play again? (yes/no): ").toLowerCase();

  if (again === "yes" || again === "y") {
    console.log("\n"); // Add some spacing
    startGame();
  } else {
    console.log("\nThanks for playing! Goodbye! 👋");
  }
}

// Start the game
startGame();

// run program with "npm start"
