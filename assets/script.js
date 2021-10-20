function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

//Check correct answers
Question.prototype.correctAnswer = function (choice) {
    return choice === this.answer;
}

function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;

}

Quiz.prototype.getQuestionIndex = function () {
    return this.questions[this.questionIndex];

}

Quiz.prototype.isEnded = function () {
    return this.questions.length === this.questionIndex;

}

//Check user answers
Quiz.prototype.guess = function (answer) {

    if (this.getQuestionIndex().correctAnswer(answer)) {
        this.score++;
    }
    this.questionIndex++;

}


function populate() {
    if (quiz.isEnded()) {
        showScores();
    } else {
        var element = document.getElementById('question');
        element.innerHTML = quiz.getQuestionIndex().text;
        var choices = quiz.getQuestionIndex().choices;
        for (var i = 0; i < choices.length; i++) {
            var element = document.getElementById('choice' + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);

        }

        showProgress();
    }
}

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function () {
        quiz.guess(guess);
        populate();
    }
}

//Question counter
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;

}

//function to display final score and restart
function showScores() {
    var gameOverHtml = "<h1>Result</h1>";
    gameOverHtml += "<h2 id='score'>Score: " + quiz.score + "</h2>" + `<div id="replay">
    <a href="index.html">Take Quiz Again</a>
    </div>`;
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHtml;

}

var questions = [
    new Question("How many time zones are there in Russia?", ["2", "4", "5", "11"], "11"),
    new Question("What’s the national animal of Australia?", ["Red Kangaroo", "Patypus", "Koala", "Dingo"], "Red Kangaroo"),
    new Question("Which language has the most words?", ["Spanish", "English", "Mandarin", "Greek"], "English"),
    new Question("Which artist painted the ceiling of the Sistine Chapel in Rome?", ["da Vinci", "Van Eyck", "Michelangelo", "Banksy"], "Michelangelo"),
    new Question("How many keys does a classic piano have?", ["66", "88", "102", "112"], "88")
];

var quiz = new Quiz(questions);

populate();