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