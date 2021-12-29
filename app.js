console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1
let rand = Math.floor(Math.random() * 100 + 1);
let userInput = window.prompt("Guess a number between 1 and 100.");
if (userInput < rand) {
  console.log("Too low!");
} else if (userInput > rand) {
  console.log("Too High!");
} else {
  console.log("Congrats! You guessed the correct number!");
}
// Exercise 2
var favoriteColor = `window.prompt("What is the place value?)`;
switch (favoriteColor) {
  case "Red":
    console.log("Red! Awesome Choice. You must be an attention getter!");
    break;
  case "Blue":
    console.log("Blue! The calm color of the waves. Nice!");
    break;
  case "Yellow":
    console.log("Yellow. Bright and Sunny!");
    break;
  case " Purple":
    console.log("Purple, the color of royalty!");
    break;
  case "Pink":
    console.log("Pink. Bubbly and Vibrant.");
    break;
  default:
    console.log("All Colors Are Magical");
}
