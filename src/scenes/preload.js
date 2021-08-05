class Preload extends Phaser.Scene {
  constructor() {
    super('Preload');
  }

  preload() {
    const { game, load } = this;

    // Reset global player variable
    game.player = null;

    // Load sprites
    load.spritesheet('player', '/assets/img/player.gif', { frameWidth: 16, frameHeight: 24 });
  }

  create() {
    // Call the next scene
    this.scene.start('Title');
  }
}

export default Preload;