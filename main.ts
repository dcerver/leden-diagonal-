let Pixel = 0
basic.forever(function () {
    led.plot(Pixel, 0)
    basic.pause(500)
    led.unplot(Pixel, 0)
    Pixel += 1
    if (Pixel > 4) {
        Pixel = 0
    }
})
