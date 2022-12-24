class Boat extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        scene.physics.world.enable(this);

        this.setOrigin(.5);

        this.body.velocity.x =  0;
        this.body.velocity.y = 0;
        this.angle = 0;

        this.speed = .4;
        this.rotationSpeed = .4;
    }


    create(){
        this.radians = 0;
    }

    update(){
        this.radians = (this.angle*Math.PI)/180;
        if(keyUP.isDown){
            this.body.velocity.x += Math.cos(this.radians) * this.speed;
            this.body.velocity.y += Math.sin(this.radians) * this.speed;
        }
        if(keyDOWN.isDown){
            this.body.velocity.x -= Math.cos(this.radians) * this.speed;
            this.body.velocity.y -= Math.sin(this.radians) * this.speed;
        }
        if(keyLEFT.isDown){
            this.angle -= this.rotationSpeed;
        }
        else if(keyRIGHT.isDown){
            this.angle += this.rotationSpeed;
        }   
    }
}