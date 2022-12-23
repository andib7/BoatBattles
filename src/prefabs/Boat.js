class Boat extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);

        this.rotation = Math.PI / 2;
        this.speed = 0;
        this.rotationSpeed = 0;
    }

    update(time, delta){
        if(keyUP.isDown){
            //sprite.x += Math.cos(this.rotation) * this.speed * delta / 1000;
            //sprite.y += Math.sin(this.rotation) * this.speed * delta / 1000;
            sprite.y += 20;
            console.log("HI");
        }
        if(this.speed == 1){

        }
        else if(this.speed == 2){

        }
    }

}