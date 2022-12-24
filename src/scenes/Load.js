class Load extends Phaser.Scene {
    constructor() {
        super("loadScene");
    }

    preload(){
        this.load.spritesheet("projectile", "./assets/sprites/projectile.png", {frameWidth: 555, frameHeight: 2105});
        this.load.spritesheet("boat", "./assets/sprites/boat.jpg", {frameWidth: 360, frameHeight: 360});
    }

    create(){
        console.log('Load');
    }

    update(){
        this.scene.start('menuScene');
    }
}