class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.velocity = 5;
    this.direction = [];
    this.element = document.querySelector("#player");
    this.width = this.element.getBoundingClientRect().width;
    this.height = this.element.getBoundingClientRect().height;
    this.element.style.left = `${this.x}px`;
    this.element.style.top = `${this.y}px`;
  }
  setDirection(direction) {
    if (!this.direction.includes(direction)) {
      this.direction.push(direction);
    }
  }
  deleteDirection(direction) {
    const index = this.direction.indexOf(direction);
    this.direction.splice(index, 1);
  }
  move() {
    const direction = this.direction.join("");
    switch (direction) {
      case "ArrowUp":
        this.y -= this.velocity;
        break;
      case "ArrowDown":
        this.y += this.velocity;
        break;
      case "ArrowLeft":
        this.x -= this.velocity;
        break;
      case "ArrowRight":
        this.x += this.velocity;
        break;
      case "ArrowUpArrowRight":
      case "ArrowRightArrowUp":
        this.y -= this.velocity;
        this.x += this.velocity;
        break;
      case "ArrowUpArrowLeft":
      case "ArrowLeftArrowUp":
        this.y -= this.velocity;
        this.x -= this.velocity;
        break;
      case "ArrowDownArrowRight":
      case "ArrowRightArrowDown":
        this.y += this.velocity;
        this.x += this.velocity;
        break;
      case "ArrowDownArrowLeft":
      case "ArrowLeftArrowDown":
        this.y += this.velocity;
        this.x -= this.velocity;
        break;
      case "":
        this.x = this.x;
        this.y = this.y;
        break;
    }

    this.checkForBoundaries();

    this.element.style.left = `${this.x}px`;
    this.element.style.top = `${this.y}px`;
  }
  checkForBoundaries() {
    if (this.x <= 0) {
      this.x = 0;
    }
    if (this.y <= boardHeight * 0.2) {
      this.y = boardHeight * 0.2;
    }
    if (this.y >= boardHeight * 0.75 - this.height) {
      this.y = boardHeight * 0.75 - this.height;
    }
    if (this.x >= boardWidth - this.width) {
      this.x = boardWidth - this.width;
    }
  }
  crashTest() {
    game.enemies.forEach((enemy) => {
      // HUMAN READABLE 😅
      const enemyLeftEdge = enemy.x;
      const enemyRightEdge = enemy.x + enemy.width;
      const enemyTopEdge = enemy.y;
      const enemyBottomEdge = enemy.y + enemy.height;

      const playerLeftEdge = this.x;
      const playerRightEdge = this.x + this.width;
      const playerTopEdge = this.y;
      const playerBottomEdge = this.y + this.height;

      if (
        playerLeftEdge < enemyRightEdge &&
        playerRightEdge > enemyLeftEdge &&
        playerTopEdge < enemyBottomEdge &&
        playerBottomEdge > enemyTopEdge
      ) {
        game.lives -= 1;
        shakeBoard();
        game.updateLives();
        enemy.deSpawn();
      }
    });
  }
}
