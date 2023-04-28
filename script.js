var questions = [
    {question: "Commonly used data types DO NOT include:", 
    options: ["strings", "booleans", "alerts", "numbers"], 
    answer: "alerts"},

    {question: "The condition in an 'if/else' statement is enclosed within ______.", 
    options: ["quotes", "curly brackets", "parentheses", "square brackets"], 
    answer: "parentheses"},

    {question: "Arrays in Javascript can be used to store ______.", 
    options: ["numbers & strings", "other arrays", "booleans", "all of the above"],
    answer: "all of the above"},

    {question: "String values must be enclosed within ______ when being assigned to variables.", 
    options: ["commas", "curly brackets", "quotes", "parantheses"], 
    answer: "quotes"},

    {question: "A very useful tool used during development and debugging for printing content to the debugger is:", 
    options: ["Javascript", "terminal/bash", "for loops", "console.log"], 
    answer: "terminal/bash"}
]
var userAnswers = ["","","","",""];

// init global var for user correct answer count
var userCorrect = 0;

// init global var for user user score
var userScore = "";

// init global variable for question index - used by the questionState function
var questionIndex = 0;

// init global variable used to start timer
var starTimer = 0;

// init global variable for alloted time of 2 minutes - will be used to manipulate the timer based on wrong answer selections
var secondsLeft = 120;

// init global variable for question prompt text
var questionPrompt = document.getElementById('question-screen');

// init global variable for answer buttons container element 
var ansContainEl = document.getElementById('answer-buttons');

// init global start-button variable
var startButton = document.getElementById('start-btn');

// init global previous-button variable
var prevButton = document.getElementById('prev-btn');

// init global next-button variable
var nextButton = document.getElementById('next-btn');

// init global next-button variable
var submitButton = document.getElementById('submit-btn');

// var quizIntro = $('.quiz-intro');

var quizIntro = document.getElementById('quiz-intro');

var title = document.getElementById('title');


// function defining what is to happen upon quiz start (after start button click event)


function startQuiz(){

    console.log(startButton);

    console.log(quizIntro);

    // start timer
    starTimer = 1;

    // randomize ("suffle") question order. only needs to occur once.
    // randQuestions = shuffle(questions);

    // remove quiz intro page
    quizIntro.setAttribute('class','hide');

    // adding hide class to the start button inorder to remove it from viewport
    startButton.setAttribute('class','hide');
    questionPrompt.removeAttribute('class','hide');



    for (let i = 0; i < questions.length; i++) {
        const element = questions[i];
        console.log(element.question);
        console.log(element.question);
    }
    title.value=element.question;

    // replacing quiz instruction text with first question prompt
   $(questionPrompt).text(randQuestions[questionIndex].question);

    // adding answer options programattically using the first element in question.options object array
    questions[questionIndex].options.forEach(ans => {

        // init button varible and create a new button element for each loop itteration
     let button = $("<button>")

        // create a 3 character unique id to assign to each multiple choise option button. uses first 3 characters of text associated with each button.  
    let buttonId = uniqueId(ans);

        // format button appearance using bootstrap classes 
     $(button).addClass('btn btn-outline-dark btn-block chosen');

        // give each button a unique id using the answer it represents
    $(button).attr("id", buttonId);

        // add multiple chois answer text to button
     $(button).text(ans);

        // append button to answer-button div area
     $("#answer-buttons").append(button);
  })

    // removing hide class to the answer buttons container element, to show first quiz question answers in viewport
  $(ansContainEl).removeClass('hide');

    // removing hide class to the next button element, to show next button in viewport
 $(nextButton).removeClass('hide');

}

// start button event listener
$(startButton).on('click',startQuiz);

