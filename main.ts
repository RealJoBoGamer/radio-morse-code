radio.onReceivedNumber(function (receivedNumber) {
    basic.showIcon(IconNames.SmallDiamond)
    if (receivedNumber == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            `)
    } else if (receivedNumber == 0) {
        basic.showIcon(IconNames.Square)
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    radio.sendNumber(0)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Yes)
    radio.sendNumber(1)
})
/**
 * t
 */
radio.setGroup(255)
