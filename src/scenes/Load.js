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
    }

    update(){
        this.scene.start('menuScene');
    }
}