let UserChoiceDisplay = document.getElementById("yourchoice");
let BotChoiceDisplay = document.getElementById("computerchoice");
let Result = document.getElementById("result");
let PossibleResult = document.querySelectorAll("button");
let UserChoice;
let BotChoice;
let ans;
let userScoreDisp = document.getElementById("userScore");
let BotScoreDisp = document.getElementById("BotScore");
let humScore = 0;
let comScore = 0;

PossibleResult.forEach(PossibleResult => PossibleResult.addEventListener('click' , (e) => {
    UserChoice = e.target.id;
    UserChoiceDisplay.innerText = UserChoice;
    GenerateBotChoice();
    ChooseWinner();
}))

function GenerateBotChoice() {
    BotChoice = Math.floor(Math.random() * 3);
    if(BotChoice === 0) ans = "rock";
    else if(BotChoice === 1) ans = "paper";
    else ans = "scissors";

    BotChoiceDisplay.innerText = ans;
}

function ChooseWinner() {
    if(UserChoice === ans)
    {
        Result.innerText = "You had a draw";
        humScore += 0.5;
        comScore += 0.5;
        userScoreDisp.innerText = humScore;
        BotScoreDisp.innerText = comScore;
    }
    if(UserChoice === "rock" && ans == "paper")
    {
        Result.innerText = "Computer Won !!!!!";
        humScore += 0;
        comScore += 1;
        userScoreDisp.innerText = humScore;
        BotScoreDisp.innerText = comScore;
    }
    if(UserChoice === "rock" && ans == "scissors")
    {
        humScore += 1;
        comScore += 0;
        userScoreDisp.innerText = humScore;
        BotScoreDisp.innerText = comScore;
        Result.innerText = "You Won !!!!!";
    }
    if(UserChoice === "paper" && ans == "rock")
    {
        humScore += 1;
        comScore += 0;
        userScoreDisp.innerText = humScore;
        BotScoreDisp.innerText = comScore;
        Result.innerText = "You Won !!!!!";
    }
    if(UserChoice === "paper" && ans == "scissors")
    {
        humScore += 0;
        comScore += 1;
        userScoreDisp.innerText = humScore;
        BotScoreDisp.innerText = comScore;
        Result.innerText = "Computer Won !!!!!";
    }
    if(UserChoice === "scissors" && ans == "paper")
    {
        humScore += 1;
        comScore += 0;
        userScoreDisp.innerText = humScore;
        BotScoreDisp.innerText = comScore;
        Result.innerText = "You Won !!!!!";
    }
    if(UserChoice === "scissors" && ans == "rock")
    {
        humScore += 0;
        comScore += 1;
        userScoreDisp.innerText = humScore;
        BotScoreDisp.innerText = comScore;
        Result.innerText = "Computer Won !!!!!";
    }
}