input.onButtonPressed(Button.A, function () {
    images.iconImage(IconNames.Heart).showImage(0)
})
input.onButtonPressed(Button.B, function () {
    seznam[randint(0, 2)].showImage(0)
})
input.onGesture(Gesture.Shake, function () {
    seznam[randint(0, 2)].showImage(0)
})
let seznam: Image[] = []
seznam = [images.createImage(`
    # # . . #
    # # . # .
    . . # . .
    # # . # .
    # # . . #
    `), images.createImage(`
    . . . . .
    . # # # .
    # # # # #
    . # # # .
    . . . . .
    `), images.createImage(`
    # # # # .
    # . . # .
    # . . # .
    # . . # .
    # # # # .
    `)]
basic.forever(function () {
	
})
