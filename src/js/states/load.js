var loadState = function() {};

loadState.prototype = {
  preload: function(){
    // Title image
  	// this.game.load.image('title', 'assets/img/title.gif');

    // Sound effects
  	// this.game.load.audio('sfx', ['assets/sfx/sfx.mp3']);

    // Music
    // this.game.load.audio('music', ['assets/music/score.mp3']);

  	// Player sprite
  	// this.game.load.spritesheet('player', 'assets/img/player.gif', 24, 24, 10);
  },
  create: function(){
    // Call the next state
    this.game.state.start('title');
  }
};
