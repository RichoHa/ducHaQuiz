//Create a Start Button Variable
var startButton = document.getElementById("start");
var startContainer = document.getElementById("startContainer");
var quizContainer = document.getElementById("quizContainer");


//When mouse clicks start button, go to startGame function.
startButton.addEventListener('click', startGame);

function startGame(){
    console.log("started");
    startContainer.classList.add('hide');
    quizContainer.classList.remove('hide');
}

//Compile Question Details
var totalQuestion = [
   {
    questions: "What is 2+2?",
    answers: [
        {text: "2", correct: false}, 
        {text: "3", correct: false},
        {text: "4", correct: true},
        {text: "5", correct: false},
    ],
    },
   {
    questions: "What is 1+2?",
    answers: [
        {text: "2", correct: false}, 
        {text: "3", correct: true},
        {text: "4", correct: false},
        {text: "5", correct: false},
    ],
    },
   {
    questions: "What is 1+1?",
    answers: [
        {text: "2", correct: false}, 
        {text: "3", correct: false},
        {text: "4", correct: true},
        {text: "5", correct: false},
    ],
    },
   {
    questions: "What is 2+3?",
    answers: [
        {text: "2", correct: false}, 
        {text: "3", correct: false},
        {text: "4", correct: false},
        {text: "5", correct: true},
        ],
    }
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
