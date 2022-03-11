const Asteroid = require('./asteroid');
const Game = require('./game');

window.addEventListener('DOMContentLoaded', function(event) {
    const canvas = document.getElementById('game-canvas');
    const context = canvas.getContext('2d');
    const game = new Game();

    game.addAsteroids();

    game.draw(context);
})