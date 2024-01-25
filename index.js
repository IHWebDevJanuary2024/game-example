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


function gameLoop (){
    game.frames++;
    game.player.crashTest()
    if (game.frames % 10 === 0) {
        game.score++;
        game.updateScore();
    }
    if(game.frames % 50 === 0){
        game.enemies.push(new Enemy(10));
        console.log(game.enemies);
    }
    game.enemies.forEach((enemy)=>{
        enemy.move()
        enemy.checkForBoundaries()    
    })
    requestAnimationFrame(gameLoop); // we can create an infinite loop without braking it;
}

requestAnimationFrame(gameLoop);

document.addEventListener("keydown", (event) => {
    console.log(event.key);
    game.player.move(event.key);
})