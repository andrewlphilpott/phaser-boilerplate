import Phaser from 'phaser';

// Scenes
import Preload from './scenes/preload';
import Title from './scenes/title';

const config = {
  height: 240,
  physics: {
    default: 'arcade'
  },
  scene: [ Preload, Title ],
  type: Phaser.CANVAS,
  width: 320
};

new Phaser.Game(config);