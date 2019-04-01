// [======================================== TRIVIA GAME SETUP ========================================]
// For this project, I opted to not set the markup at the start and instead to have js do the rendering.
// I wanted to practice DOM manipulation and traversals - this will help later when building dynamic apps.

var questionsArray = [ // question array of objects 
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
        answer: 'type 1-a',
        choices: ['type 1-a', 'degrasse', 'newtonian', 'type 1-b'],
    },
    {
        question: 'what is the surface temperature of venus?',
        answer: '864 f',
        choices: ['864 f', '120 c', '675 f', '100 k'],
    },
    {
        question: 'to which planet does the moon TiTAn belong?',
        answer: 'saturn',
        choices: ['jupiter', 'uranus', 'saturn', 'venus'],
    },
    {
        question: 'The famous Pale bLue Dot image was taken by which spacecraft?',
        answer: 'voyager 1',
        choices: ['sputnik', 'voyager 2', 'voyager 1', 'cassini'],
    },
    {
        question: 'what is the upper threshold of the suns gravitational influence?',
        answer: 'oort cloud',
        choices: ['oort cloud', 'kaiper belt', 'astroid belt', 'pluto'],
    }

];

var activeAnswers = 0; // count for active answers (used to set the submit button to blink once all questions have been answered)
var correctAnswers = 0;




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

        document.getElementById(answerContainerID).appendChild(choice); // appends button to the question block by ID 
    };
    // [========== END ANSWER CHOICES ==========]
};
// [==========] END QUESTION BLOCK ELEMENTS [==========]

// [==========] BEGIN USER-INPUTS AND GAME INTERACTIONS [==========]
$(document).ready(function () {

    console.log("Stayed at the ace hotel!"); // ready for the app to run 
    preventTimerCheck = true;

    function check() {
        for (b = 0; b < questionsArray.length; b++) {
            buttonToCheck = '#answer_Container_' + b; // grabs the button container to access children (buttons)
            answer = $(buttonToCheck).children(".active").text();
            if  (answer === questionsArray[b].answer) { // 'active' class compares text content (answer) to answer key in questionsArray objects
                console.log('Question ' + b + ' is correct! The answer is ' + questionsArray[b].answer + '.'); // feedback for correct answer
                row = $('<div>');
                row.addClass('checkRow');

                question = questionsArray[b].question;
                row.append(b + '. ' + question);
                req = 'request > ' + answer + '  |  response > ' + questionsArray[b].answer + '  |  result > ok';
                preventTimerCheck = false;

                $('#results').append(row);
                $('#results').append(req);

                correctAnswers++;
            } else {
                console.log('Question ' + b + ' is incorrect... The answer is ' + questionsArray[b].answer) + '.'; // feedback for incorrect answer
            };
        };


    };

    // [==========] BEGIN TIMER [==========]
    var counter = {
        end: 30, // countdown timer - seconds 
        endMessage: 'TimeouT', // message for time ending
    }; // declares counter object

    timerEl = document.getElementById('timerCount'); // grab our div to show counter

    // Start if not past end date 
    if (counter.end > 0) {
        secTicker = setInterval(function () {
            // Stop if passed end time
            counter.end--;
            if (counter.end <= 0) {
                clearInterval(secTicker);
                counter.end = counter.endMessage;

                if (preventTimerCheck) {
                check(); // calls function to check win conditions
                } else {
                    console.log('Check() on timeout prevented.')
                };
            }

            // Calculate remaining time
            var secs = counter.end;

            // Update HTML elements
            timerEl.innerHTML = secs;
        }, 1000);  // one second intervals
    }

    // [==========] END TIMER [==========]

    // buttons will need to have an active class added and removed to/from siblings to indicate this is our answer selection
    $('.buttonChoice').on('click', function () {
        $(this).addClass('active'); // sets the button class to active.  active class determines user answer
        $(this).siblings().removeClass('active'); // removes active class from other button options 
        var counta = $(".active").length; // counts active classes (once === question count the submit button flashes)

        if (counta === questionsArray.length) {
            $('#run').addClass('blink'); // sets the submit button to blink 
        };
    });

    $('#run').on('click', check);

   
});


// [==========] END USER-INPUTS AND GAME INTERACTIONS [==========]
