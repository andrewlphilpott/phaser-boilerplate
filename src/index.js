import Phaser from 'phaser';

const config = {
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 }
    }
  },
  scene: {
    preload: preload,
    create: create
  },
  type: Phaser.AUTO,
  width: 800
};

new Phaser.Game(config);

function preload() {
  
};

function create() {

};