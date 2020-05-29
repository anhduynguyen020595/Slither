class game {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.canvas.width = SCREEN_WIDTH;
    this.canvas.height = SCREEN_HEIGHT;
    document.body.appendChild(this.canvas);

    this.snake = new snake(this);
    this.screen = new screen(this);
    this.background = new background(this);

    this.loop();
  }

  loop() {
    this.update();
    this.draw();
    setTimeout(() => this.loop(), 20);
  }

  update() {
    this.snake.update();
    this.screen.update();
    this.background.update();
  }

  clearScreen() {
    this.ctx.fillStyle = "#f2f2f2";
    this.ctx.fillRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
  }

  draw() {
    this.clearScreen();
    this.snake.draw();
    this.background.draw();
    // this.screen.drawCircle({ x: 2500, y: 2500 });s
  }
}

var g = new game();
