let catSound = document.querySelector("#catSound")

let playAndPause = document.querySelector("#playAndPause")
let playBtn = document.querySelector("#playButton")
let pauseBtn = document.querySelector("#pauseButton")
let speedBtn = document.querySelector("#speedButton")
let slowBtn = document.querySelector("slowButton")


playSwitch = false
playAndPause.addEventListener("click", function () {
    if (playSwitch == false) {
        playSwitch = true
        catSound.play()
    }
    else {
        playSwitch = false
        catSound.pause()
    }
})


playBtn.addEventListener("click", function () {
    catSound.loop = true
    catSound.play()
})
pauseBtn.addEventListener("click", function () {
    catSound.pause()
})


let i = 1
speedBtn.addEventListener("click", function () {
    i *= 1.1
    catSound.playbackRate = i
})
slowBtn.addEventListener("click", function () {
    i *= 0.9
    if (i < 0.5) {
        i = 0.5
    }
    catSound.playbackRate = i
})