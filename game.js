class Game {
    constructor(lives) {
        this.enemies = [];
        this.player = new Player(100, 100);
        this.score = 0;
        this.frames = 0;
        this.gameOver = false;
        this.lives = lives;
        this.updateLives();
    }
    updateLives() {
        document.querySelector("#lives").innerText = this.lives;
        if (this.lives <= 0) {
            this.gameOver = true;
        }
    }
    updateScore() {
        document.querySelector("#score").innerText = this.score;
    }
}