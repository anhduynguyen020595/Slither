class snake {
  constructor(game) {
    this.game = game;
    this.x = GAME_WIDTH / 2;
    this.y = GAME_HEIGHT / 2;
    this.listenMouseEvent();
  }
  listenMouseEvent() {
    this.game.canvas.addEventListener("mousemove", (event) => {
      var rect = this.game.canvas.getBoundingClientRect();
      this.processMouseMove({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      });
    });
  }

  processMouseMove(mousePos) {
    console.log(mousePos);
  }

  update() {}

  draw() {
    this.game.screen.drawCircle({ x: this.x, y: this.y });
  }
}
