class Boat extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);

        this.speed = 2;
        this.rotationSpeed = 1;
    }

    update(time, delta){
        if(keyUP.isDown){
            this.x += Math.cos(this.angle) * this.speed;
            this.y += Math.sin(this.angle) * this.speed;
        }
        if(keyLEFT.isDown){
            this.angle -= this.rotationSpeed;

            console.log(this.angle);
        }
        else if(keyRIGHT.isDown){
            this.angle += this.rotationSpeed;
        }
    }

}