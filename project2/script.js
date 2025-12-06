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



springWrapper.addEventListener("mouseover", function () {
    springWrapper.style.scale = 1.05
})
springWrapper.addEventListener("mouseout", function () {
    springWrapper.style.scale = 1
})
springWrapper.addEventListener("click", function () {
    document.location = "spring.html"
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