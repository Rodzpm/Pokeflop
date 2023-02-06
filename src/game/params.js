//canvas size
const CANVAS_WIDTH = 1024;
const CANVAS_HEIGHT = 576;

//map offset
const OFFSET = {
    x: -400,
    y: -350
}

const PLAYER_SPEED = 3;

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

let lastKey = [];

