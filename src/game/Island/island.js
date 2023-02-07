//MAP
const backgroundImage = new Image();
backgroundImage.src = "./src/game/Island/img/Pokeflop_Map.png";

const foregroundImage = new Image();
foregroundImage.src = "./src/game/Island/img/Foreground_Map.png";

//PLAYER
const playerDownImage = new Image();
playerDownImage.src = "./src/game/Island/img/playerDown.png";

const playerUpImage = new Image();
playerUpImage.src = "./src/game/Island/img/playerUp.png";

const playerLeftImage = new Image();
playerLeftImage.src = "./src/game/Island/img/playerLeft.png";

const playerRightImage = new Image();
playerRightImage.src = "./src/game/Island/img/playerRight.png";

const player = new Sprite({
    position: {
        x: canvas.width / 2 - (192 / 4) / 2,
        y: canvas.height / 2 - 68 / 2
    },
    image: playerDownImage,
    frames: {
        max: 4,
        hold: 10
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

const movables = [background, foreground, ...boundaries, ...battleZones];

const battle = {
    initiated: false
};


function Island() {
    setTimeout(() => {
        const animationId = window.requestAnimationFrame(Island);
        //draw
        background.draw();
        player.draw();
        foreground.draw();
        MovePlayer((keys.z.pressed && lastKey.at(-1) == 'z' && !battle.initiated), {x:0,y:PLAYER_SPEED}, animationId);
        MovePlayer((keys.s.pressed && lastKey.at(-1) == 's' && !battle.initiated), {x:0,y:-PLAYER_SPEED}, animationId);
        MovePlayer((keys.q.pressed && lastKey.at(-1) == 'q' && !battle.initiated), {x:PLAYER_SPEED,y:0}, animationId);
        MovePlayer((keys.d.pressed && lastKey.at(-1) == 'd' && !battle.initiated ), {x:-PLAYER_SPEED,y:0}, animationId);
    }, 1000 / FPS);
}
