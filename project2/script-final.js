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
let winterWrapper = document.querySelector("#winterWrapper")
let finalWrapper = document.querySelector("#finalWrapper")

let springbgm = document.createElement("audio")
springbgm.src = "sounds/springbgm.mp3"
let summerbgm = document.createElement("audio")
summerbgm.src = "sounds/summerbgm.mp3"
let autumnbgm = document.createElement("audio")
autumnbgm.src = "sounds/autumnbgm.mp3"
let winterbgm = document.createElement("audio")
winterbgm.src = "sounds/winterbgm.mp3"
let finalbgm = document.createElement("audio")
finalbgm.src = "sounds/hellomuseinst.mp3"
let finalbgm2 = document.createElement("audio")
finalbgm2.src = "sounds/hellomusevocal.mp3"


finalbgm.play()
finalbgm.loop = true
finalbgm.volume = 0.65
finalbgm2.play()
finalbgm2.loop = true
finalbgm2.volume = 0


springWrapper.style.cursor = "pointer"
springWrapper.addEventListener("mouseover", function () {
    springWrapper.style.scale = 1.05
    finalbgm.volume = 0.15
    springbgm.play()
    springbgm.loop = true
})
springWrapper.addEventListener("mouseout", function () {
    springWrapper.style.scale = 1
    springbgm.pause()
    finalbgm.volume = 0.65
})
springWrapper.addEventListener("click", function () {
    document.location = "spring3.html"
})

summerWrapper.style.cursor = "pointer"
summerWrapper.addEventListener("mouseover", function () {
    summerWrapper.style.scale = 1.05
    finalbgm.volume = 0.15
    summerbgm.play()
    summerbgm.loop = true
})
summerWrapper.addEventListener("mouseout", function () {
    summerWrapper.style.scale = 1
    summerbgm.pause()
    finalbgm.volume = 0.65
})
summerWrapper.addEventListener("click", function () {
    document.location = "summer.html"
})

autumnWrapper.style.cursor = "pointer"
autumnWrapper.addEventListener("mouseover", function () {
    autumnWrapper.style.scale = 1.05
    finalbgm.volume = 0.15
    autumnbgm.play()
    autumnbgm.loop = true
})
autumnWrapper.addEventListener("mouseout", function () {
    autumnWrapper.style.scale = 1
    autumnbgm.pause()
    finalbgm.volume = 0.65
})
autumnWrapper.addEventListener("click", function () {
    document.location = "autumn1.html"
})

winterWrapper.style.cursor = "pointer"
winterWrapper.addEventListener("mouseover", function () {
    winterWrapper.style.scale = 1.05
    finalbgm.volume = 0.15
    winterbgm.play()
    winterbgm.loop = true
})
winterWrapper.addEventListener("mouseout", function () {
    winterWrapper.style.scale = 1
    winterbgm.pause()
    finalbgm.volume = 0.65
})
winterWrapper.addEventListener("click", function () {
    document.location = "winter.html"
})

finalWrapper.style.cursor = "pointer"
finalWrapper.addEventListener("mouseover", function () {
    finalWrapper.style.scale = 1.05
    finalbgm.volume = 0
    finalbgm2.volume = 1    
})
finalWrapper.addEventListener("mouseout", function () {
    finalWrapper.style.scale = 1
    finalbgm.volume = 0.65
    finalbgm2.volume = 0 
})
finalWrapper.addEventListener("click", function () {
    document.location = "hello-muse.html"
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