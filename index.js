class Game {

    /**
     * Creates score variables and button components
     */
    constructor(humanScore = 0, computerScore = 0) {
        this.roundCounter = 0;
        this.humanScore = humanScore; // "this." - functions like class variables / data members
        this.computerScore = computerScore;
        this.humanChoice = "";
        this.computerChoice = "";

        this.container = document.querySelector("#container");
        this.buttonDiv = document.createElement("div");
        this.buttonDiv.classList.add("button-container");
        this.rockB = document.createElement("button");
        this.rockB.textContent = "Rock";
        this.scissorB = document.createElement("button");
        this.scissorB.textContent = "Scissors";
        this.paperB = document.createElement("button");
        this.paperB.textContent = "Paper";

        this.textDiv = document.createElement("div");
        this.textDiv.classList.add("text-container");
        this.score = document.createElement("h4");
        this.dialogue = document.createElement("h3");


        // this.scissorB.addEventListener('click', () => { // arrow function, same as what's below
        //     // something
        // });

        //need to use () => to pass function to the event listeners
        this.rockB.addEventListener('click', () => this.setHumanChoice(1));
        this.scissorB.addEventListener('click', () => this.setHumanChoice(2));
        this.paperB.addEventListener('click', () => this.setHumanChoice(3));
        this.buttonDiv.append(this.rockB);
        this.buttonDiv.append(this.scissorB);
        this.buttonDiv.append(this.paperB);
        this.container.append(this.buttonDiv);

        this.dialogue.textContent = "Click on a button to play Rock Paper Scissors!";
        this.textDiv.append(this.dialogue);
        this.textDiv.append(this.score);
        this.container.append(this.textDiv);

    }

    getComputerChoice() {
        let num = Math.floor((Math.random()) * 3 + 1);
        return this.getAction(num)
    };

    // getHumanChoice() {
    //     let num;
    //     do {
    //         num = parseInt(prompt("Please enter 1, 2, or 3 (rock, scissors, or paper, respectively)"));
    //     } while (Number.isNaN(num) || num < 1 || num > 3);
    //     return this.getAction(num);
    // };

    setRoundWinner() {
        if (this.humanChoice === "rock") {
            if (this.computerChoice === "scissors") {
                ++this.humanScore;
            }
            else if (this.computerChoice === "paper") {
                ++this.computerScore;
            }
        }

        if (this.humanChoice === "paper") {
            if (this.computerChoice === "scissors") {
                ++this.computerScore;
            }
            else if (this.computerChoice === "rock") {
                ++this.humanScore;
            }
        }

        if (this.humanChoice === "scissors") {
            if (this.computerChoice === "rock") {
                ++this.computerScore;
            }
            else if (this.computerChoice === "paper") {
                ++this.humanScore;
            }
        }
        this.dialogue.textContent = `You chose ${this.humanChoice} and the CPU chose ${this.computerChoice}`;
        this.score.textContent = `You: ${this.humanScore}, CPU: ${this.computerScore}`;
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
    }

    setHumanChoice(num) {
        this.humanChoice = this.getAction(num);
        this.computerChoice = this.getComputerChoice();
        this.playRound();
    };

    playRound() {
        this.setRoundWinner();
        ++this.roundCounter;
        if (this.roundCounter == 3) {
            this.determineWinner();
        }
    };

    determineWinner() {
         this.dialogue.textContent = `You chose ${this.humanChoice} and the CPU chose ${this.computerChoice}`;
        if (this.humanScore > this.computerScore) {
            this.score.innerHTML = `You: ${this.humanScore}, CPU: ${this.computerScore} <br><br> You won!`;
        } else if (this.humanScore == this.computerScore) {
             this.score.innerHTML = `You: ${this.humanScore}, CPU: ${this.computerScore} <br><br> You tied`;
        } else {
             this.score.innerHTML = `You: ${this.humanScore}, CPU: ${this.computerScore} <br><br> You lost :(`;
        }

        this.roundCounter = 0;
        this.humanScore = 0;
        this.computerScore = 0;

    };
}
let game = new Game();
