function BattleAnim(repeat, duration)
{
    gsap.to('.overlapping', {
        opacity: 1,
        repeat: repeat,
        yoyo: true,
        duration: duration,
        onComplete() {
            BattleScene();
            gsap.to('.overlapping', {
                opacity: 0,
                duration: 1,
            })
        }
    })
}


