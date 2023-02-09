function GetOverlappingArea(rect1, rect2)
{
    return (Math.min(rect1.position.x + rect1.width,  rect2.position.x + rect2.width) -
    Math.max(rect1.position.x, rect2.position.x)) *
    (Math.min(rect1.position.y + rect1.height,  rect2.position.y + rect2.height) -
    Math.max(rect1.position.y, rect2.position.y));
}

function MovePlayer(toMove, move, animationId, key)
{
    if (toMove) {
        //collision detection
        for (let i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i];
            if (rectangularCollision({rectangle1: player, rectangle2: {...boundary, position: {
                x: boundary.position.x + move.x,
                y: boundary.position.y + move.y
            }}})){
                return;
            }
        }
        //battle detection
        for (let i = 0; i < battleZones.length; i++) {
            const battleZone = battleZones[i];
            const overlappingArea = GetOverlappingArea(player, battleZone);
            if (rectangularCollision({rectangle1: player, rectangle2: battleZone}) &&
            overlappingArea > (player.width * player.width) / 2 && Math.random() < 0.01) {
                //desactivate current animation loop
                window.cancelAnimationFrame(animationId);
                battle.initiated = true;
                key.pressed = false;
                player.animate = false;
                lastKey = [];
                audio.Map.stop()
                audio.initBattle.play()
                audio.Battle.play()
                BattleAnim(6, 0.1);
            }
        }
        movables.forEach(movable => {
            movable.position.x += move.x;
            movable.position.y += move.y;
        })
    }
}
