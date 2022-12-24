class Boat extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        
        this.speed = 0.4;
        this.rotationSpeed = 0.3;
    }

    create(){
        this.radians = 0;
        
        
        
    }

    update(time, delta){
        this.radians = this.angle*(Math.PI/180);
        if(keyUP.isDown){
            this.x += Math.cos(this.radians) * this.speed;
            this.y += Math.sin(this.radians) * this.speed;
        }
        if(keyDOWN.isDown){
            this.x -= Math.cos(this.radians)*this.speed;
            this.y -= Math.sin(this.radians)*this.speed;
        }
        if(keyLEFT.isDown){
            this.angle -= this.rotationSpeed;
        }
        else if(keyRIGHT.isDown){
            this.angle += this.rotationSpeed;
        }
        
    }

    

}