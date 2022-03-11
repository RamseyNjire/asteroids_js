const Asteroid = require('./asteroid');
const GameView = require('./game_view');

window.addEventListener('DOMContentLoaded', function(event) {
    const canvas = document.getElementById('game-canvas');
    const context = canvas.getContext('2d');
    const gameView = new GameView(context);

    gameView.start();
})