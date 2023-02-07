window.addEventListener('keydown', (e) => {
    if (battle.initiated) return;
    switch(e.key) {
        case 'z':
            keys.z.pressed = true;
            player.moving = true;
            player.image = player.sprites.up;
            if (!lastKey.includes('z'))
                lastKey.push('z');
            break;
        case 's':
            keys.s.pressed = true;
            player.moving = true;
            player.image = player.sprites.down;
            if (!lastKey.includes('s'))
                lastKey.push('s');
            break;
        case 'q':
            keys.q.pressed = true;
            player.moving = true;
            player.image = player.sprites.left;
            if (!lastKey.includes('q'))
                lastKey.push('q');
            break;
        case 'd':
            keys.d.pressed = true;
            player.moving = true;
            player.image = player.sprites.right;
            if (!lastKey.includes('d'))
                lastKey.push('d');
            break;
    }
});

window.addEventListener('keyup', (e) => {
    if (battle.initiated) return;
    switch(e.key) {
        case 'z':
            keys.z.pressed = false;
            lastKey.splice(lastKey.indexOf('z'), 1);
            break;
        case 's':
            keys.s.pressed = false;
            lastKey.splice(lastKey.indexOf('s'), 1);
            break;
        case 'q':
            keys.q.pressed = false;
            lastKey.splice(lastKey.indexOf('q'), 1);
            break;
        case 'd':
            keys.d.pressed = false;
            lastKey.splice(lastKey.indexOf('d'), 1);
            break;
    }
    if (lastKey.at(-1) == 'z')
        player.image = player.sprites.up;
    if (lastKey.at(-1) == 's')
        player.image = player.sprites.down;
    if (lastKey.at(-1) == 'q')
        player.image = player.sprites.left;
    if (lastKey.at(-1) == 'd')
        player.image = player.sprites.right;
    if (lastKey.length === 0)
        player.moving = false;
});