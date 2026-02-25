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
  const randomNum = Math.floor(Math.random() * 100) + 1;

  // difficulty levels
  const easy = 10;
  const medium = 5;
  const hard = 3;

  

  const command = prompt(
    "Enter the difficulty level (easy, medium, hard): ",
  ).toLowerCase();

  if (command === "easy") {
    console.log(`Great! You have selected the ${command} difficulty level.
            Let's start the game!`);
    const startTime = Date.now(); // Start timer
    let attempts = 0;
    for (let i = 0; i < easy; i++) {
      const guess = prompt("Enter your guess: ");
      let numGuess = parseInt(guess);

      // Validate input
      if (isNaN(numGuess) || numGuess < 1 || numGuess > 100) {
        console.log("Please enter a valid number between 1 and 100.\n");
        i--; // Don't count invalid attempts
        continue;
      }
      attempts++;

        if (numGuess === randomNum) {
          const endTime = Date.now();
          const timeTaken = ((endTime - startTime) / 1000).toFixed(2); // Convert to seconds
          console.log(
            `Congratulations! You guessed the correct number in ${attempts} ${attempts > 1 ? "attempts" : "attempt"} and ${timeTaken} seconds.`,
          );
          return;
        } else if (numGuess !== randomNum && numGuess > randomNum) {
        console.log(`Incorrect! The number is less than ${numGuess}.
                    `);
      } else if (numGuess !== randomNum && numGuess < randomNum) {
        console.log(`Incorrect! The number is greater than ${numGuess}.
                    `);
      }
    }
    if (attempts === easy) {
      console.log(
        `Game over! You've used all your attempts. The correct number was ${randomNum}.`,
      );
    }
  } else if (command === "medium") {
    console.log(`Great! You have selected the ${command} difficulty level.
            Let's start the game!`);
    let attempts = 0;
    for (let i = 0; i < medium; i++) {
        const guess = prompt("Enter your guess: ");
        let numGuess = parseInt(guess);

      // Validate input
      if (isNaN(numGuess) || numGuess < 1 || numGuess > 100) {
        console.log("Please enter a valid number between 1 and 100.\n");
        i--; // Don't count invalid attempts
        continue;
        }
        
      attempts++;
      
      if (numGuess === randomNum) {
        const endTime = Date.now();
        const timeTaken = ((endTime - startTime) / 1000).toFixed(2); // Convert to seconds
        console.log(
          `Congratulations! You guessed the correct number in ${attempts} ${attempts > 1 ? "attempts" : "attempt"} and ${timeTaken} seconds.`,
        );
        break;
      } else if (numGuess !== randomNum && numGuess > randomNum) {
        console.log(`Incorrect! The number is less than ${numGuess}.
                        `);
      } else if (numGuess !== randomNum && numGuess < randomNum) {
        console.log(`Incorrect! The number is greater than ${numGuess}.
                        `);
      }
    }
    if (attempts === medium) {
      console.log(
        `Game over! You've used all your attempts. The correct number was ${randomNum}.`,
      );
    }
  } else if (command === "hard") {
    console.log(`Great! You have selected the ${command} difficulty level.
            Let's start the game!`);
    let attempts = 0;
    for (let i = 0; i < hard; i++) {
        const guess = prompt("Enter your guess: ");
        let numGuess = parseInt(guess);

      // Validate input
      if (isNaN(numGuess) || numGuess < 1 || numGuess > 100) {
        console.log("Please enter a valid number between 1 and 100.\n");
        i--; // Don't count invalid attempts
        continue;
        }
        
      attempts++;
      if (numGuess === randomNum) {
        const endTime = Date.now();
        const timeTaken = ((endTime - startTime) / 1000).toFixed(2); // Convert to seconds
        console.log(
          `Congratulations! You guessed the correct number in ${attempts} ${attempts > 1 ? "attempts" : "attempt"} and ${timeTaken} seconds.`,
        );
        break;
      } else if (numGuess !== randomNum && numGuess > randomNum) {
        console.log(`Incorrect! The number is less than ${numGuess}.
                        `);
      } else if (numGuess !== randomNum && numGuess < randomNum) {
        console.log(`Incorrect! The number is greater than ${numGuess}.
                        `);
      }
    }
    if (attempts === hard) {
      console.log(
        `Game over! You've used all your attempts. The correct number was ${randomNum}.`,
      );
    }
  } else {
    console.log(
      "Invalid difficulty level. Please choose easy, medium, or hard.",
    );
  }
}
startGame();

// node index.js
