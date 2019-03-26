
// [========== TRIVIA GAME SETUP ==========]

// declaring our variables

// question array of objects
var questionsArray = [
    {
        question: 'what is your home planet?',
        answer: 'earth',
        choices: ['earth', 'mars', 'jupiter'],
    },
    { question: 'what is the fourth planet from the sun?', answer: 'mars' },
];

for (i = 0; i < questionsArray.length; i++) {
    var question = document.createElement('div'); // creates the question block
    question.classList.add('questionBlock'); // assigns class name to question block
    question.setAttribute("value", i); // sets value for question block to grab for clicks later

    var content = document.createTextNode(questionsArray[i].question);
    question.appendChild(content);
    document.getElementById('app').append(question);

};


//declaring our functions

// A $( document ).ready() block.
$(document).ready(function () {
    console.log("Stayed at the ace hotel!");
});