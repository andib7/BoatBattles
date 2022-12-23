class Load extends Phaser.Scene {
    constructor() {
        super("loadScene");
    }

    preload(){
        this.load.image("boat", "./assets/sprites/boat.jpg");
    }

    create(){
        game.canvas.style.backgroundColor = '#ffc0cb';
        console.log('Load');

    }

    update(){
        this.scene.start('menuScene');
    }
}