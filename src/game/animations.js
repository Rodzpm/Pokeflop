function BattleAnim(repeat, duration)
{
    gsap.to('.overlapping', {
        opacity: 1,
        repeat: repeat,
        yoyo: true,
        duration: duration,
        onComplete() {
            BattleScene();
            document.querySelector('#life-bar').style.display = 'block';
            document.querySelector('.attack-bar').style.display = 'flex';
            gsap.to('.overlapping', {
                opacity: 0,
                duration: 2,
            })
        }
    })
}

function EndBattleAnim()
{
    Howler.stop()
    audio.Map.play()
    gsap.to('.overlapping', {
        opacity: 1,
        onComplete: () => {
            document.querySelector('#life-bar').style.display = 'none';
            document.querySelector('.attack-bar').style.display = 'none';
            document.querySelector('#dialog').style.display = 'none';
            draggle.health = 100;
            draggle.opacity = 1;
            emby.health = 50;
            emby.opacity = 1;
            document.querySelector('#ally-fullbar').style.width = 100 + '%';
            document.querySelector('#enemy-fullbar').style.width = 100 + '%';
            battle.initiated = false;
            Island();
            gsap.to('.overlapping', {
                opacity: 0,
                duration: 1,
            })

        }
    })
    battle.initiated = false;
}

function TackleAnim(ally, enemy, attack)
{
    const tl = gsap.timeline();
    let movementDistance = 20;
    let healthbar = '#enemy-fullbar';
    if (ally.isEnemy) healthbar = '#ally-fullbar'
    if (ally.isEnemy) movementDistance = -20
    tl.to(ally.position, {
        x: ally.position.x - movementDistance
    }).to(ally.position, {
        x: ally.position.x + movementDistance * 2,
        duration: 0.1,
        onComplete: () => {
            gsap.to(enemy.position, {
                x: enemy.position.x - 10,
                yoyo: true,
                repeat: 5,
                duration: 0.08
            })
            audio.tackleHit.play();
            gsap.to(healthbar, {
                width: enemy.health + '%',
            })
            gsap.to(enemy, {
                opacity: 0.2,
                repeat: 5,
                yoyo: true,
                duration: 0.08,
            })
        }
    }).to(ally.position, {
        x: ally.position.x
    });
}

function deathAnim(pokemon)
{
    gsap.to(pokemon.position, {
        y: pokemon.position.y + 20,
    })
    gsap.to(pokemon, {
        opacity: 0
    })
}

function FireballAnim(ally, enemy, fireball)
{
    let healthbar = '#enemy-fullbar';
    let x = 0;
    let y = 0;
    if (ally.isEnemy) healthbar = '#ally-fullbar'
    if (ally.isEnemy) fireball.rotation = -2.2;
    gsap.to(fireball.position, {
        x: enemy.position.x,
        y: enemy.position.y,
        onComplete: () => {
            renderedSprites.pop();
            gsap.to(enemy.position, {
                x: enemy.position.x - 10,
                yoyo: true,
                repeat: 5,
                duration: 0.08
            })
            audio.fireballHit.play();
            gsap.to(healthbar, {
                width: enemy.health + '%',
            })
            gsap.to(enemy, {
                opacity: 0.2,
                repeat: 5,
                yoyo: true,
                duration: 0.08,
            })
        }
    });
}


