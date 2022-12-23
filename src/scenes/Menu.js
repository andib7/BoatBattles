class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    create(){
        game.canvas.style.backgroundColor = '#000000';
        console.log('Menu');
    }

    update(){
        this.scene.start('playScene');
    }

}