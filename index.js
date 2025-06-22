class Game {
    constructor(humanScore = 0, computerScore = 0) {
        this.humanScore = humanScore;
        this.computerScore = computerScore;
    }

    getComputerChoice() {
        let num = Math.floor((Math.random()) * 3 + 1);
        return this.getAction(num)
    };

    getHumanChoice() {
        let num;
        do {
            num = parseInt(prompt("Please enter 1, 2, or 3 (rock, scissors, or paper, respectively)"));
        } while (Number.isNaN(num) || num < 1 || num > 3);
        return this.getAction(num);
    };

    getRoundWinner(humanChoice, computerChoice) {
        if (humanChoice === "rock") {
            if (computerChoice === "scissors") {
                ++this.humanScore;
            }
            else if (computerChoice === "paper") {
                ++this.computerScore;
            }
        }

        if (humanChoice === "paper") {
            if (computerChoice === "scissors") {
                ++this.computerScore;
            }
            else if (computerChoice === "rock") {
                ++this.humanScore;
            }
        }

        if (humanChoice === "scissors") {
            if (computerChoice === "rock") {
                ++this.computerScore;
            }
            else if (computerChoice === "paper") {
                ++this.humanScore;
            }
        }

        console.log(`Player score: ${this.humanScore}, Computer Score: ${this.computerScore}\n`);
    }

    getAction(num) {
        let action;
        switch (num) {
            case 1:
                action = "rock";
                break;
            case 2: 
                action = "scissors";
                break;
            case 3: 
                action = "paper";
                break;
        }
        return action;
    };

    playRound() {
        let humanChoice = this.getHumanChoice();
        let computerChoice = this.getComputerChoice();
        this.getRoundWinner(humanChoice, computerChoice);
    };

    playGame() {
        for (let i = 0; i < 3; ++i) {
            this.playRound();
        }
        if (this.humanScore > this.computerScore) {
            console.log("You won!");
        } else if (this.humanScore == this.computerSocre) {
            console.log("You tied");
        } else {
            console.log("You lost")
        }
    };
}

let game = new Game();
game.playGame();
