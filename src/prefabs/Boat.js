class Boat extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        this.rotation = Math.PI / 2;
        this.speed = 0;
        this.rotationSpeed = 0;
    }

    update(time, delta){
        if(Phaser.Input.Keyboard.JustDown(keyUP)){
            sprite.x += Math.cos(this.rotation) * this.speed * delta / 1000;
            sprite.y += Math.sin(this.rotation) * this.speed * delta / 1000;
        }
        if(Phaser.Input.Keyboard.JustDown(keyLEFT)){

        }
        else if(Phaser.Input.Keyboard.JustDown(keyRIGHT)){

        }
    }

}