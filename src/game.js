const Asteroid = require('./asteroid');
const Ship = require('./ship');
const GAME_WIDTH = 400;
const GAME_LENGTH = 400;
const NUM_ASTEROIDS = 100;

function Game() {    
    this.asteroids = [];
    this.width = GAME_WIDTH;
    this.length = GAME_LENGTH;
    this.ship = new Ship({
        position: this.randomPosition(),
        game: this
    });
}


Game.prototype.addAsteroids = function() {
    for (let i = 0; i < NUM_ASTEROIDS; i++) {
        this.asteroids.push(new Asteroid({
            position: this.randomPosition(),
            game: this
        }));
    }
};

Game.prototype.allObjects = function() {
    return [].concat(this.asteroids, this.ship);
}

Game.prototype.randomPosition = function() {
    return [Math.floor(Math.random() * GAME_WIDTH), Math.floor(Math.random() * GAME_LENGTH)];
};

Game.prototype.draw = function(context) {
    context.clearRect(0, 0, this.width, this.length);
    this.allObjects().forEach(object => object.draw(context));
};

Game.prototype.moveObjects = function() {
    this.allObjects().forEach(object => object.move());
};

Game.prototype.wrap = function(position) {
    position[0] = ((position[0] % this.width) + this.width) % this.width;
    position[1] = ((position[1] % this.length) + this.length) % this.length;
    return position;    
}

Game.prototype.checkCollisions = function(){
    this.asteroids.forEach((asteroid, index) => {
        this.allObjects().forEach((otherObject, otherIndex) => {
            if(index !== otherIndex && asteroid.isCollidedWith(otherObject)){
                asteroid.collideWith(otherObject);
            }
        });
    })
}

Game.prototype.step = function() {
    this.moveObjects();
    this.checkCollisions();
}

Game.prototype.remove = function(asteroid) {
    this.asteroids.splice(this.asteroids.indexOf(asteroid), 1);
}

module.exports = Game;