class Projectile extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, mouseX, mouseY, texture, frame){
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        this.speed = 10;
        this.setScale(0.01);
        this.angle = this.RadToDeg(Math.atan2((mouseY-this.y), (mouseX-this.x)))+90;
        this.radians = (this.angle-90)*(Math.PI/180);
        this.inBoundary = true;
    }

    update(){
        this.x += Math.cos(this.radians)*this.speed;
        this.y += Math.sin(this.radians)*this.speed;
        this.boundaries();
    }

    boundaries(){
        if((this.x > game.config.width || this.x < 0)||(this.y > game.config.height || this.y < 0) ){
            this.inBoundary = false;
            console.log("destroyed");
        }
    }

    RadToDeg(rad){
        return (rad*180)/Math.PI;
    }
}