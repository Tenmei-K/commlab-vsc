function repeat(n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}

function getScrollPercentage() {
    let scrollTop = window.scrollY
    // how far can we scroll in total
    let maxScroll = document.body.scrollHeight - window.innerHeight

    let scrollPercentage = scrollTop / maxScroll * 100

    // console.log(scrollPercentage)

    return scrollPercentage
}

let clientHeight = document.body.clientHeight
let clientWidth = document.body.clientWidth
console.log(clientHeight, clientWidth)

window.addEventListener("scroll", function () {
    percentage = getScrollPercentage() // 0-100



    if (percentage > 100 / 8 * 1 && percentage < 100 / 8 * 2) {
        document.querySelector("#lineOne").style.opacity = 1
    } else {
        document.querySelector("#lineOne").style.opacity = 0
    }
    if (percentage > 100 / 8 * 2 && percentage < 100 / 8 * 3) {
        document.querySelector("#lineTwo").style.opacity = 1
    } else {
        document.querySelector("#lineTwo").style.opacity = 0
    }
    if (percentage > 100 / 8 * 3 && percentage < 100 / 8 * 4) {
        document.querySelector("#lineThree").style.opacity = 1
    } else {
        document.querySelector("#lineThree").style.opacity = 0
    }
    if (percentage > 100 / 8 * 4 && percentage < 100 / 8 * 5) {
        document.querySelector("#lineFour").style.opacity = 1
    } else {
        document.querySelector("#lineFour").style.opacity = 0
    }
    if (percentage > 100 / 8 * 5 && percentage < 100 / 8 * 6) {
        document.querySelector("#lineFive").style.opacity = 1
    } else {
        document.querySelector("#lineFive").style.opacity = 0
    }
    if (percentage > 100 / 8 * 6 && percentage < 100 / 8 * 7) {
        document.querySelector("#lineSix").style.opacity = 1
    } else {
        document.querySelector("#lineSix").style.opacity = 0
    }                                                      // 这里应该是没问题的
    if (percentage > 100 / 8 * 7) {
        document.querySelector("#lineSeven").style.opacity = 1
    } else {
        document.querySelector("#lineSeven").style.opacity = 0
    }
    

    if (percentage > 100 / 8 * 7) {
        document.querySelector("#paper").style.opacity = 1
    }

})