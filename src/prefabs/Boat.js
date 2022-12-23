class Boat extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        this.setCollideWorldBounds(true);
        this.rotation = Math.PI / 2;
        this.speed = 0;
        this.rotationSpeed = 0;
    }

    update(time, delta){
        if(this.input.keyboard.checkDown(Phaser.Input.Keyboard.KeyCodes.DOWN)){
            sprite.x += Math.cos(this.rotation) * this.speed * delta / 1000;
            sprite.y += Math.sin(this.rotation) * this.speed * delta / 1000;
        }
        if(this.input.keyboard.checkDown(Phaser.Input.Keyboard.KeyCodes.LEFT)){

        }
        else if(this.input.keyboard.checkDown(Phaser.Input.Keyboard.KeyCodes.RIGHT)){

        }
    }

}