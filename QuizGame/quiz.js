let url = "https://opentdb.com/api.php?amount=";

let questionsCount = document.querySelector("#questionsCount");
let startBtn = document.querySelector("#startBtn");
let quiz_opt = document.querySelector(".quiz-Option");

let QuizGame = document.querySelector(".QuizGame");
let questions = document.querySelector(".QuizGame h3");
let category = document.querySelector("#category");
let countQuestion = document.querySelector("#countQuestion");
let optionsBtn = document.querySelectorAll(".options button")
let nextBtn = document.querySelector("#nextBtn");

let scoreBoard = document.querySelector(".scoreBoard");
let scores = document.querySelector("#totalQ");
let grade = document.querySelector("#grade");
let restartBtn = document.querySelector("#restart");

let correctScore = 0; let wrongScore = 0; 
let amount; let count = 0;

let correctAns; let optionList; let inCorrectAns;

// Background Image
let bgList = [
    "https://images6.alphacoders.com/476/476288.jpg",
    "https://images5.alphacoders.com/133/1330526.png",
    "https://images3.alphacoders.com/133/1332803.png",
    "https://images8.alphacoders.com/136/1363709.png",
    "https://images.alphacoders.com/135/1350453.png",
    "https://images3.alphacoders.com/134/1342491.png",
    "https://images6.alphacoders.com/820/820024.png",
    "https://images2.alphacoders.com/720/72092.jpg"
]

const backgroundImageChanger = () => {
    randomNum = Math.floor(Math.random() * bgList.length);
    document.body.style.backgroundImage = `url('${bgList[randomNum]}')`;
}
backgroundImageChanger();
// Next Question
nextBtn.disabled = true;
nextBtn.style.opacity = "0.8";

const startGame = () => {
    if(questionsCount.value > 30){
        alert("Maximum Limit is 30");
    }else if(questionsCount.value < 3){
        alert("Minimum Limit is 3");
    }
    else{
        quiz_opt.style.display = "none";
        QuizGame.style.display = "block";
        count++;
        countQuestion.innerText = `${count}/${questionsCount.value}`;
    }
    
}

const loadQuestions = async () => {
    amount = questionsCount.value;

    nextBtn.innerHTML = "Loading...";
    let respons = await fetch(`https://opentdb.com/api.php?amount=1&type=multiple`);
    let data = await respons.json();
    nextBtn.innerHTML = "Next Question";
    showQuestion(data.results[0]);
}

const showQuestion = (data) => {

    questions.innerHTML = data.question;
    category.innerHTML = data.category;
    correctAns = data.correct_answer;
    inCorrectAns = data.incorrect_answers;
    optionList = inCorrectAns;

    optionList.splice(Math.floor(Math.random() * (inCorrectAns.length + 1)), 0, correctAns);

    for(let i = 0; i < optionsBtn.length; i++){
        optionsBtn[i].innerHTML = optionList[i];
    }

    console.log(correctAns);
   
}

for (let index = 0; index < optionsBtn.length; index++) {
    optionsBtn[index].addEventListener("click", () => {
        if(optionsBtn[index].innerText == correctAns){
            optionsBtn[index].style.backgroundColor = "green";
            optionsBtn[index].style.color = "white";
            correctScore++;
        }else{
            optionsBtn[index].style.backgroundColor = "red";
            optionsBtn[index].style.color = "white";
            wrongScore++;

            for(let i = 0; i < optionsBtn.length; i++){
                if (optionsBtn[i].innerText == correctAns){
                    optionsBtn[i].style.backgroundColor = "green";
                    optionsBtn[i].style.color = "white";
                }
            }
        }
        for(let i = 0; i < optionsBtn.length; i++){
            optionsBtn[i].disabled = true;
            optionsBtn[i].style.opacity = "0.8";
            
        }
        nextBtn.disabled = false;
        nextBtn.style.opacity = "1";
    })
}

const nextQuestion = () => {
    if(count < amount){
        count++;
        countQuestion.innerText = `${count}/${amount}`;

        for (let i = 0; i < optionsBtn.length; i++) {
            optionsBtn[i].disabled = false;
            optionsBtn[i].style.backgroundColor = "white";
            optionsBtn[i].style.color = "black";
            optionsBtn[i].style.opacity = "1";
        }
        
        loadQuestions();
    }else{
        scores.innerHTML = `Total Questions: ${amount} <br><br> Correct Answer: ${correctScore} <br><br> Wrong Answer: ${wrongScore}`;
        QuizGame.style.display = "none";
        scoreBoard.style.display = "block";
        calculateGrade();
    }
}

const calculateGrade = () => {
    let percentage = correctScore/amount * 100;
    console.log(percentage);
    if(percentage >= 90 && percentage <= 100){
        grade.innerHTML = "A+";
        grade.style.color = "#1a9641";
    }
    else if(percentage >= 85 && percentage <= 89){
        grade.innerHTML = "A";
        grade.style.color = "#1a9641";
    }
    else if (percentage >= 80 && percentage <= 84) {
        grade.innerHTML = "A-";
        grade.style.color = "#1a9641";
    }
    else if (percentage >= 75 && percentage <= 79) {
        grade.innerHTML = "B+";
        grade.style.color = "#a6d96a";
    }
    else if (percentage >= 70 && percentage <= 74) {
        grade.innerHTML = "B";
        grade.style.color = "#a6d96a";
    }
    else if (percentage >= 65 && percentage <= 69) {
        grade.innerHTML = "C+";
        grade.style.color = "#ffffbf";
    }
    else if (percentage >= 60 && percentage <= 64) {
        grade.innerHTML = "C";
        grade.style.color = "#ffffbf";
    }
    else if (percentage >= 55 && percentage <= 59) {
        grade.innerHTML = "D+";
        grade.style.color = "#fdae61";
    }
    else if (percentage >= 50 && percentage <= 54) {
        grade.innerHTML = "D";
        grade.style.color = "#fdae61";
    }
    else if (percentage >= 40 && percentage <= 49) {
        grade.innerHTML = "E";
        grade.style.color = "#d7191c";
    }
    else if (percentage >= 0 && percentage <= 99) {
        grade.innerHTML = "F";
        grade.style.color = "#d7191c";
    }
}
// loadQuestions();

startBtn.addEventListener("click", () => {
    startGame();
    loadQuestions();
})
nextBtn.addEventListener("click", () => {
    nextQuestion();
})
restartBtn.addEventListener("click", () => {
    window.location.reload();
})
