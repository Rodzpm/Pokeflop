const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 576;

const collisionsMap = [];
for (let i = 0; i < collisions.length; i += 70) {
    collisionsMap.push(collisions.slice(i, 70 + i));
}

class Boundary {
    static width = 48;
    static height = 48;
    constructor({position}) {
        this.position = position,
        this.width = 48,
        this.height = 48
    }

    draw () {
        c.fillStyle = 'red';
        c.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}

const offset = {
    x: -400,
    y: -350
}

const boundaries = [];
collisionsMap.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 1025) 
            boundaries.push(new Boundary({position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
            }}))
    });
});

const image = new Image();
image.src = "./Images/Pokeflop_Map.png";

const foreground_img = new Image();
foreground_img.src = "./Images/Foreground_Map.png";

const playerImage = new Image();
playerImage.src = "./Images/playerDown.png";

class Sprite {
    constructor({position,velocity, image, frames = {max: 1}}) {
        this.position = position;
        this.image = image;
        this.frames = frames;

        this.image.onload = () => {
            this.width = this.image.width / this.frames.max;
            this.height = this.image.height;
        }
        

    }

    draw() {
        c.drawImage(
            this.image,
            0,
            0,
            this.image.width / this.frames.max,
            this.image.height,
            this.position.x,
            this.position.y,
            this.image.width / this.frames.max,
            this.image.height
    
        );
    }
}

const player = new Sprite({
    position: {
        x: canvas.width / 2 - (192 / 4) / 2,
        y: canvas.height / 2 - 68 / 2
    },
    image: playerImage,
    frames: {
        max: 4
    }
})

const background = new Sprite({position: {
    x: offset.x,
    y: offset.y
}, image: image})

const foreground = new Sprite({position: {
    x: offset.x,
    y: offset.y
}, image: foreground_img});

const keys = {
    z: {
        pressed: false
    },
    s: {
        pressed: false
    },
    q: {
        pressed: false
    },
    d: {
        pressed: false
    },
}

const movables = [background, foreground, ...boundaries];

function rectangularCollision({rectangle1, rectangle2}) {
    return (rectangle1.position.x + rectangle1.width >= rectangle2.position.x &&
        rectangle1.position.x <= rectangle2.position.x + rectangle2.width &&
        rectangle1.position.y + rectangle1.height >= rectangle2.position.y &&
        rectangle1.position.y <= rectangle2.position.y + rectangle2.height)
}

let lastKey = [];

function animate() {
    window.requestAnimationFrame(animate);
    background.draw();
    // boundaries.forEach(boundary => {
    //     boundary.draw();
    // })
    player.draw();
    foreground.draw()
    let moving = true;
    if (keys.z.pressed && lastKey.at(-1) == 'z'){
        for (let i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i];
            if (rectangularCollision({rectangle1: player, rectangle2: {...boundary, position: {
                x: boundary.position.x,
                y: boundary.position.y + 3
            }}})){
                console.log("Colliding");
                moving = false
                break
            }
        }
        if (moving){
            movables.forEach(movable => {
                movable.position.y += 3
            })
        }
    }
    if (keys.s.pressed && lastKey.at(-1) == 's'){
        for (let i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i];
            if (rectangularCollision({rectangle1: player, rectangle2: {...boundary, position: {
                x: boundary.position.x,
                y: boundary.position.y - 3
            }}})){
                console.log("Colliding");
                moving = false
                break
            }
        }
        if (moving){
            movables.forEach(movable => {
                movable.position.y -= 3
            })
        }
    }
    if (keys.q.pressed && lastKey.at(-1) == 'q'){
        for (let i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i];
            if (rectangularCollision({rectangle1: player, rectangle2: {...boundary, position: {
                x: boundary.position.x + 3,
                y: boundary.position.y
            }}})){
                console.log("Colliding");
                moving = false
                break
            }
        }
        if (moving){
            movables.forEach(movable => {
                movable.position.x += 3
            })
        }
    }
    if (keys.d.pressed && lastKey.at(-1) == 'd'){
        for (let i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i];
            if (rectangularCollision({rectangle1: player, rectangle2: {...boundary, position: {
                x: boundary.position.x - 3,
                y: boundary.position.y
            }}})){
                console.log("Colliding");
                moving = false
                break
            }
        }
        if (moving){
            movables.forEach(movable => {
                movable.position.x -= 3
            })
        }
    }
}
animate()

window.addEventListener('keydown', (e) => {
    switch(e.key) {
        case 'z':
            keys.z.pressed = true;
            if (!lastKey.includes('z'))
                lastKey.push('z');
            break;
        case 's':
            keys.s.pressed = true;
            if (!lastKey.includes('s'))
                lastKey.push('s');
            break;
        case 'q':
            keys.q.pressed = true;
            if (!lastKey.includes('q'))
                lastKey.push('q');
            break;
        case 'd':
            keys.d.pressed = true;
            if (!lastKey.includes('d'))
                lastKey.push('d');
            break;
    }
});

window.addEventListener('keyup', (e) => {
    switch(e.key) {
        case 'z':
            keys.z.pressed = false;
            lastKey.splice(lastKey.indexOf('z'), 1);
            break;
        case 's':
            keys.s.pressed = false;
            lastKey.splice(lastKey.indexOf('s'), 1);
            break;
        case 'q':
            keys.q.pressed = false;
            lastKey.splice(lastKey.indexOf('q'), 1);
            break;
        case 'd':
            keys.d.pressed = false;
            lastKey.splice(lastKey.indexOf('d'), 1);
            break;
    }
});
