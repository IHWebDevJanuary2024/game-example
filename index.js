console.log("index.js running");
const boardElement = document.querySelector("#game-board");

console.log(boardElement.getBoundingClientRect()) // that's how we get the width and height of an element

const boardWidth = boardElement.getBoundingClientRect().width;
const boardHeight = boardElement.getBoundingClientRect().height;

const game = new Game(5);
/* setInterval(() => {
    myEnemy.move()
    myEnemy.checkForBoundaries()
}, 30) */

let enemyCreationFrame = 50;
let scoreIncrementFrame = 10;
let enemyVelocity = 10;


function checkGameOver(game) {
    if (game.gameOver || game.lives < 0) {
        game.gameOver = true;
        alert("Game Over");
        return true;
    }
    return false;
}

function createEnemy(game) {
    if (game.frames % enemyCreationFrame === 0) {
        game.enemies.push(new Enemy(enemyVelocity));
        console.log(game.enemies);
    }
}

function gameLoop() {
    if (checkGameOver(game)) {
        return;
    }

    game.frames++;
    game.player.crashTest();

    if (game.frames % scoreIncrementFrame === 0) {
        game.score++;
        game.updateScore();
    }

    createEnemy(game);

    game.enemies.forEach((enemy) => {
        enemy.move()
        enemy.checkForBoundaries()
    })
    requestAnimationFrame(gameLoop); // we can create an infinite loop without braking it;
}

requestAnimationFrame(gameLoop);

document.addEventListener("keydown", (event) => {
    if (game.gameOver === true) {
        return;
    }
    game.player.move(event.key);
})