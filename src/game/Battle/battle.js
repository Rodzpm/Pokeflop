const battleBackgroundImage = new Image();
battleBackgroundImage.src = "./src/game/Battle/img/battleBackground.png";

const battleBackground = new Sprite({position: {
    x: 0,
    y: 0
}, image: battleBackgroundImage})

function BattleScene() {
    setTimeout(() => {
        window.requestAnimationFrame(BattleScene);
        battleBackground.draw();
        draggle.draw(); 
    }, 1000 / FPS);
}
