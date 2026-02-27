def on_button_pressed_a():
    HUMAN.set(LedSpriteProperty.Y, 3)
    basic.pause(250)
    HUMAN.set(LedSpriteProperty.Y, 2)
    basic.pause(250)
    HUMAN.set(LedSpriteProperty.Y, 3)
    basic.pause(250)
    HUMAN.set(LedSpriteProperty.Y, 4)
    basic.pause(150)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    pass
input.on_button_pressed(Button.B, on_button_pressed_b)

HUMAN: game.LedSprite = None
HUMAN = game.create_sprite(0, 4)
spike = game.create_sprite(4, 4)
spike2 = game.create_sprite(3, 4)

def on_forever():
    for index in range(4):
        basic.pause(1000)
        spike2.move(4)
        spike.move(4)
    game.set_score(4)
    for index2 in range(4):
        basic.pause(1000)
        spike.move(3)
        spike2.move(4)
    game.set_score(8)
    spike.change(LedSpriteProperty.Y, -1)
    spike.move(1)
    for index3 in range(1):
        basic.pause(1000)
        spike2.move(4)
        spike.move(4)
    game.set_score(9)
    spike.change(LedSpriteProperty.Y, 1)
    for index4 in range(4):
        basic.pause(1000)
        spike2.move(3)
        spike.move(4)
    game.set_score(13)
    for index5 in range(4):
        basic.pause(1000)
        spike2.move(4)
        spike.move(4)
    game.set_score(17)
    for index6 in range(2):
        basic.pause(1000)
        spike2.move(4)
        spike.move(3)
    game.set_score(19)
    spike.delete()
    HUMAN.delete()
    spike2.delete()
    basic.clear_screen()
    basic.pause(100)
    basic.show_leds("""
        # . . # .
        . # . . #
        # . . # .
        . # . . #
        # . . # .
        """)
    basic.pause(100)
    basic.show_leds("""
        . # . # .
        # . . . #
        . # . # .
        # . . . #
        . # . # .
        """)
    basic.pause(100)
    basic.show_leds("""
        . # . . #
        # . . # .
        . # . . #
        # . . # .
        . # . . #
        """)
    basic.pause(100)
    basic.show_leds("""
        # . . # .
        . # . . #
        # . . # .
        . # . . #
        # . . # .
        """)
    basic.show_string("LEVEL COMPLETE THANKS FOR PLAYING")
    game.game_over()
basic.forever(on_forever)

def on_forever2():
    basic.pause(200)
    spike.move(-1)
    spike2.move(-1)
    basic.pause(200)
    spike2.move(-1)
    spike.move(-1)
    if HUMAN.is_touching(spike):
        game.game_over()
    if HUMAN.is_touching(spike2):
        game.game_over()
basic.forever(on_forever2)
