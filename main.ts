input.onButtonPressed(Button.A, function () {
    radio.sendString("A")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("B")
})
radio.setGroup(54)
basic.showIcon(IconNames.SmallDiamond)
