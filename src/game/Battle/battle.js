const battleBackgroundImage = new Image();
battleBackgroundImage.src = "./src/game/Battle/img/battleBackground.png";

const battleBackground = new Sprite({position: {
    x: 0,
    y: 0
}, image: battleBackgroundImage})

const renderedSprites = [];
const queue = []

document.querySelector('#attack1').innerHTML = emby.attacks["attack1"].name;
document.querySelector('#attack2').innerHTML = emby.attacks["attack2"].name;

function BattleScene() {
    setTimeout(() => {
        if (battle.initiated) {
            const battleId = window.requestAnimationFrame(BattleScene);
            battleBackground.draw();
            draggle.draw();
            emby.draw();
            renderedSprites.forEach(sprite => {
                sprite.draw();
            })
        }
    }, 1000 / FPS);
}

document.querySelectorAll('button').forEach(button =>{
    button.addEventListener('click', (e) =>{
        document.querySelector('#dialog').style.display = 'block';
        emby.attack({attack: emby.attacks[button.id], recipient: draggle, renderedSprites});
        if (draggle.health <= 0) {
            queue.push(() => {
                draggle.faint();
            });
            queue.push(() => {
                EndBattleAnim();
            })
            return;
        }
        queue.push( () => {
            draggle.attack({attack: draggle.attacks['attack' + Math.floor(Math.random() * (2 - 1 + 1) + 1)], recipient: emby, renderedSprites})
        });
    })

    button.addEventListener('mouseenter', (e) => {
        document.querySelector('#type').innerHTML = emby.attacks[button.id].type;
        document.querySelector('#type').style.color = emby.attacks[button.id].color;
    });
})

document.querySelector('#dialog').addEventListener('click', (e) => {
    if (queue.length > 0) {
        queue[0]();
        queue.shift();
        if (emby.health <= 0) {
            queue.push(() => {
                emby.faint();
            })
            EndBattleAnim();
            battle.initiated = false;
            return;
        }
    } else {
        e.currentTarget.style.display = 'none'
    };
});




