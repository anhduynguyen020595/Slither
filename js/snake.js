class snake {
  constructor(game) {
    this.game = game;
    this.x = GAME_WIDTH / 2;
    this.y = GAME_HEIGHT / 2;
    this.angle = 0;
    this.eye = new eye(this);
    this.tailsPosition = [];
    this.createTail();
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
    this.angle = Math.atan2(
      mousePos.y - SCREEN_HEIGHT / 2,
      mousePos.x - SCREEN_WIDTH / 2
    );
  }

  createTail() {
    let i = 0;
    while (i < 200) {
      this.tailsPosition.push({
        x: this.x - i * SNAKE_SPEED,
        y: this.y,
      });
      i++;
    }
  }

  update() {
    let newTailPosition = {
      x: (this.x += Math.cos(this.angle) * SNAKE_SPEED),
      y: (this.y += Math.sin(this.angle) * SNAKE_SPEED),
    };

    this.tailsPosition.unshift(newTailPosition);
    this.tailsPosition.pop();

    this.x = newTailPosition.x;
    this.y = newTailPosition.y;
  }

  draw() {
    // draw snake shadow
    for (let i = this.tailsPosition.length - 1; i > 1; i--) {
      this.game.screen.drawCircle(
        {
          x: this.tailsPosition[i].x,
          y: this.tailsPosition[i].y,
        },
        "shadow"
      );
    }

    // draw snake body
    for (let i = this.tailsPosition.length - 1; i > 1; i--) {
      if (i % 6 == 0) {
        this.game.screen.drawCircle(
          {
            x: this.tailsPosition[i].x,
            y: this.tailsPosition[i].y,
          },
          "snake"
        );
      }
    }

    //draw snake head
    this.game.screen.drawCircle(
      {
        x: this.x,
        y: this.y,
      },
      "snake"
    );

    //draw snake eye
    this.eye.draw();
  }
}
