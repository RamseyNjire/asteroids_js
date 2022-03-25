const Game = require('./game');

function GameView(context) {
    this.context = context;
    this.game = new Game();
    this.lastTime = 0;
}

GameView.prototype.start = function() {
    this.game.addAsteroids();
    this.bindKeyHandlers();
    window.requestAnimationFrame(this.animate.bind(this));
};

GameView.prototype.bindKeyHandlers = function() {
    const ship = this.game.ship;
    const keys = ["KeyW", "ArrowUp", "KeyS", "ArrowDown", "KeyA", "ArrowLeft", "KeyD", "ArrowRight"];
    window.key('w, up', function(event, handler){
        ship.power([0, -1]);
    });
    window.key('d, right', function () {
        ship.power([1, 0]);
    });
    window.key('s, down', function () {
        ship.power([0, 1]);
    });
    window.key('a, left', function () {
        ship.power([-1, 0]);
    });
    window.key('space', function () {
        ship.fireBullet();
    })

    document.onkeyup = function(event) {
        if(keys.includes(event.key)){
            ship.velocity = [0, 0];
        };
    };
}

GameView.prototype.animate = function(currentTime) {
    const timeDelta = currentTime - this.lastTime;
    window.requestAnimationFrame(this.animate.bind(this));
    this.game.step(timeDelta);
    this.game.draw(this.context);
    this.lastTime = currentTime;
}

module.exports = GameView;