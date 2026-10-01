info.onCountdownEnd(function () {
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
let tourist: Sprite = null
let babyDino: Sprite = null
scene.setBackgroundImage(sprites.background.cityscape2)
let mamaDino = sprites.create(assets.image`Mama`, SpriteKind.Player)
controller.moveOnlyOnscreenWithArrows(mamaDino, controller.Speeds.Fast)
scroller.scrollBackgroundWithSpeed(-50, 0)
info.startCountdown(15)
animation.runImageAnimation(
mamaDino,
assets.animation`Mama Moving`,
100,
true
)
forever(function () {
    babyDino = sprites.createProjectileFromSide(assets.image`Baby`, -90, 0)
    babyDino.y = randint(15, 115)
    animation.runImageAnimation(
    babyDino,
    assets.animation`Animated Baby`,
    100,
    true
    )
    pause(1000)
})
forever(function () {
    tourist = sprites.createProjectileFromSide(assets.image`Tourist`, -90, 0)
    tourist.y = randint(15, 115)
    tourist.setKind(SpriteKind.Enemy)
    animation.runImageAnimation(
    tourist,
    assets.animation`Animated Tourist`,
    100,
    true
    )
    pause(2100)
})
