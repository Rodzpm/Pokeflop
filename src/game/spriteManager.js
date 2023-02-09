class Sprite {
    constructor({position, image, frames = {max: 1, hold: 10}, sprites, animate = false, rotation = 0}) {
        this.position = position;
        this.image = image;
        this.frames = {...frames, val: 0, elapsed: 0};
        this.image.onload = () => {
            this.width = this.image.width / this.frames.max;
            this.height = this.image.height;
        }
        this.animate = animate;
        this.sprites = sprites;
        this.rotation = rotation;
    }
    draw() {
        c.save();
        c.translate(this.position.x + this.width / 2, this.position.y + this.width / 2);
        c.rotate(this.rotation);
        c.translate(-this.position.x - this.width / 2, -this.position.y - this.width / 2);
        c.drawImage(
            this.image,
            this.frames.val * this.width,
            0,
            this.image.width / this.frames.max,
            this.image.height,
            this.position.x,
            this.position.y,
            this.image.width / this.frames.max,
            this.image.height
        );
        c.restore();
        
        if (!this.animate){
            this.frames.val = 0;
            return
        }
        if (this.frames.max > 1) {
            this.frames.elapsed++;
        }
        if (this.frames.elapsed % this.frames.hold === 0) {
            if (this.frames.val < this.frames.max - 1) this.frames.val++;
            else this.frames.val = 0;
        }
    }
}

class Pokemon {
    constructor({position, image, frames = {max: 1, hold: 10}, sprites, animate = false, isEnemy = false, attacks, name}) {
        this.position = position;
        this.image = image;
        this.frames = {...frames, val: 0, elapsed: 0};
        this.image.onload = () => {
            this.width = this.image.width / this.frames.max;
            this.height = this.image.height;
        }
        this.attacks = attacks;
        this.animate = animate;
        this.sprites = sprites;
        this.opacity = 1;
        this.health = 100;
        this.isEnemy = isEnemy;
        this.name = name     
    }
    draw() {
        c.save();
        c.globalAlpha = this.opacity;
        c.drawImage(
            this.image,
            this.frames.val * this.width,
            0,
            this.image.width / this.frames.max,
            this.image.height,
            this.position.x,
            this.position.y,
            this.image.width / this.frames.max,
            this.image.height
        );
        c.restore();
        
        if (!this.animate){
            this.frames.val = 0;
            return
        }
        if (this.frames.max > 1) {
            this.frames.elapsed++;
        }
        if (this.frames.elapsed % this.frames.hold === 0) {
            if (this.frames.val < this.frames.max - 1) this.frames.val++;
            else this.frames.val = 0;
        }
    }
    attack({attack, recipient, renderedSprites}) {
        document.querySelector('#dialog').innerHTML = this.name + " used " + attack.name;
        if (attack.name == "Tackle") {
            recipient.health -= attack.damage;
            TackleAnim(this, recipient, attack);
        }
        if (attack.name == "Ratio") {
            recipient.health -= attack.damage;
            TackleAnim(this, recipient, attack);
        }
        if (attack.name == "Fireball") {
            fireballSprite.position.x = this.position.x;
            fireballSprite.position.y = this.position.y;
            renderedSprites.push(fireballSprite);
            recipient.health -= attack.damage;
            FireballAnim(this, recipient, fireballSprite);
        }
    }
    faint() {
        document.querySelector('#dialog').innerHTML = this.name + " fainted !";
        deathAnim(this);
    }
}
