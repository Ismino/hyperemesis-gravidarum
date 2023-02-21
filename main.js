let question = document.getElementById("quiz");
let choice = Array.from(document.getElementById("choice"));

let qurrentQuestion = ();
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availblyQestions = [];

let question = [
    {
        question: "How many women suffer from Hyperemesis?",
        choice1: "0,3-1%",
        choice2: "10%",
        choice3: "5%",
        answer: "1",
    }
    {
        question: "Up to how many times a day does the pregnant vomit?",
        choice1: "15-20",
        choice2: "5",
        choice3: "22",
        answer: "1",
    }
    {
        question: "Does the pregnant women need hospital care?",
        choice1: "Yes",
        choice2: "No",
        choice3: "Yes,often",
        answer: 3,
    }
    
]

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3; 

startGame = () {
    questionCounter = 0;
    score = 0;
    availblyQestions =[...question];
    console.log(availblyQestions);
    getNewQuestion();
}
getNewQuestion() {
  questionCounter++;
}

startGame();