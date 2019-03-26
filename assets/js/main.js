
// [======================================== TRIVIA GAME SETUP ========================================]
// For this project, I opted to not set the markup at the start and instead to have js do the rendering.
// I wanted to practice DOM manipulation and traversals - this will help later when building dynamic apps.


// declaring our variables
// declaring our functions

// question array of objects
var questionsArray = [
    {
        question: 'What is your Home planet?',
        answer: 'earth',
        choices: ['earth', 'mars', 'jupiter', 'venus'],
    },
    {
        question: 'which planet in our solar system is the largest?',
        answer: 'jupiter',
        choices: ['mercury', 'mars', 'jupiter', 'venus'],
    },
    {
        question: 'what type of supernova is considered the standard candle?',
        answer: 'type 1-A',
        choices: ['type 1-a', 'degrasse', 'newtonian', 'type 1-b'],
    },
    {
        question: 'what is the surface temperature of venus?',
        answer: 'jupiter',
        choices: ['864 f', '120 c', '675 f', '100 k'],
    },
    {
        question: 'to which planet does the moon TiTAn belong?',
        answer: 'saturn',
        choices: ['jupiter', 'uranus', 'saturn', 'venus'],
    },
    {
        question: 'what is the threshold of the suns gravitational influence?',
        answer: 'ort cloud',
        choices: ['oort cloud', 'kaiper belt', 'astroid belt', 'pluto'],
    }

];

// add a random background image via css to body for each new game (need array and random number gen)
// add a randomizer and large question bank the questions can be shuffled for each game
// add countdown timer element with changing colors as clock gets below 10 seconds or something similar

// [==========] BEGIN QUESTION BLOCK ELEMENTS [==========]

for (i = 0; i < questionsArray.length; i++) { // loops through question objects to create a new question block

    var questionBlockID = 'question_Block_' + i;
    var questionBlock = document.createElement('div'); // creates the question block element

    document.getElementById('app').append(questionBlock); // appends question block div to the app element

    questionBlock.classList.add('question_Block'); // assigns class name to question block
    questionBlock.setAttribute("id", questionBlockID); // sets ID for appending the question container element

    var questionCont = document.createElement('h6'); // creates the question container 
    questionCont.classList.add('question_Container'); // assigns class name to question container

    var content = document.createTextNode((i + 1) + '. ' + questionsArray[i].question); // create text node for the question
    questionCont.appendChild(content); // adds question text to question container element

    document.getElementById(questionBlockID).append(questionCont); // appends question container element to the question block element (by ID above)

    var answerContainerID = 'answer_Container_' + i; // assigns ID to append answers 
    var answerCont = document.createElement('div'); // creates the answers container
    answerCont.classList.add('answer_Container'); // assigns class name to answers container

    document.getElementById(questionBlockID).append(answerCont); // adds answers container to the question block below the questions container
    answerCont.setAttribute("id", answerContainerID); // assigns answer container ID to append button choices

    // [========== BEGIN ANSWER CHOICES ==========]
    for (a = 0; a < questionsArray[i].choices.length; a++) { // loops thru each answer choice in our question object to create a button

        var choice = document.createElement('button'); //creates button element
        choice.setAttribute("class", "buttonChoice"); // sets class

        var contentChoice = document.createTextNode(questionsArray[i].choices[a]); // creates answer button
        choice.appendChild(contentChoice); // adds answer text to button

        choice.setAttribute('value', i); // sets value to represent the object in the questionsArray to which it corresponds for checking answers

        document.getElementById(answerContainerID).appendChild(choice); // appends button to the question block by ID 


    };

    // [========== END ANSWER CHOICES ==========]
};

// [==========] END QUESTION BLOCK ELEMENTS [==========]


// A $( document ).ready() block.
$(document).ready(function () {
    console.log("Stayed at the ace hotel!");

    // buttons will need to have an active class added and removed to/from siblings to indicate this is our answer selection
    $('.buttonChoice').on('click', function () {
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    });

    // check all questions 
    // slecting answers will need to grab the text content of the button and compare it to the parent div's 'questionBlock' ID (0, 1, 2, etc.).
    // using the array position as an ID will give us an easy way to access that object (0, 1, etc.) to check for correct answers

});


    // -- OUTDATED AND CAN BE REMOVED - QUESTION BLOCK GEN
    // var questionBlock = document.createElement('div'); // creates the question block
    // questionBlock.classList.add('questionBlock'); // assigns class name to question block
    // questionBlock.setAttribute("id", i); // sets value for question block to grab for answer checking later

    // var content = document.createTextNode(questionsArray[i].question); // create text node for the question
    // questionBlock.appendChild(content); // adds question text to div

    // document.getElementById('app').append(questionBlock); // appends question div to the app element
    // // END RENDERING OF QUESTION BLOCK, QUESTION, AND ANSWER CONTAINERS 