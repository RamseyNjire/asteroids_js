const Asteroid = require('./asteroid');
const GameView = require('./game_view');

window.addEventListener('DOMContentLoaded', function(event) {
    const canvas = document.getElementById('game-canvas');
    const context = canvas.getContext('2d', {alpha: false});
    // const image = new Image();
    // image.onload = function () {
    //     context.drawImage(image, 0, 0, 400, 400);
    // };
    const gameView = new GameView(context);

    gameView.start();
})