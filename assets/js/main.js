
// [======================================== TRIVIA GAME SETUP ========================================]
// For this project, I opted to not set the markup at the start and instead to have js do the rendering.
// I wanted to practice DOM manipulation and traversals - this will help later when building dynamic apps.


// declaring our variables

// question array of objects
var questionsArray = [
    {
        question: 'what is your home planet?',
        answer: 'earth',
        choices: ['earth', 'mars', 'jupiter', 'venus'],
    },
    {
        question: 'which planet is the largest?',
        answer: 'jupiter',
        choices: ['mercury', 'mars', 'jupiter', 'venus'],
    },
    {
        question: 'what is your home planet?',
        answer: 'earth',
        choices: ['earth', 'mars', 'jupiter', 'venus'],
    }

];

// loops through questin=on objects to create a new question block
for (i = 0; i < questionsArray.length; i++) {

    // [==========] BEGIN TESTING [==========]
    var questionBlockID = 'question_Block_' + i;
    var questionBlock = document.createElement('div'); // creates the question block
    questionBlock.classList.add('question_Block'); // assigns class name to question block
    document.getElementById('app').append(questionBlock); // appends question block div to the app element
    questionBlock.setAttribute("id", questionBlockID); // sets value for question block to grab for answer checking later

    var questionCont = document.createElement('h4'); // creates the question block
    questionCont.classList.add('question_Container'); // assigns class name to question block
    document.getElementById(questionBlockID).append(questionCont); // appends question div to the app element
    questionCont.setAttribute("id", 'question_Container_' + i); // sets value for question block to grab for answer checking later

    var content = document.createTextNode(questionsArray[i].question); // create text node for the question
    questionCont.appendChild(content); // adds question text to div

    var answerContainerID = 'answer_Container_' + i;
    var answerCont = document.createElement('div'); // creates the question block
    answerCont.classList.add('answer_Container'); // assigns class name to question block
    document.getElementById(questionBlockID).append(answerCont);
    answerCont.setAttribute("id", answerContainerID);

    // [==========] END TESTING [==========]


    // var questionBlock = document.createElement('div'); // creates the question block
    // questionBlock.classList.add('questionBlock'); // assigns class name to question block
    // questionBlock.setAttribute("id", i); // sets value for question block to grab for answer checking later

    // var content = document.createTextNode(questionsArray[i].question); // create text node for the question
    // questionBlock.appendChild(content); // adds question text to div

    // document.getElementById('app').append(questionBlock); // appends question div to the app element
    // // END RENDERING OF QUESTION BLOCK, QUESTION, AND ANSWER CONTAINERS 

    // [========== BEGIN RENDERING ANSWER CHOICES ==========]
    for (a = 0; a < questionsArray[i].choices.length; a++) { // loops thru each answer choice in our question object to create a button

        var choice = document.createElement('button'); //creates button element
        choice.setAttribute("class", "buttonChoice"); // sets value for question block to grab for clicks later

        var contentChoice = document.createTextNode(questionsArray[i].choices[a]); // creates answer button
        choice.appendChild(contentChoice); // adds answer text to button

        choice.setAttribute('value', i);

        document.getElementById(answerContainerID).appendChild(choice); // appends button to the question block by ID -  this will require making a new container first
        // [========== END RENDERING ANSWER CHOICES ==========]
    };
};


//declaring our functions

// A $( document ).ready() block.
$(document).ready(function () {
    console.log("Stayed at the ace hotel!");

    // buttons will need to have an active class added and removed to/from siblings to indicate this is our answer selection
    // check all questions 
    // slecting answers will need to grab the text content of the button and compare it to the parent div's 'questionBlock' ID (0, 1, 2, etc.).
    // using the array position as an ID will give us an easy way to access that object (0, 1, etc.) to check for correct answers

});