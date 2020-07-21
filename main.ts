input.onButtonPressed(Button.A, function () {
    counter = 1
})
input.onButtonPressed(Button.B, function () {
    while (counter > 0) {
        counter = 1
        basic.pause(1000)
    }
})
let counter = 0
counter = 3
basic.forever(function () {
    basic.showNumber(counter)
})
