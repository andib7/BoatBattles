class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    create(){
        config.backgroundColor = "rgb(0, 0, 250)";
        console.log('Play');

        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);

        this.bullets = [];
        this.input.on('pointerdown', function (pointer){
            this.mouseDown(pointer.x, pointer.y);
        }, this);

        this.player = new Boat(this, game.config.width/2, game.config.height/2, 'boat', 0);
        this.player.setScale(0.2);
    }

    update(){
        for(const item of this.bullets){
            item.update();
            if(!item.inBoundary){
                item.destroy();
                
            }
        }
        this.player.update();
    }

    mouseDown(mX, mY){
        this.bullets.push(new Projectile(this, this.player.x, this.player.y, mX, mY, "projectile", 0));
        
    }
    
}