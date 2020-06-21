//Variables

// Array of questions

var questions = [
  {
    question: "Commonly used data types DO not include:",
    choice1: "String",
    choice2: "Booleans",
    choice3: "Alerts",
    choice4: "Numbers",
    answer: "1",
  },

  {
    question: "The condition in an if / else statement is enclosed with:",
    choice1: "Quotes",
    choice2: "Curly Brackets",
    choice3: "Parenthesis",
    choice4: "Square Brackets",
    answer: "3",
  },

  {
    question: "Arrays in javascript can be used to store:",
    choice1: "Numbers and strings",
    choice2: "Other arrays",
    choice3: "Booleans",
    choice4: "All of the above",
    answer: "4",
  },

  {
    question:
      "String values must be enclosed within ___ when being assigned to variables.",
    choice1: "Commas",
    choice2: "Curley brackets",
    choice3: "Quotes",
    choice4: "Parenthesis",
    answer: "2",
  },

  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    choice1: "Javascript",
    choice2: "Terminal/bash",
    choice3: "For loops",
    choice4: "console.log",
    answer: "3",
  },
];

var question = document.getElementById("question");
var choice1 = document.getElementById("choice1");
var choice2 = document.getElementById("choice2");
var choice3 = document.getElementById("choice3");
var choice4 = document.getElementById("choice4");

// Game start function
function startGame() {
  //Copied current questions array
  availableQuestions = [...questions];
}










startGame();

//Event listener

var button = document.getElementById("startbtn");
button.addEventListener("click", startGame);
