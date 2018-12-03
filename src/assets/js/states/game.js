Game = function() {};

Game.prototype = {
	start: function() {
    // Create game variable
    var game = new Phaser.Game(160, 144, Phaser.CANVAS, 'game-title', null, false, false);

    // Set up states
    game.state.add('boot', bootState);
    game.state.add('load', loadState);
    game.state.add('title', titleState);
    game.state.add('level01', level01State);
    game.state.add('gameOver', gameOverState);

    // Start the boot state
    game.state.start('boot');
  }
};

// Start the game
var game = new Game();
game.start();

// Call cheaters a mean name
console.log('%cDon’t cheat, you nincompoop!!!', 'background: #cc0000; color: #fff; font-size: 24px; padding: 10px;');
