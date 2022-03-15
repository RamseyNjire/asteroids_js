const Asteroid = require('./asteroid');
const GAME_WIDTH = 300;
const GAME_LENGTH = 300;
const NUM_ASTEROIDS = 10;

function Game() {    
    this.asteroids = [];
    this.width = GAME_WIDTH;
    this.length = GAME_LENGTH;
}


Game.prototype.addAsteroids = function() {
    for (let i = 0; i < NUM_ASTEROIDS; i++) {
        this.asteroids.push(new Asteroid({
            position: this.randomPosition(),
            game: this
        }));
    }
};

Game.prototype.randomPosition = function() {
    return [Math.random() * GAME_WIDTH, Math.random() * GAME_LENGTH];
};

Game.prototype.draw = function (context) {
    context.clearRect(0, 0, this.width, this.length);
    this.asteroids.forEach( asteroid => asteroid.draw(context));
};

Game.prototype.moveObjects = function () {
    this.asteroids.forEach(asteroid => asteroid.move());
};

Game.prototype.wrap = function(position) {
    position[0] = position[0] % this.width;
    position[1] = position[1] % this.length;
}

module.exports = Game;