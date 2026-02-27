input.onButtonPressed(Button.A, function () {
    HUMAN.set(LedSpriteProperty.Y, 3)
    basic.pause(250)
    HUMAN.set(LedSpriteProperty.Y, 2)
    basic.pause(250)
    HUMAN.set(LedSpriteProperty.Y, 3)
    basic.pause(250)
    HUMAN.set(LedSpriteProperty.Y, 4)
    basic.pause(150)
})
input.onButtonPressed(Button.B, function () {
	
})
let HUMAN: game.LedSprite = null
HUMAN = game.createSprite(0, 4)
let spike = game.createSprite(4, 4)
let spike2 = game.createSprite(3, 4)
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        basic.pause(1000)
        spike2.move(4)
        spike.move(4)
    }
    game.setScore(4)
    for (let index = 0; index < 4; index++) {
        basic.pause(1000)
        spike.move(3)
        spike2.move(4)
    }
    game.setScore(8)
    spike.change(LedSpriteProperty.Y, -1)
    spike.move(1)
    for (let index = 0; index < 1; index++) {
        basic.pause(1000)
        spike2.move(4)
        spike.move(4)
    }
    game.setScore(9)
    spike.change(LedSpriteProperty.Y, 1)
    for (let index = 0; index < 4; index++) {
        basic.pause(1000)
        spike2.move(3)
        spike.move(4)
    }
    game.setScore(13)
    for (let index = 0; index < 4; index++) {
        basic.pause(1000)
        spike2.move(4)
        spike.move(4)
    }
    game.setScore(17)
    for (let index = 0; index < 2; index++) {
        basic.pause(1000)
        spike2.move(4)
        spike.move(3)
    }
    game.setScore(19)
    spike.delete()
    HUMAN.delete()
    spike2.delete()
    basic.clearScreen()
    basic.pause(100)
    basic.showLeds(`
        # . . # .
        . # . . #
        # . . # .
        . # . . #
        # . . # .
        `)
    basic.pause(100)
    basic.showLeds(`
        . # . # .
        # . . . #
        . # . # .
        # . . . #
        . # . # .
        `)
    basic.pause(100)
    basic.showLeds(`
        . # . . #
        # . . # .
        . # . . #
        # . . # .
        . # . . #
        `)
    basic.pause(100)
    basic.showLeds(`
        # . . # .
        . # . . #
        # . . # .
        . # . . #
        # . . # .
        `)
    basic.showString("LEVEL COMPLETE THANKS FOR PLAYING")
    game.gameOver()
})
basic.forever(function () {
    basic.pause(200)
    spike.move(-1)
    spike2.move(-1)
    basic.pause(200)
    spike2.move(-1)
    spike.move(-1)
    if (HUMAN.isTouching(spike)) {
        game.gameOver()
    }
    if (HUMAN.isTouching(spike2)) {
        game.gameOver()
    }
})
