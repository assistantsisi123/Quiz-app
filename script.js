function Quiz(Questions) {
    this.score = 0;
    this.Questions = Questions;
    this.currentQuestionIndex = 0;
}

Quiz.prototype.guess = function(answer) {
    if(this.getCurrentQuestion().isCorrectAnswer(answer)) {
        this.score++;
    }
    this.currentQuestionIndex++;
};

Quiz.prototype.getCurrentQuestion = function() {
    return this.Questions[this.currentQuestionIndex];
};

Quiz.prototype.hasEnded = function() {
    return this.currentQuestionIndex >= this.Questions.length;
};

function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
};

var QuizUI = {
    displayNext: function() {
        if(quiz.hasEnded()) {
            this.displayScore();
        } else {
            this.currentQuestion();
            this.displayChoices();
            this.displayProgress();
        }
    
}
}
function diplayQuestion() {
    var questionText = quiz.getCurrentQuestion().text
    this.populateIdwithHTML("question", questionText);
}

 function displayChoices () {
    var choices = quiz.getCurrentQuestion().choices;

    for(var i = 0; i < choices.length; i++) {
        this.populateIdwithHTML("choice" + i, choices[i]);
        this.guessHandler("guess" + i, choices[i]);
    }
}

function displayScore() {
    var gameOverHTML = "<h1>Game Over</h1>";
    gameOverHTML += "<h2> Your score is: " + Quiz.score + " / " + quiz.Question.length + " </h2>";
    this.populateIdwithHTML("quiz", gameOverHTML);
}

function populateIdwithHTML(id, text) {
    var element = document.getElementById(id);
    element.innerHTML = text;
}

function guessHandler(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        QuizUI.displayNext();
    }
}

function displayProgress() {
    var currentQuestionNumber = quiz.currentQuestionIndex + 1;
    this.populateIdwithHTML("progress", "Question " + currentQuestionNumber + " of " + quiz.Questions.length);
}


// create Questions


var questions = [  
    new Question ("which planet has the most moons?", [ "Jupiter", "Uranus", "Saturn", "Mars"], "Saturn")
];

var quiz = new Quiz()