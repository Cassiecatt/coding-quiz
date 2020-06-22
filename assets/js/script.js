//Global Variables
var question = document.getElementById("question");
var choices = document.querySelectorAll(".choice");
var i = 0

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
    answer: "4",
  },
];

function myTimer() {
    //Variables within function (local)
    var startTime = 60; 
    var myInterval = 1000;
    var timer = document.getElementById("timer");

    var mySet = setInterval(createTimer, myInterval);

    function createTimer() {
        if (startTime > 0) {
            timer.textContent = startTime;

            startTime = startTime - 1
        } else {
            timer.textContent = "done"
            clearInterval(mySet)
        }
    }

}

var button = document.getElementById("startbutton");
button.addEventListener("click", myTimer);



// Game start function
function startGame() {
  // Hiding start button when function starts
  button.style.display = "none";



//   setInterval(setQuestion, 2000);
//   var i = 0;

//   function setQuestion() {
//       if (i < questions.length) {
//           question.textContent = questions[i].question
//           choices[0].classList.remove("hidden");
//           choices[1].classList.remove("hidden");
//           choices[2].classList.remove("hidden");
//           choices[3].classList.remove("hidden");

//           choice1.textContent = questions[i].choice1
//           choice2.textContent = questions[i].choice2
//           choice3.textContent = questions[i].choice3
//           choice4.textContent = questions[i].choice4
//           i++
//       } else {
//           for (x=0; x < 4; x++) {
//               choices[x].classList.add("hidden")
//           }
//           question.textContent = "No more questions"
//           clearInterval(setQuestion)
//       }
//   }




}

//Event listener

//start button
var button = document.getElementById("startbutton");
button.addEventListener("click", startGame);

//choices button
