class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.element = document.querySelector("#player");
        this.width = this.element.getBoundingClientRect().width;
        this.height = this.element.getBoundingClientRect().height;
        this.element.style.left = `${this.x}px`
        this.element.style.top = `${this.y}px`
    }
    move(direction) {
        switch (direction) {
            case "ArrowUp":
                this.y -= 10;
                break;
            case "ArrowDown":
                this.y += 10;
                break;
            case "ArrowLeft":
                this.x -= 10;
                break;
            case "ArrowRight":
                this.x += 10;
                break;
        };

        this.checkForBoundaries()

        this.element.style.left = `${this.x}px`;
        this.element.style.top = `${this.y}px`;
    }
    checkForBoundaries() {
        if (this.x <= 0) {
            this.x = 0;
        }
        if (this.y <= 0) {
            this.y = 0;
        }
        if (this.y >= boardHeight - this.height) {
            this.y = boardHeight - this.height;
        }
        if (this.x >= boardWidth - this.width) {
            this.x = boardWidth - this.width;
        }
    }
    crashTest() {
        game.enemies.forEach((enemy) => {
            if (
                this.x < enemy.x + enemy.width &&
                this.x + this.width > enemy.x &&
                this.y < enemy.y + enemy.height &&
                this.y + this.height > enemy.y
            ) {
                console.log("crash");
                game.lives--;
                game.updateLives();
                enemy.remove();
            }
        });
    }
}