const tackle = {
    name: 'Tackle',
    damage: 10,
    type: 'Normal',
    color: 'black'
};

const ratio = {
    name: 'Ratio',
    damage: 100,
    type: 'Flop',
    color: 'yellow'
};

const fireballImage = new Image();
fireballImage.src = "./src/game/Battle/img/fireball.png";

const fireballSprite = new Sprite({
    position: {
        x: 0,
        y: 0,
    },
    frames: {
        max: 4,
        hold: 10
    },
    animate: true,
    rotation: 1,
    image: fireballImage,
});

const fireball = {
    name: 'Fireball',
    damage: 20,
    type: 'Fire',
    color: 'red'
};