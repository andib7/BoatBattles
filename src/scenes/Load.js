class Load extends Phaser.Scene {
    constructor() {
        super("loadScene");
    }

    preload(){
        this.load.spritesheet("boat", "./assets/sprites/boat.jpg", {frameWidth: 360, frameHeight: 360});
    }

    create(){
        game.canvas.style.backgroundColor = '#ffc0cb';
        console.log('Load');

        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        keyCLICK = this.input.keyboard.addKey(Phaser.Input.Mouse.MouseManager.onMouseDown);
    }

    update(){
        this.scene.start('menuScene');
    }
}