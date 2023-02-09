const audio = {
    Map: new Howl({
        src: './src/game/Island/audio/map.wav',
        html5: true,
        loop: true,
    }),
    Battle: new Howl({
        src: './src/game/Battle/audio/battle.mp3',
        html5: true,
        loop: true,
    }),
    tackleHit: new Howl({
        src: './src/game/Battle/audio/tackleHit.wav',
        html5: true,
    }),
    initBattle: new Howl({
        src: './src/game/Battle/audio/initBattle.wav',
        html5: true,
    }),
    initFireball: new Howl({
        src: './src/game/Battle/audio/initFireball.wav',
        html5: true,
    }),
    fireballHit: new Howl({
        src: './src/game/Battle/audio/fireballHit.wav',
        html5: true,
    }),
    Victory: new Howl({
        src: './src/game/Battle/audio/victory.wav',
        html5: true,
    })
};