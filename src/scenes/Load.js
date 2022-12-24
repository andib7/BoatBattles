class Load extends Phaser.Scene {
    constructor() {
        super("loadScene");
    }

    preload(){
        this.load.spritesheet("projectile", "./assets/sprites/projectile.png", {frameWidth: 555, frameHeight: 2105});
        this.load.spritesheet("boat", "./assets/sprites/boat.jpg", {frameWidth: 360, frameHeight: 360});
        this.load.audio("sfx_explosion", "./assets/audio/explosion.wav");
    }

    create(){
        console.log('Load');
        //load sound effect and set volume
        sfxExplosion = this.sound.add('sfx_explosion');
        sfxExplosion.setVolume(0.05);
    }

    update(){
        this.scene.start('menuScene');
    }
}