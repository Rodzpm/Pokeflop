const battleBackgroundImage = new Image();
battleBackgroundImage.src = "./src/game/Battle/img/battleBackground.png";

const battleBackground = new Sprite({position: {
    x: 0,
    y: 0
}, image: battleBackgroundImage})

function BattleScene() {
    window.requestAnimationFrame(BattleScene);
    battleBackground.draw();
}
