const draggleImage = new Image();
draggleImage.src = "./src/game/Pokemons/img/draggleSprite.png";

const draggle = new Pokemon({
    position: {
        x: 800,
        y: 100
    },
    frames: {
        max: 4,
        hold: 30,
    },
    image: draggleImage,
    animate: true,
    isEnemy: true,
    attacks: {
        attack1: tackle,
        attack2: fireball
    },
    name: "draggle"
});