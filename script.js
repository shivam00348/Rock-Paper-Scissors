let userScore = 0;
let compScore = 0;
// math.random() me hum jis no se multiply krte hain tho usye ik km no humko mil jata h 
const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    //rock,paper, scissors
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
}

const drawGame = () => {
    // console.log("game was draw.");
    msg.innerText = "Game was draw, play again";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        // console.log("You win!.");
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win!, your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        // console.log("You Lose!.");
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose!, ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    // console.log("user choice = ", userChoice);
    //Generate computer choice  -> modar way programming (mtlb chote chote kam ko function se perform krvo)
    const compChoice = genCompChoice();
    console.log("computer choice = ", compChoice);

    if (userChoice === compChoice) {
        //Draw Game
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            //scissors , paper
            userWin = compChoice === "paper" ? false : true;

        } else if (userChoice === "paper") {
            //rock, Scissors
            userWin = compChoice === "Scissors" ? false : true;
        } else {
            //rock , paper
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");

        playGame(userChoice);
    });
});