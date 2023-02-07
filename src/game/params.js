//canvas size
const CANVAS_WIDTH = 1024;
const CANVAS_HEIGHT = 576;

//canvas manager
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

//map offset
const OFFSET = {
    x: -400,
    y: -350
}

const PLAYER_SPEED = 6;

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

let FPS = 60;