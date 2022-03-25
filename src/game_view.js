const Game = require('./game');

function GameView(context) {
    this.context = context;
    this.game = new Game();
}

GameView.prototype.start = function() {
    const game = this.game;
    const context = this.context;
    // context.clearRect(0, 0, game.width, game.length);
    game.addAsteroids();
    this.bindKeyHandlers();
    // game.step();
    // game.draw(context);
    // window.requestAnimationFrame(this.start.bind(this));
    const intervalID = setInterval(function(){
        game.step();
        game.draw(context);
    }, 20);
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

module.exports = GameView;