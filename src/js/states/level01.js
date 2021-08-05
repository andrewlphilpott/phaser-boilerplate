var level01State = function() {};

// Global variables
_this = null;
runSpeed = 48;
volumeLevel = .5;

level01State.prototype = {
  // Create
  create: function(){
    _this = this;

    // Reset the elapsed time
    this.game.time.reset();

    // Define controls
  	controls = this.game.input.keyboard.createCursorKeys();
    pauseKey = this.game.input.keyboard.addKey(Phaser.Keyboard.ESC);
  },

  // Update
  update: function(){

  },

  // Render
  render: function(){

  },

  // Create objects
  findObjectsByType: function(type, map, layerName) {
    var result = [];

    map.objects[layerName].forEach(function(element){
      if(element.properties.type === type) {
        result.push(element);
      }
    });

    return result;
  },

  // Reusable function to create object sprites
  createFromTiledObject: function(element, group) {
    var sprite = group.create(element.x, element.y, element.properties.sprite);

    Object.keys(element.properties).forEach(function(key){
      sprite[key] = element.properties[key];
    });
  },

  // Create bounding objects from tilemap
  createBounds: function(type, layer, group) {
    var _this = this;

    group.enableBody = true;

    var result = this.findObjectsByType(type, map, layer);

    result.forEach(function(element){
      _this.createFromTiledObject(element, group);
    });
  },

  // Create sprite objects from tilemap
  createSprites: function(group, type, layerName) {
    var _this = this;

    var result = this.findObjectsByType(type, map, layerName);

    result.forEach(function(element){
      _this.createFromTiledObject(element, group);
    });
  },

  // Game over, man
  gameOver: function() {
    // Remove pause
    this.game.onBlur.removeAll();

    this.game.state.start('gameOver');
  }
};
