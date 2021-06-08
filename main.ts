controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    pee = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 5 5 5 5 . . . . 
        . . 5 . . . 5 5 5 5 5 5 5 . . . 
        . . . . . 5 5 5 5 5 5 5 5 . . . 
        . . . . 5 5 5 5 5 5 5 5 5 5 . . 
        . 5 . 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . . . 5 5 5 5 5 5 5 5 5 5 . . 
        . . . . . 5 5 5 5 5 5 5 5 5 . . 
        . . . 5 . 5 5 5 5 5 5 5 5 5 . . 
        . . . . . . 5 5 5 5 5 5 5 5 . . 
        . . . . . . . . 5 5 5 5 5 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, poo, 50, 0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeLifeBy(1)
    otherSprite.destroy(effects.hearts, 200)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
    sprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy(effects.fire, 200)
})
let more_poo: Sprite = null
let toliet: Sprite = null
let pee: Sprite = null
let poo: Sprite = null
scene.setBackgroundColor(9)
poo = sprites.create(img`
    . . f f . . . . . . . . f . . . 
    . f f . . . e e . . . f . . . f 
    . f . . . . . e . . . f f . f . 
    . f . . e e e e e e e . f . f . 
    . f . . e e e e e e e . . . . . 
    . . . . e e e e e e e . . . . . 
    . . e e e e e e e e e e e . . . 
    . e e e e e e e e e e e e . . . 
    . e e e e e e e e e e e e e . . 
    . e e e e e e e e e e e e e e . 
    . e e e e e e e e e e e e e . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
poo.setPosition(15, 60)
controller.moveSprite(poo)
info.setLife(3)
info.setScore(0)
poo.setStayInScreen(true)
game.onUpdateInterval(1000, function () {
    toliet = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 1 1 1 1 1 1 . . . . 
        . . . . . . 1 1 1 1 1 1 . . . . 
        . . . . . . . 1 1 1 1 1 . . . . 
        . . . . . . . 1 1 1 1 1 . . . . 
        . . . . . . . 1 1 1 1 1 . . . . 
        . 1 8 8 8 8 1 1 1 1 1 1 . . . . 
        . 1 1 1 1 1 1 1 1 1 1 1 . . . . 
        . 1 1 1 1 1 1 1 1 1 1 1 . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . 1 1 1 1 1 1 1 . . . . . 
        . . . . 1 1 1 1 1 1 . . . . . . 
        . . . . 1 1 1 1 1 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    toliet.setPosition(115, randint(0, 120))
    toliet.setVelocity(-50, 0)
    toliet.setFlag(SpriteFlag.AutoDestroy, true)
})
game.onUpdateInterval(10000, function () {
    more_poo = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . e e . . . . . 
        . . . . . . . . . . e . . . . . 
        . . . . . . . f f e e e e . . . 
        . . . . . . . e e f e e e e . . 
        . . . . . . . . e f f f e e e . 
        . . . . . . e e e e e f e e e . 
        . . . . . e e e e e e e f e e e 
        . . . . e e e e e e e e e f . . 
        . . . e e e e e e e e e e e . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    more_poo.setPosition(115, randint(0, 120))
    more_poo.setVelocity(-50, 0)
})
