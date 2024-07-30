let rockBtn = document.querySelector("#rock");
let paperBtn = document.querySelector("#paper");
let scissorsBtn = document.querySelector("#scissors");

let yourScore = document.querySelector("#yourScore");
let ComScore = document.querySelector("#computerScore");
let tieScore = document.querySelector("#tieScore");
let result = document.querySelector("#result");

let mychoice = 0; // 1 for rock, 2 for paper and 3 for scissors
let yScores = 0;
let cScores = 0;
let tScores = 0;
const rpsGame = () => {
    let comChoice = Math.floor(Math.random()*3)+1;
    

    if(comChoice === mychoice){
        tScores += 1;
        tieScore.textContent = tScores;
        result.innerText = "Match Tie";
    }
    else if (mychoice === 1 && comChoice === 3
        || mychoice === 2 && comChoice === 1 || 
        mychoice === 3 && comChoice === 2
    ){
        yScores +=1;
        yourScore.textContent = yScores;
        result.innerText = "You Won The Match";
    }
    else{
        cScores +=1;
        ComScore.textContent = cScores;
        result.innerText = "Computer Won The Match";
    }
}

rockBtn.addEventListener("click", () => {
    mychoice = 1;
    rpsGame();
})
paperBtn.addEventListener("click", () => {
    mychoice = 2;
    rpsGame();
})
scissorsBtn.addEventListener("click", () => {
    mychoice = 3;
    rpsGame();
})