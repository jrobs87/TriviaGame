
// [========== TRIVIA GAME SETUP ==========]

// declaring our variables

// question array of objects
var questionsArray = [
    {
        question: 'what is your home planet?',
        answer: 'earth',
        choices: ['earth', 'mars', 'jupiter', 'venus'],
    },

];

// loops through questin=on objects to create a new question block
for (i = 0; i < questionsArray.length; i++) {

    var questionBlock = document.createElement('div'); // creates the question block
    questionBlock.classList.add('questionBlock'); // assigns class name to question block
    questionBlock.setAttribute("id", i); // sets value for question block to grab for clicks later

    var content = document.createTextNode(questionsArray[i].question); // create text node for the question
    questionBlock.appendChild(content); // adds question text to div

    document.getElementById('app').append(questionBlock); // appends question div to the app element

    // loops thru each answer choice in our question object to create a button
    for (a = 0; a < questionsArray[i].choices.length; a++) {

        var choice = document.createElement('button'); //creates button element
        choice.setAttribute("class", "buttonChoice"); // sets value for question block to grab for clicks later

        var contentChoice = document.createTextNode(questionsArray[i].choices[a]); // creates answer button
        choice.appendChild(contentChoice); // adds answer text to button

        document.getElementById('0').appendChild(choice); // appends button to the question block by ID -  this will require making a new container first
    };
};


//declaring our functions

// A $( document ).ready() block.
$(document).ready(function () {
    console.log("Stayed at the ace hotel!");
});