var bootState = function() {};

bootState.prototype = {
  create: function(){
    Phaser.Canvas.setImageRenderingCrisp(this.game.canvas);

    // Set world bounds
    this.game.world.setBounds(0, 0, 160, 144);
    this.game.camera.roundPx = false;

    // Scale the game up
    this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.game.scale.minWidth = 320;
    this.game.scale.minHeight = 288;
    this.game.scale.maxWidth = 320;
    this.game.scale.maxHeight = 288;
    this.game.scale.refresh();

    // Deal with antialiasing
    this.game.stage.smoothed = false;
    this.game.renderer.renderSession.roundPixels = true;

    // Call the next state
    this.game.state.start('load');
  }
};