class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    create(){
        game.config.backgroundColor = "#ff86dd";
        console.log('Play');

        this.player = new Boat(this, 0, 0, 'Boat');
    }

    update(){
        this.player.update();
    }
    
}