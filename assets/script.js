// declare the array of questions and answers
var questions = [
    {
    question: "What does NaN respresent in JavaScript?",
    answers: [
            {text:"A type of bread", correct:false},
            {text:"Not a Number", correct:true},
            {text:"A syntax error", correct:false},
            {text:"None", correct:false}
        ]
    },
    {
    question: "What does 'this' refer to in JavaScript?",
    answers: [
            {text:"The current function", correct:false},
            {text:"The global object", correct:false},
            {text:"The current object's parent", correct:false},
            {text:"The object the function belongs to", correct:true}
        ]
    },
    {
        question: "What does the forEach method do in JavaScript?",
        answers: [
                {text:"Adds a new element to an array", correct:false},
                {text:"Removes an element from an array", correct:false},
                {text:"Executes a function once for each element in an array", correct:true},
                {text:"Reverses the order of an array", correct:false}
            ]
    },
    {
        question: "What is the correct syntax of a for loop in JavaScript?",
        answers: [
                    {text:"for (var i=0; i<5; i++)", correct:true},
                    {text:"for (i=0; i<5; i++)", correct:false},
                    {text:"for (var i= 5; i>0; i--)", correct:false},
                    {text:"for (i=5; i>0; i--)", correct:false}
                ]
    },
    {
        question: "Inside which HTMl element do we put the JavaScript?",
        answers: [
                    {text:"js", correct:false},
                    {text:"scripting", correct:false},
                    {text:"javascript", correct:false},
                    {text:"script", correct:true}
                ]
    },
        ];

   

var questionEl = document.getElementById("question");
var answers = document.getElementById("answer-buttons");
var scoreEl = document.getElementById("score");

var currentQuestionIndex = 0;
var score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    countdown();
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionEl.innerHTML = questionNo + ": " + currentQuestion.question;

    currentQuestion.answers.forEach(answers => {
        const button = document.createElement("button");
        button.innerHTML = answers.text;
        button.classList.add("btn");
        document.getElementById("answer-buttons").appendChild(button);
    }); 
   
}
var lastAnswer = document.getElementById("last-answer");

answers.addEventListener("click", function(event){
    event.preventDefault();
    var selection = event.target
    currentQuestionIndex++;
    console.log(selection);
    if(selection.dataset.correct=true){
        lastAnswer.innerHTML = "Correct!";
        timeLeft+10;
        var userScore = score++;
    }
    else{
        lastAnswer.innerHTML = "Wrong!";
        timeLeft-10;
    }
    showQuestion();
    scoreEl.innerHTML= ("Your Score: "+ userScore);
    console.log(userScore);
   })



function resetState(){
    while(answers.firstChild){
        answers.removeChild(answers.firstChild);
    }
}

var timeLeft = 10;
var timeEl = document.querySelector(".time");

// Timer that counts down from 30
function countdown() {
  timeEl.textContent = timeLeft + " seconds remaining"
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
      // As long as the `timeLeft` is greater than 1
      if (timeLeft > 1) {
        // Set the `textContent` of `timerEl` to show the remaining seconds
        timeEl.textContent = timeLeft + ' seconds remaining';
        // Decrement `timeLeft` by 1
        timeLeft--;
      } else if (timeLeft === 1) {
        // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
        timeEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } else {
        // Once `timeLeft` gets to 0, set `timerEl` to say 'Times Up'
        timeEl.textContent = 'Times Up!';
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
        // Call the `displayResults()` function
        displayResults();
      }
    }, 1000);
  }
function displayResults(){
 window.prompt("Enter your initials to record your score!");
}


startQuiz();




