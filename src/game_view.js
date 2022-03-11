const Game = require('./game');

function GameView(context) {
    this.context = context;
    this.game = new Game();
}

GameView.prototype.start = function() {
    const game = this.game;
    const context = this.context;
    game.addAsteroids();
    const intervalID = setInterval(function(){
        game.moveObjects();
        game.draw(context);
    }, 20);
};

module.exports = GameView;