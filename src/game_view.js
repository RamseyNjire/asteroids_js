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
    key('w, up', function(){
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
}

module.exports = GameView;