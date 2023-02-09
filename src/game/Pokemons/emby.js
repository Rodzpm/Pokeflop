const embyImage = new Image();
embyImage.src = "./src/game/Pokemons/img/embySprite.png";

const emby = new Pokemon({
    position: {
        x: 280,
        y: 325
    },
    frames: {
        max: 4,
        hold: 30,
    },
    image: embyImage,
    animate: true,
    isEnemy: false,
    attacks: {
        attack1: ratio,
        attack2: fireball
    },
    name: "emby"
});