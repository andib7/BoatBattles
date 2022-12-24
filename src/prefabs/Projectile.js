class Projectile extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, mouseX, mouseY, texture, frame){
        super(scene, x, y, mouseX, mouseY, texture, frame);
        scene.add.existing(this);
        this.speed = 1;
        this.angle = Math.atan2((mouseY-this.y), (mouseX-this.x));
        this.radians = this.angle*(Math.PI/180);
    }

    update(){
        this.x += Math.cos(this.radians)*this.speed;
        this.y += Math.sin(this.radians)*this.speed;

        boundaries();
    }

    boundaries(){
        if((this.x > game.config.width || this.x < 0)||(this.y > game.config.height || this.y < 0) ){
            this.destroy();
        }
    }
}