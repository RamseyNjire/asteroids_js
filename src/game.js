const Asteroid = require('./asteroid');
const Ship = require('./ship');
const Bullet = require('./bullet');
const GAME_WIDTH = 400;
const GAME_LENGTH = 400;
const NUM_ASTEROIDS = 20;

function Game() {    
    this.asteroids = [];
    this.bullets = [];
    this.width = GAME_WIDTH;
    this.length = GAME_LENGTH;
    this.ship = new Ship({
        position: this.randomPosition(),
        game: this
    });
}


Game.prototype.add = function(object) {
    if (object instanceof Asteroid) {
        this.asteroids.push(object);
    }

    if(object instanceof Bullet) {
        this.bullets.push(object);
    }
}

Game.prototype.remove = function(object){
    if (object instanceof Asteroid) {
        index = this.asteroids.indexOf(object);
        this.asteroids.splice(index, 1);
    }

    if (object instanceof Bullet) {
        index = this.bullets.indexOf(object);
        this.bullets.splice(index, 1);
    }
}

Game.prototype.addAsteroids = function() {
    for (let i = 0; i < NUM_ASTEROIDS; i++) {
        this.add(new Asteroid({
            position: this.randomPosition(),
            game: this
        }));
    }
};

Game.prototype.allObjects = function() {
    return [].concat(this.asteroids, this.ship, this.bullets);
}

Game.prototype.randomPosition = function() {
    return [Math.floor(Math.random() * GAME_WIDTH), Math.floor(Math.random() * GAME_LENGTH)];
};

Game.prototype.draw = function(context) {
    context.clearRect(0, 0, this.width, this.length);
    this.allObjects().forEach(object => object.draw(context));
};

Game.prototype.moveObjects = function(timeDelta) {
    this.allObjects().forEach(object => object.move(timeDelta));
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

Game.prototype.isOutOfBounds = function(position) {
    return (position[0] < 0 || position[0] > this.width || position[1] < 0 || position[1] > this.length);
}

Game.prototype.step = function(timeDelta) {
    this.moveObjects(timeDelta);
    this.checkCollisions();
}

module.exports = Game;