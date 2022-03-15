const Asteroid = require('./asteroid');
const GAME_WIDTH = 400;
const GAME_LENGTH = 400;
const NUM_ASTEROIDS = 100;

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

Game.prototype.checkCollisions = function(){
    this.asteroids.forEach((asteroid, index) => {
        this.asteroids.forEach((otherAsteroid, otherIndex) => {
            if(index !== otherIndex && asteroid.isCollidedWith(otherAsteroid)){
                asteroid.collideWith(otherAsteroid);
            }
        });
    })
}

Game.prototype.step = function () {
    this.moveObjects();
    this.checkCollisions();
}

Game.prototype.remove = function(asteroid) {
    this.asteroids.splice(this.asteroids.indexOf(asteroid), 1);
}

module.exports = Game;