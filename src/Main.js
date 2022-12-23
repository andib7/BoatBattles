let config = {
    type: Phaser.CANVAS,
    width: window.innerWidth-30,
    height: window.innerHeight-30,
    scene: [ Load, Menu, Play ]
}

let game = new Phaser.Game(config);

var keyF, keyLEFT, keyRIGHT, keyUP, keyDOWN, keyCLICK;