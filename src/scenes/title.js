class Title extends Phaser.Scene {
  constructor() {
    super('Title');
  }

  preload() {

  }

  create() {
    console.log('%cDon’t cheat, you nincompoop!!!', 'background: #cc0000; color: #fff; font-size: 24px; padding: 10px;');
  }
}

export default Title;