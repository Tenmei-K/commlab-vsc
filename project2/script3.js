function getScrollPercentage() {
    let scrollTop = window.scrollY
    // how far can we scroll in total
    let maxScroll = document.body.scrollHeight - window.innerHeight

    let scrollPercentage = scrollTop / maxScroll * 100

    // console.log(scrollPercentage)

    return scrollPercentage
}


let mainWrapper = document.querySelector("#mainWrapper")
let wrapper = document.querySelectorAll(".wrapper")
let springWrapper = document.querySelector("#springWrapper")
let summerWrapper = document.querySelector("#summerWrapper")
let autumnWrapper = document.querySelector("#autumnWrapper")

let springbgm = document.createElement("audio")
springbgm.src = "sounds/springbgm.mp3"
let summerbgm = document.createElement("audio")
summerbgm.src = "sounds/summerbgm.mp3"



springWrapper.addEventListener("mouseover", function () {
    springWrapper.style.scale = 1.05
    springbgm.play()
    springbgm.loop = true
})
springWrapper.addEventListener("mouseout", function () {
    springWrapper.style.scale = 1
    springbgm.pause()
})
springWrapper.addEventListener("click", function () {
    document.location = "spring3.html"
})

summerWrapper.addEventListener("mouseover", function () {
    summerWrapper.style.scale = 1.05
    summerbgm.play()
    summerbgm.loop = true
})
summerWrapper.addEventListener("mouseout", function () {
    summerWrapper.style.scale = 1
    summerbgm.pause()
})
summerWrapper.addEventListener("click", function () {
    document.location = "summer.html"
})

autumnWrapper.addEventListener("mouseover", function () {
    autumnWrapper.style.scale = 1.05
})
autumnWrapper.addEventListener("mouseout", function () {
    autumnWrapper.style.scale = 1
})
autumnWrapper.addEventListener("click", function () {
    document.location = "autumn1.html"
})

window.addEventListener("scroll", function () {
    percentage = getScrollPercentage() // 0-100

    console.log("scrolling")


    mainWrapper.style.top = 25 * (50 - percentage) / 50 - percentage * 1.4 + "%"
    if (mainWrapper.style.top > 0) {
        mainWrapper.style.top = 0
    }
    mainWrapper.style.rotate = percentage / 100 * 60 + "deg"

    if (percentage <= 25) {
        mainWrapper.style.right = percentage / 25 * 6.9 + "%"
    }
    if (percentage > 25 && percentage <= 50) {
        mainWrapper.style.right = 6.9 - (percentage - 25) / 25 * 0.25 + "%"
    }
    if (percentage > 50 && percentage <= 75) {
        mainWrapper.style.right = 6.65 - (percentage - 50) / 25 * 7.75 + "%"
    }
    if (percentage > 75) {
        mainWrapper.style.right = -1.1 - (percentage - 75) / 25 * 14.1 + "%"
    }



})