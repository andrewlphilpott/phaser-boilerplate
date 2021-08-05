var titleState = function() {};

titleState.prototype = {
  create: function(){
    // Title image
    // title = this.game.add.sprite(0, 0, 'title');

    // Start the game when a key is pressed
    this.game.input.keyboard.onDownCallback = startGame;

    // Or when a touch event happens
    if(this.game.device.touch) {
      this.game.input.onUp.add(startGame);
    }
  }
};

function startGame() {
  this.game.input.keyboard.onDownCallback = null;
  this.game.state.start('level01', true);
}
