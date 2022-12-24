class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    create(){
        console.log('Play');
        //set keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        //set mouse click
        this.bullets = [];
        this.input.on('pointerdown', function (pointer){
            this.mouseDown(pointer.x, pointer.y);
        }, this);
        //make the boat
        this.player = new Boat(this, game.config.width/2, game.config.height/2, 'boat', 0);
        this.player.setScale(0.2);
        //index for projectiles
        this.index = 0;
    }

    update(){
        this.index = 0;
        //update all projectiles
        for(const item of this.bullets){
            item.update();
            if(!item.inBoundary){
                sfxExplosion.play();
                item.destroy();
                this.bullets.splice(this.index, 1);
            }
            this.index++;
        }
        //player update
        this.player.update();
    }

    //function for mouse click
    mouseDown(mX, mY){
        this.bullets.push(new Projectile(this, this.player.x, this.player.y, mX, mY, "projectile", 0));
        
    }
    
}