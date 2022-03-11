const Asteroid = require('./asteroid');
const MovingObject = require('./moving_object');

window.MovingObject = MovingObject;

window.addEventListener('DOMContentLoaded', function(event){
    const canvas = document.getElementById('game-canvas');
    const context = canvas.getContext('2d');
    const asteroid = new Asteroid({
        position: [50, 50],
    });

    asteroid.draw(context);
})