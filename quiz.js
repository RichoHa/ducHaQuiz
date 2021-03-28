//Create a Start Button Variable
var startButton = document.getElementById(`start`)
var highScoreButton = document.getElementById('startContainer')
var quizContainer = document.querySelector('quizContainer')


//When mouse clicks start button, go to startGame function.
startButton.onclick= startGame();

function startGame(){
    console.log("started");
}


var totalQuestion = [
   {
    question: "What is 2+2?",
    choices: ["2", "3", "4", "5"],
    answer: 2,
   },
   {
    question: "What is 2+3?",
    choices: ["2", "3", "4", "5"],
    answer: 3,
   }, 
   {
    question: "What is 2+1?",
    choices: ["Two", "Three", "Tree", "Tiger"],
    answer: 3,
   }, 
   {
    question: "What is 1+1?",
    choices: ["2", "3", "4", "5"],
    answer: 0,
   },
]


//timer Function
function setTime(){
    var timerInterval = setInterval(function(){
        secondsLeft--;
        document.querySelector(timer).textcontent = "timer: " + secondsLeft;

        if(secondsLeft===0){
            clearInterval(timerInterval);
            window.location.pathname("../ducHaQuiz/scorePage.html");
        }
    },1000);
}
