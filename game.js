class Game {
    constructor(lives) {
        this.enemies = [];
        this.player = new Player(100, 100);
        this.score = 0;
        this.frames = 0;
        this.gameOver = false;
        this.lives = lives;
        this.updateLives();
        this.updateScore();
    }
    updateLives() {
        document.querySelector("#lives").innerText = this.lives;
    }
    updateScore() {
        document.querySelector("#score").innerText = this.score;
    }
}