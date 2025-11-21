let minuteWrapper = document.querySelector(".minuteWrapper")
let minuteClass = document.querySelectorAll(".minute")
let hourshow = document.querySelector(".hourshow")
// 下面是按px算的
let clientHeight = document.documentElement.clientHeight
let clientWidth = document.documentElement.clientWidth

let audioS = document.createElement("audio")
audioS.src = "sounds/轻响指.wav"
let audioM = document.createElement("audio")
audioM.src = "sounds/噗.wav"

function repeat(n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}

let now = new Date(); // returns the current moment

let h = now.getHours();      // 0–23
let m = now.getMinutes();    // 0–59
let s = now.getSeconds();    // 0–59


repeat(m, function () { minutes(h); })

// bgcolor setting
if (h < 12) {
    document.body.style.backgroundColor = "rgba(17, 49, 93, 1)"
} else {
    document.body.style.backgroundColor = "rgba(26, 20, 62, 1)"
}


function remove(e) {
    e.remove()
}

function getTime() {
    let now = new Date(); // returns the current moment

    let h = now.getHours();      // 0–23
    let m = now.getMinutes();    // 0–59
    let s = now.getSeconds();    // 0–59

    console.log(h, m, s);
    // minuteClass.forEach(function (e) {
    //     e.classList.toggle("sparkle")
    // })
    if (s == 0) {
        minuteWrapper.innerHTML = ""
        repeat(m, function () {
            minutes(h);
        })
        // audioM.play()
    }
    if (s != 0) {
        // audioS.play()
    }

    // select all minute stars
    let minuteStars = document.querySelectorAll(".minute")

    // call toggleSparkle for each of them
    minuteStars.forEach(toggleSparkle)

}

setInterval(getTime, 1000)


function toggleSparkle(element) {
    element.classList.toggle("sparkle")
}



function minutes(h) {

    let minute = document.createElement("div")
    minute.classList.add("minute")

    r = Math.floor(Math.random() * 2)
    if (r == 0) {
        minute.classList.add("sparkle")
    }

    // color setting
    if (h == 0) {
        minute.style.backgroundColor = "rgb(255,255,255)"
    } else if (h == 1 || h == 23) {
        minute.style.backgroundColor = "rgb(239,245,255)"
    } else if (h == 2 || h == 22) {
        minute.style.backgroundColor = "rgb(224,236,255)"
    } else if (h == 3 || h == 21) {
        minute.style.backgroundColor = "rgb(209,227,255)"
    } else if (h == 4 || h == 20) {
        minute.style.backgroundColor = "rgb(193,218,255)"
    } else if (h == 5 || h == 19) {
        minute.style.backgroundColor = "rgb(178,209,255)"
    } else if (h == 6 || h == 18) {
        minute.style.backgroundColor = "rgb(163,199,255)"
    } else if (h == 7 || h == 17) {
        minute.style.backgroundColor = "rgb(147,190,255)"
    } else if (h == 8 || h == 16) {
        minute.style.backgroundColor = "rgb(132,181,255)"
    } else if (h == 9 || h == 15) {
        minute.style.backgroundColor = "rgb(117,172,255)"
    } else if (h == 10 || h == 14) {
        minute.style.backgroundColor = "rgb(101,163,255)"
    } else if (h == 11 || h == 13) {
        minute.style.backgroundColor = "rgb(86,153,255)"
    } else {
        minute.style.backgroundColor = "rgb(71,144,255)"
    }

    minuteWrapper.append(minute)

    let rTop = Math.random() * 97 + 1
    let rLeft = Math.random() * 97 + 1
    minute.style.top = rTop + "vh"
    minute.style.left = rLeft + "vw"

    let hourshowTop = ((h - 1) * 9 + 4) * 100 / clientHeight
    let hourshowLeft = 16 * 100 / clientWidth



    minute.addEventListener("mouseover", function (e) {
        hourshow.style.opacity = 1
        // let styles = { hourshow: { top: 'calc(rTop vh - (h-1)*9 px)' } }
        hourshow.style.top = (rTop - hourshowTop) + "vh"
        hourshow.style.left = (rLeft - hourshowLeft) + "vw"
        console.log("works!")
    })
    minute.addEventListener("mouseout", function () {
        hourshow.style.opacity = 0
    })






    // minute.addEventListener("mouseover", hourshow)
    // minute.addEventListener("mouseout", function () {
    //     document.querySelector(".hourshow").remove
    // })

    // function hourshow() {
    //     let hourShowDiv = document.createElement("div")
    //     hourShowDiv.classList.add("hourshow")

    //     hourShowDiv.style.top = minute.style.top - ((h - 1) * 8 + "px")
    //     hourShowDiv.style.left = minute.style.left - (16 + "px")


    //     let hourDivZeroOne = document.createElement("div")
    //     hourDivZeroOne.classList.add("hourdiv")
    //     hourDivZeroOne.style.backgroundColor = "rgba(13, 41, 55, 1)"
    //     document.querySelector("#hourshow").append(hourDivZeroOne)




    //     document.body.append(hourShowDiv)
    // }

}







