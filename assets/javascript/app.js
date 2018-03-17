var questions = [
    {
        question:  "Which city's name translates from Irish Gaelic in to English as 'darkpool'?",
        answers: ["Limerick", "Galway", "Kilkenny", "Letterkenny", "Dublin"],
        correctAnswer: "Dublin"
    },
    {
        question: "Kissing the Blarney Stone is believed to confer what?",
        answers: ["The Gift of Gab", "Irish Good Looks", "Free Beer", "Pot of Gold", "Fertility"],
        correctAnswer: "The Gift of Gab"
    },
    {
        question: "Which saint is supposed to have brought Christianity to Ireland in 453 AD?",
        answers: ["St. Mark", "St. Luke", "St. Christopher", "St. Francis", "St. Patrick"],
        correctAnswer: "St. Patrick"
    },
    {
        question: "What kind of fairy screams to warn of impending death and disaster?",
        answers: ["Pixie", "Leprechaun", "Banshee", "Alven", "Ballybog"],
        correctAnswers: "Banshee"
    },
    {
        question: "How many leaves does a shamrock have?",
        answers: ["Four", "Seven","Three", "Six", "Five"],
        correctAnswer: "Three"
    }

];


$(document).on("click", "#start", function startGame() {
    var answerBtn = $("<div class = 'buttons>");
    $("#text").html(questions[0].question);
    $("#btn1").html(questions[0].answers[0]);
    $("#btn2").html(questions[0].answers[1]);
    $("#btn3").html(questions[0].answers[2]);
    $("#btn4").html(questions[0].answers[3]);
    $("#btn5").html(questions[0].answers[4]);
    countdown();
    

var timeLeft = 15;
var timerId = setInterval(countdown, 1000);

function countdown() {
  if (timeLeft === 0) {
    clearTimeout(timerId);
    alert("Out of Time!!");
  } else {
    $("#display").html(timeLeft + " seconds remaining");
    timeLeft--;
  }
}

});

var userGuess = function(){
    $("<button>").on("click")
};

function correct(){
    if (userGuess() === questions[0].correctAnswer);{
       alert("That's correct!");
}   else {
        alert("That's incorrect!");
    }
};






// function answerButtons() {
//     // var answersArray = questions[0].answers;
//     // Deletes the movies prior to adding new movies
//     // (this is necessary otherwise you will have repeat buttons)
//     $("#answers").empty();
//     // Loops through the array of movies
//     for (var i = 0; i < questions[0].answers.length; i++) {

//       // Then dynamicaly generates buttons for each movie in the array
//       // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
//       var answer = $("<button>");
//       // Adds a class of movie to our button
//       answer.addClass("answerText");
//       // Added a data-attribute
//     //   answer.attr("name", questions.answers[i]);
//       // Provided the initial button text
//       answer.text(answer[i]);
//       // Added the button to the buttons-view div
//       $("#answers").append(answer);
//       console.log(answer);
//     };
// };
// });
