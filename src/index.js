const MovingObject = require('./moving_object');

window.MovingObject = MovingObject;

window.addEventListener('DOMContentLoaded', function(event){
    const canvas = document.getElementById('game-canvas');
    const context = canvas.getContext('2d');
    const movingObject = new MovingObject({
        position: [50, 50],
        velocity: [10, 10],
        radius: 10,
        color: '#00FF00'
    });

    movingObject.draw(context);
})