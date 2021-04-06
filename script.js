//Variable of Button
var highScoreButton = document.getElementById("headerHighscore");
var startButton = document.getElementById("startButtonHTML");
var scoreSubmitButton = document.querySelector(".scoreSubmit");
var goBackButton = document.querySelector(".goBackToStart");
var clearHighScoreButton = document.querySelector(".clearHighscore");

//Different Pages/Section
var headerSection = document.getElementById("headerContainer");
var startSection = document.getElementById("startContainer");
var quizSection = document.getElementById("quizContainer");
var correctResponse = document.getElementById("quizResponseCorrect");
var inCorrectResponse = document.getElementById("quizResponseIncorrect");
var scoreSection = document.getElementById("scoreContainer");
var highscoreSection = document.getElementById("highscoreContainer");

//Variables needed
var timerHeader =  document.getElementById("headerTime");
var currentScore, quizTime; 


//Compile Question Details
var questions = [
    {
    numb:1,
    question: "What is 2+2?",
    answer: "4",
    answers: [
         {text: "2"}, 
         {text: "3"},
         {text: "4"},
         {text: "5"},
     ],
     },
    {
    numb:1,
    question: "What is 1+2?",
    answer: "3",
    answers: [
         {text: "2"}, 
         {text: "3"},
         {text: "4"},
         {text: "5"},
     ]
    }
]

//Add EventListener Function to each button & related functions
highScoreButton.addEventListener("click",highScorePage);
startButton.addEventListener("click",quizPage);
scoreSubmitButton.addEventListener("click",highScorePage);
goBackButton.addEventListener("click",startPage);
clearHighScoreButton.addEventListener("click",ClearHighscoreButton);

function highScorePage(){
    if (quizSection.classList.contains("hide") && scoreSection.classList.contains("hide")){
        startSection.classList.add('hide');
        headerSection.classList.add('hide');
        highscoreSection.classList.remove('hide');
    } else if (startSection.classList.contains("hide") && scoreSection.classList.contains("hide")){
        quizSection.classList.add('hide');
        headerSection.classList.add('hide');
        highscoreSection.classList.remove('hide');
    } else if (startSection.classList.contains("hide") && highscoreSection.classList.contains("hide")){
        scoreSection.classList.add('hide');
        headerSection.classList.add('hide');
        highscoreSection.classList.remove('hide');
    } else{
        location.reload();
    }
}

function quizPage(){
    startSection.classList.add('hide');
    quizContainer.classList.remove('hide');
    currentScore = 0;
    quizTime = 30;

    let que_count = 0;

    showQuestions(0);

    //replacing the question text and Anwsers
    function showQuestions (index){
        const que_text = document.querySelector(".que_text");
        const option_list = document.querySelector(".option_list");
        let que_tag = '<h1>' + questions[index].numb + '. '+ questions[index] + '</h1>';
        let option_tag = '<button class="option">'+ questions[index].options[0] +'</button>'
        + '<button class="option">'+ questions[index].options[1] +'</button>'
        + '<button class="option">'+ questions[index].options[2] +'</button>'
        + '<button class="option">'+ questions[index].options[3] +'</button>';
        que_text.innerHTML = que_tag;
        option_list.innerHTML = option_tag;

        const option = option_list.querySelectorAll(".option");

        for(i=0; i < option.length; i++){
            option[i].setAttribute("onclick", "optionSelected(this)");
        }
    }

    //Timer Quiz Area
    var timer = setInterval(timeInterval, 1000);

    function timeInterval(){
        if(quizTime>=0){
            timerHeader.textContent = "Time: "+ quizTime;
            quizTime --;
        }else{
            clearInterval(timer)
            scoreSubmitPage()
        }
    }


}

function scoreSubmitPage(){
    quizSection.classList.add('hide');
    scoreSection.classList.remove('hide');
}

function startPage(){
    highscoreSection.classList.add('hide');
    startSection.classList.remove('hide');
    headerSection.classList.remove('hide');
}

function ClearHighscoreButton(){
    //function to clear score
}



