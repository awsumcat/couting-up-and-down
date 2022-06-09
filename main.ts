let multiples = 0
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    multiples = 3
    for (let index = 0; index <= 10; index++) {
        multiples = 3 * index
        basic.showNumber(multiples)
    }
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    for (let index = 0; index <= 10; index++) {
        basic.showNumber(5 * index + 10)
    }
    basic.clearScreen()
})
basic.forever(function () {
	
})
