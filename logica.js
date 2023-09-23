let pointsHuman = 0;
let pointsAI = 0;


let pointsHumanC = document.getElementById('points-human');
let pointsAIC = document.getElementById('points-AI')
let pointContainer = document.getElementById("win-point");
let containerUserMove = document.getElementById("user-move");
let containerPCMove = document.getElementById("pc-move");
let restart = document.getElementById("restart")
let instructions = document.getElementById("instructions");
let game = document.querySelector(".game");

let weapons = document.querySelectorAll(".weapon");
weapons.forEach(b => {
    b.addEventListener("click", Play);
});


function Play(e)
{
    let movePc = Math.floor(Math.random() * weapons.length);
    let userMove = e.currentTarget.id;

    if(movePc == 0)
    {
        movePc = "piedra";
    }
    if(movePc == 1)
    {
        movePc = "papel";
    }
    if(movePc == 2)
    {
        movePc = "tijera";
    }

    if ((userMove === "btn-rock" && movePc === "tijera") ||(userMove === "btn-scissors" && movePc === "papel")
     ||(userMove === "btn-paper" && movePc === "piedra")) {
        UserWins();
    } else if (
        (movePc === "piedra" && userMove === "btn-scissors") ||
        (movePc === "tijera" && userMove === "btn-paper") ||
        (movePc === "papel" && userMove === "btn-rock")
    ) {
        PCWins();
    } else {
        Draw();
    }

    message.classList.remove("disabled");
    
    if (userMove === "btn-paper")
    {
    containerUserMove.innerText = "papel";
    }
    else if (userMove === "btn-rock")
    {
    containerUserMove.innerText = "piedra";
    }
    else if (userMove === "btn-scissors")
    {
        containerUserMove.innerText = "tijera";
    }

    containerPCMove.innerText = movePc;

    if (pointsHuman === 5 || pointsAI === 5) {

        if (pointsHuman === 5) {
            instructions.innerText = "🔥 ¡Ganaste el juego! 🔥"
        }

        if (pointsAI === 5) {
            instructions.innerText = "😭 ¡La computadora ganó el juego! 😭"
        }

        game.classList.add("disabled");
        restart.classList.remove("disabled");
        restart.addEventListener("click", Restart);
    }


}

function UserWins() {
    pointsHuman++;
    pointsHumanC.innerText = pointsHuman;
    pointContainer.innerText = "¡Ganaste un punto!"
}

function PCWins() {
    pointsAI++;
    pointsAIC.innerText = pointsAI;
    pointContainer.innerText = "¡La computadora ganó un punto!";
}

function Draw() {
    pointContainer.innerText = "¡Empate!";
}

function Restart() {
    restart.classList.add("disabled");
    game.classList.remove("disabled");
    message.classList.add("disabled");

    pointsHuman = 0;
    pointsAI = 0;
    
    pointsHumanC.innerText = pointsHuman;
    pointsAIC.innerText = pointsAI;

    instructions.innerText = "El primero en llegar a 5 puntos gana."
}



