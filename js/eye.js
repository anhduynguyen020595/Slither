const EYE_DISTANCE = 15;
const EYR_ANGLE = 0.7;
class eye {
  constructor(snake) {
    this.snake = snake;
  }

  update() {}

  draw() {
    let eye1Pos = {
      x: this.snake.x + Math.cos(this.snake.angle - EYR_ANGLE) * EYE_DISTANCE,
      y: this.snake.y + Math.cos(this.snake.angle - EYR_ANGLE) * EYE_DISTANCE,
    };

    this.snake.game.screen.drawCircle(eye1Pos, "eye");

    let eye2Pos = {
      x: this.snake.x + Math.cos(this.snake.angle + EYR_ANGLE) * EYE_DISTANCE,
      y: this.snake.y + Math.cos(this.snake.angle + EYR_ANGLE) * EYE_DISTANCE,
    };

    this.snake.game.screen.drawCircle(eye2Pos, "eye");
  }
}
