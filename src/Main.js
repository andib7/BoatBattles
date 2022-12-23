var config = {
    type: Phaser.CANVAS,
    width: window.innerWidth-30,
    height: window.innerHeight-30,
    backgroundColor: 'rgb(255, 0, 0)',
    scene: [ Load, Menu, Play ]
}

var game = new Phaser.Game(config);

var keyF, keyLEFT, keyRIGHT, keyUP, keyDOWN, keyCLICK;