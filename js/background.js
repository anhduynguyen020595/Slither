class background {
  constructor(game) {
    this.game = game;
  }

  update() {}

  drawLine(startPos, endPos) {
    this.game.ctx.strokeStyle = "#d9d9d9";
    this.game.ctx.lineWidth = 3;
    this.game.ctx.beginPath();
    this.game.ctx.moveTo(startPos.x, startPos.y);
    this.game.ctx.lineTo(endPos.x, endPos.y);
    this.game.ctx.stroke();
  }

  draw() {
    this.drawLine({ x: 100, y: 100 }, { x: 200, y: 200 });
  }
}
