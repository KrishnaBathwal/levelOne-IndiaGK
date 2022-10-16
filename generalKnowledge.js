var readlineSync = require("readline-sync");

var score = 0;

var highScores = [
  {
    Name: "Vrinda",
    Score: 5
  },
  {
    Name: "Shivam",
    Score: 4
  }
]


function welcomePlayer() {
  var playerName = readlineSync.question("What is your name? : ");
  console.log("Welcome ", playerName, "\nLet's start the quiz.");
  console.log("-----------------------");

  for (var i = 0; i < questions.length; i++) {
    quiz(questions[i].question, questions[i].answer);
  }
}

var questions = [
  {
    question: "Is India the 7th largest country?",
    answer: "Yes"
  },
  {
    question: "Is India the 2nd most populated country in the world?",
    answer: "Yes"
  },
  {
    question: "Is eagle the national bird of India?",
    answer: "No"
  },
  {
    question: "Is rose the national flower of India?",
    answer: "No"
  },
  {
    question: "Is Delhi the capital of India?",
    answer: "Yes"
  }
]

function quiz(ques, ans) {
  console.log(ques);
  var userAnswer = readlineSync.question("Yes or No? : ");
  if (userAnswer == ans) {
    score += 1;
    console.log("Yay!! You are right!!");
  }
  else {
    console.log("Oops!! It's not right!!");
  }
  console.log("------------------");
}

function displayScore() {
  console.log("Your final score is: ", score, "out of 5");
  console.log("-----------------------");
  console.log("The highest scores are:")
  for (var i = 0; i < highScores.length; i++) {
    console.log(highScores[i].Name + " : " + highScores[i].Score);
  }
  console.log("-----------------------");
  console.log("If you want to me to update the list of highscores, ping me, I will update it.");
}

welcomePlayer();
displayScore();