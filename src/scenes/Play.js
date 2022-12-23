class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    create(){
        game.config.backgroundColor = "#ff86dd";
        console.log('Play');

        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        keyCLICK = this.input.keyboard.addKey(Phaser.Input.Mouse.MouseManager.onMouseDown);

        this.player = new Boat(this, game.config.width/2, game.config.height/2, 'Boat', 0);
    }

    update(){
        this.player.update();
    }
    
}