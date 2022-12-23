class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    create(){
        game.config.backgroundColor = "#ff86dd";
        console.log('Play');

        this.player = new Boat(this, game.config.width/2, game.config.height/2, 'Boat', 0);
    }

    update(){
        this.player.update();
    }
    
}