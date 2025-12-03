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

window.addEventListener("scroll", function () {
    percentage = getScrollPercentage() //0-100


    //background color change
    if (percentage > 50) {
        document.querySelector("#backgroundAutumn").style.opacity = (percentage - 40) / 60
    } else {
        document.querySelector("#backgroundAutumn").style.opacity = 0
    }



})