const Game = require('./game');

function GameView(context) {
    this.context = context;
    this.game = new Game();
}

GameView.prototype.start = function() {
    const game = this.game;
    const context = this.context;
    game.addAsteroids();
    this.bindKeyHandlers();
    const intervalID = setInterval(function(){
        game.step();
        game.draw(context);
    }, 20);
};

GameView.prototype.bindKeyHandlers = function() {
    const ship = this.game.ship;
    const keys = ["KeyW", "ArrowUp", "KeyS", "ArrowDown", "KeyA", "ArrowLeft", "KeyD", "ArrowRight"];
    key('w, up', function(event, handler){
        ship.power([0, -1]);
    });
    key('d, right', function () {
        ship.power([1, 0]);
    });
    key('s, down', function () {
        ship.power([0, 1]);
    });
    key('a, left', function () {
        ship.power([-1, 0]);
    });
    key('space', function () {
        ship.fireBullet();
    })

    document.onkeyup = function(event) {
        if(keys.includes(event.key)){
            ship.velocity = [0, 0];
        };
    };
}

module.exports = GameView;