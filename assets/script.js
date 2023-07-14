var questions = [
    {
    question: "What is 1 + 1?",
    answers: [
            {text:"2", correct:true},
            {text:"3", correct:false},
            {text:"4", correct:false},
            {text:"5", correct:false}
        ]
    },
    {
    question: "What is 2 + 2?",
    answers: [
            {text:"Yes", correct:false},
            {text:"No", correct:false},
            {text:"maybe", correct:false},
            {text:"4", correct:true}
        ]
    },
    {
        question: "What is 3 + 3?",
        answers: [
                {text:"Yes", correct:false},
                {text:"No", correct:false},
                {text:"maybe", correct:false},
                {text:"6", correct:true}
            ]
    },
    {
        question: "4 + 4?",
        answers: [
                    {text:"Yes", correct:false},
                    {text:"No", correct:false},
                    {text:"maybe", correct:false},
                    {text:"8", correct:true}
                ]
    }
        ];

   

var questionEl = document.getElementById("question");
var answers = document.getElementById("answer-buttons");
var nextBtn = document.getElementById("next");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
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
        if(answers.correct){
            button.dataset.correct = answers.correct
        }
        button.addEventListener("click", selectAnswer);
    }); 
}

function resetState(){
    nextBtn.style.display = "none";
    while(answers.firstChild){
        answers.removeChild(answers.firstChild);
    }
}

function selectAnswer(event){
    preve;
    const selectedBtn = event.target;
    const isCorrect = selectedBtn.dataset.correct == "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
    }else{
        selectedBtn.classList.add("incorrect");
    }

}

startQuiz();

//$('#question').text('Hey man?');


