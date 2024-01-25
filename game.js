class Game {
    constructor() {
        this.enemies = [];
        this.player = new Player(100, 100);
        this.score = 0;
        this.frames = 0;
        this.gameOver = false;
        this.lives = 5;
    }
}