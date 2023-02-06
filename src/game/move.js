function MovePlayer(toMove, move)
{
    if (toMove) {
        for (let i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i];
            if (rectangularCollision({rectangle1: player, rectangle2: {...boundary, position: {
                x: boundary.position.x + move.x,
                y: boundary.position.y + move.y
            }}})){
                return;
            }
        }
        movables.forEach(movable => {
            movable.position.x += move.x;
            movable.position.y += move.y;
        })
    }
}
