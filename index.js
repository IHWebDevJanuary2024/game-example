console.log("index.js running");
let enemyCreationFrame = 100;
let scoreIncrementFrame = 10;
let enemyVelocity = 10;
let gameLives = 3;

const boardElement = document.querySelector("#game-board");

console.log(boardElement.getBoundingClientRect()) // that's how we get the width and height of an element

const boardWidth = boardElement.getBoundingClientRect().width;
const boardHeight = boardElement.getBoundingClientRect().height;
const gameOverElement = document.querySelector("#game-over");

const game = new Game(gameLives);

/*
 
setInterval(() => {
    myEnemy.move()
    myEnemy.checkForBoundaries()
}, 30) 
*/


function gameLoop() {
    if (!game.gameOver) {
        game.frames++;
        game.player.crashTest()
        game.player.move();
        if (game.frames % enemyCreationFrame === 0) {
            game.enemies.push(new Enemy(enemyVelocity));
            console.log(game.enemies);
        }
        if (game.frames % scoreIncrementFrame === 0) {
            game.score++;
            game.updateScore();
        }
        game.enemies.forEach((enemy) => {
            enemy.move()
            enemy.checkForBoundaries()
        })
        requestAnimationFrame(gameLoop); // we can create an infinite loop without braking it;
    } else { // IF THE GAME IS OVER
        gameOverElement.style.display = "block";
        game.player.element.remove();
        document.querySelector("#final-score").innerText = game.score;
    }
}

requestAnimationFrame(gameLoop);


document.addEventListener("keydown", (event) => {
    if (!game.gameOver) {
        game.player.setDirection(event.key);
    }
})
document.addEventListener("keyup", (event) => {
    console.log("keyup");
    if (!game.gameOver) {
        game.player.setDirection("none");
    }
})
