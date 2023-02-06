//canvas manager
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

const player = new Sprite({
    position: {
        x: canvas.width / 2 - (192 / 4) / 2,
        y: canvas.height / 2 - 68 / 2
    },
    image: playerDownImage,
    frames: {
        max: 4
    },
    sprites: {
        up: playerUpImage,
        down: playerDownImage,
        left: playerLeftImage,
        right: playerRightImage
    }
})

const background = new Sprite({position: {
    x: OFFSET.x,
    y: OFFSET.y
}, image: backgroundImage})

const foreground = new Sprite({position: {
    x: OFFSET.x,
    y: OFFSET.y
}, image: foregroundImage});

const movables = [background, foreground, ...boundaries];

function Game() {
    window.requestAnimationFrame(Game);
    //draw
    background.draw();
    player.draw();
    foreground.draw()
    MovePlayer((keys.z.pressed && lastKey.at(-1) == 'z'), {x:0,y:PLAYER_SPEED});
    MovePlayer((keys.s.pressed && lastKey.at(-1) == 's'), {x:0,y:-PLAYER_SPEED});
    MovePlayer((keys.q.pressed && lastKey.at(-1) == 'q'), {x:PLAYER_SPEED,y:0});
    MovePlayer((keys.d.pressed && lastKey.at(-1) == 'd'), {x:-PLAYER_SPEED,y:0});
}
Game();
