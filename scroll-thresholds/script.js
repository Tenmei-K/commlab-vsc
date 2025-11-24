function getScrollPercentage() {
    let scrollTop = window.scrollY
    // how far can we scroll in total
    let maxScroll = document.body.scrollHeight - window.innerHeight

    let scrollPercentage = scrollTop / maxScroll * 100

    console.log(scrollPercentage)

    return scrollPercentage
}


window.addEventListener("scroll", function () {
    let percentage = getScrollPercentage()
    console.log(percentage)

    if (percentage > 33) {
        document.querySelector(".one p").style.transform = "rotate(720deg)"
    } else {
        document.querySelector(".one p").style.transform = "rotate(0deg)"
    }


    if (percentage > 75) {
        document.querySelector(".two p").style.scale = 0.3
        document.querySelector(".two p").style.opacity = 1
    } else {
        document.querySelector(".two p").style.scale = 3
        document.querySelector(".two p").style.opacity = 0
    }


    let catAngle = (18000 / 100) * percentage
    document.querySelector("#cat").style.transform = "rotate(" + catAngle + "deg)"

})