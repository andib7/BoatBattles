var config = {
    type: Phaser.Auto,
    width: window.innerWidth-30,
    height: window.innerHeight-30,
    backgroundColor: 'rgb(255, 0, 0)',
    physics: {
        default: 'arcade',
        arcade: { y:300 },
        debug: false
    },
    scene: [ Load, Menu, Play ]
}

var game = new Phaser.Game(config);

var keyF, keyLEFT, keyRIGHT, keyUP, keyDOWN, keyCLICK;