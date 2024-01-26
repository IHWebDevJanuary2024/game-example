class Enemy {
    constructor(velocity) {
        this.velocity = velocity;
        this.element = document.createElement("div");
        this.element.classList.add("enemy");
        boardElement.appendChild(this.element);
        this.width = this.element.getBoundingClientRect().width;
        this.height = this.element.getBoundingClientRect().height;
        this.x = boardWidth;
        this.y = Math.floor(Math.random() * ((boardHeight * 0.75 - this.height) - boardHeight * 0.25) + boardHeight * 0.25)
        this.element.style.left = `${this.x}px`
        this.element.style.top = `${this.y}px`
    }
    move() {
        this.x -= this.velocity;
        this.element.style.left = `${this.x}px`
    }
    checkForBoundaries() {
        if (this.x <= 0 - this.width) {
            this.deSpawn()
        }
    }
    deSpawn() {
        this.element.remove()
        const enemyIndex = game.enemies.indexOf(this) // Where am I?
        game.enemies.splice(enemyIndex, 1);
    }
}