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


let human = document.querySelectorAll(".human")
let AutumnOne = document.querySelector("#AutumnOne")
let AutumnOneP = document.querySelector("#AutumnOneP")
let AutumnOnePP = document.querySelector("#AutumnOnePP")
let AutumnOnePPP = document.querySelector("#AutumnOnePPP")


let lines = document.querySelectorAll(".lines")


let hanaWrapper = document.querySelector("#hanaWrapper");
let treeWrapper = document.querySelector("#TreeWrapper");
let treeHeight = treeWrapper.getBoundingClientRect().height;
// let hanaWrapperBack = document.querySelector("#hanaWrapperBack")

let paperWrapper = document.querySelector("#paperWrapper")


function fall(e, i, p1, p2) {
    // console.log(percentage)
    // let rX = 0//- (Math.random() * 50 + 10) * percentage / 100
    let currentYpix = (Number(e.style.top.substring(0, e.style.top.length - 2)) / 100) * treeHeight;
    let distToFall = (treeHeight - 10) - currentYpix; //10 is the petal size

    let rY = distToFall * ((percentage - p1) / (p2 - p1));

    if (rY < 0) {
        rY = 0;
    } else if (rY > distToFall) {
        rY = distToFall;
    }

    if (i == 0) {
        console.log(e, currentYpix, treeHeight)
    }

    e.style.transform = "translate(0px, " + rY + "px)"

}




let ink = document.querySelectorAll(".ink")
let inkOne = document.querySelector("#inkOne")
let inkTwo = document.querySelector("#inkTwo")


let wind = document.createElement("audio")
wind.src = "sounds/wind.mp3"
wind.loop = true
wind.volume = 0
wind.play()



document.querySelector("#trunkWinter").style.opacity = 0.4
document.querySelector("#backgroundWinter").style.opacity = 0.4




// autumn

// ! position one



//fall four
function hanaOnePositionOneFallFour() {
    let hanaCre = document.createElement("div")
    hanaWrapper.append(hanaCre)
    hanaCre.classList.add("hanaOne")
    hanaCre.classList.add("FallFour")
    hanaCre.style.top = (Math.random() * 42 + 25) + "%"
    hanaCre.style.left = (Math.random() * 55 + 0) + "%"
}
function hanaTwoPositionOneFallFour() {
    let hanaCre = document.createElement("div")
    hanaWrapper.append(hanaCre)
    hanaCre.classList.add("hanaTwo")
    hanaCre.classList.add("FallFour")
    hanaCre.style.top = (Math.random() * 42 + 25) + "%"
    hanaCre.style.left = (Math.random() * 55 + 0) + "%"
}
function hanaThreePositionOneFallFour() {
    let hanaCre = document.createElement("div")
    hanaWrapper.append(hanaCre)
    hanaCre.classList.add("hanaThree")
    hanaCre.classList.add("FallFour")
    hanaCre.style.top = (Math.random() * 42 + 25) + "%"
    hanaCre.style.left = (Math.random() * 55 + 0) + "%"
}
repeat(10, hanaOnePositionOneFallFour)
repeat(5, hanaTwoPositionOneFallFour)
repeat(3, hanaThreePositionOneFallFour)

//fall five
function hanaOnePositionOneFallFive() {
    let hanaCre = document.createElement("div")
    hanaWrapper.append(hanaCre)
    hanaCre.classList.add("hanaOne")
    hanaCre.classList.add("FallFive")
    hanaCre.style.top = (Math.random() * 42 + 25) + "%"
    hanaCre.style.left = (Math.random() * 55 + 0) + "%"
}
function hanaTwoPositionOneFallFive() {
    let hanaCre = document.createElement("div")
    hanaWrapper.append(hanaCre)
    hanaCre.classList.add("hanaTwo")
    hanaCre.classList.add("FallFive")
    hanaCre.style.top = (Math.random() * 42 + 25) + "%"
    hanaCre.style.left = (Math.random() * 55 + 0) + "%"
}
function hanaThreePositionOneFallFive() {
    let hanaCre = document.createElement("div")
    hanaWrapper.append(hanaCre)
    hanaCre.classList.add("hanaThree")
    hanaCre.classList.add("FallFive")
    hanaCre.style.top = (Math.random() * 42 + 25) + "%"
    hanaCre.style.left = (Math.random() * 55 + 0) + "%"
}
repeat(10, hanaOnePositionOneFallFive)
repeat(5, hanaTwoPositionOneFallFive)
repeat(3, hanaThreePositionOneFallFive)


// ! position two


//fall four
function hanaOnePositionTwoFallFour() {
    let hanaCre = document.createElement("div")
    hanaWrapper.append(hanaCre)
    hanaCre.classList.add("hanaOne")
    hanaCre.classList.add("FallFour")
    hanaCre.style.top = (Math.random() * 47 + 0) + "%"
    hanaCre.style.left = (Math.random() * 75 + 25) + "%"
}
function hanaTwoPositionTwoFallFour() {
    let hanaCre = document.createElement("div")
    hanaWrapper.append(hanaCre)
    hanaCre.classList.add("hanaTwo")
    hanaCre.classList.add("FallFour")
    hanaCre.style.top = (Math.random() * 47 + 0) + "%"
    hanaCre.style.left = (Math.random() * 75 + 25) + "%"
}
function hanaThreePositionTwoFallFour() {
    let hanaCre = document.createElement("div")
    hanaWrapper.append(hanaCre)
    hanaCre.classList.add("hanaThree")
    hanaCre.classList.add("FallFour")
    hanaCre.style.top = (Math.random() * 47 + 0) + "%"
    hanaCre.style.left = (Math.random() * 75 + 25) + "%"
}
repeat(20, hanaOnePositionTwoFallFour)
repeat(15, hanaTwoPositionTwoFallFour)
repeat(5, hanaThreePositionTwoFallFour)

//fall five
function hanaOnePositionTwoFallFive() {
    let hanaCre = document.createElement("div")
    hanaWrapper.append(hanaCre)
    hanaCre.classList.add("hanaOne")
    hanaCre.classList.add("FallFive")
    hanaCre.style.top = (Math.random() * 47 + 0) + "%"
    hanaCre.style.left = (Math.random() * 75 + 25) + "%"
}
function hanaTwoPositionTwoFallFive() {
    let hanaCre = document.createElement("div")
    hanaWrapper.append(hanaCre)
    hanaCre.classList.add("hanaTwo")
    hanaCre.classList.add("FallFive")
    hanaCre.style.top = (Math.random() * 47 + 0) + "%"
    hanaCre.style.left = (Math.random() * 75 + 25) + "%"
}
function hanaThreePositionTwoFallFive() {
    let hanaCre = document.createElement("div")
    hanaWrapper.append(hanaCre)
    hanaCre.classList.add("hanaThree")
    hanaCre.classList.add("FallFive")
    hanaCre.style.top = (Math.random() * 47 + 0) + "%"
    hanaCre.style.left = (Math.random() * 75 + 25) + "%"
}
repeat(20, hanaOnePositionTwoFallFive)
repeat(15, hanaTwoPositionTwoFallFive)
repeat(5, hanaThreePositionTwoFallFive)


// ! position three
// ! back


//fall four
function hanaOnePositionThreeFallFour() {
    let hanaCre = document.createElement("div")
    hanaWrapperBack.append(hanaCre)
    hanaCre.classList.add("hanaOne")
    hanaCre.classList.add("FallFour")
    hanaCre.style.top = (Math.random() * 55 + 8) + "%"
    hanaCre.style.left = (Math.random() * 75 + 10) + "%"
}
function hanaTwoPositionThreeFallFour() {
    let hanaCre = document.createElement("div")
    hanaWrapperBack.append(hanaCre)
    hanaCre.classList.add("hanaTwo")
    hanaCre.classList.add("FallFour")
    hanaCre.style.top = (Math.random() * 55 + 8) + "%"
    hanaCre.style.left = (Math.random() * 75 + 10) + "%"
}
function hanaThreePositionThreeFallFour() {
    let hanaCre = document.createElement("div")
    hanaWrapperBack.append(hanaCre)
    hanaCre.classList.add("hanaThree")
    hanaCre.classList.add("FallFour")
    hanaCre.style.top = (Math.random() * 55 + 8) + "%"
    hanaCre.style.left = (Math.random() * 75 + 10) + "%"
}
repeat(10, hanaOnePositionThreeFallFour)
repeat(5, hanaTwoPositionThreeFallFour)
repeat(3, hanaThreePositionThreeFallFour)

//fall five
function hanaOnePositionThreeFallFive() {
    let hanaCre = document.createElement("div")
    hanaWrapperBack.append(hanaCre)
    hanaCre.classList.add("hanaOne")
    hanaCre.classList.add("FallFive")
    hanaCre.style.top = (Math.random() * 55 + 8) + "%"
    hanaCre.style.left = (Math.random() * 75 + 10) + "%"
}
function hanaTwoPositionThreeFallFive() {
    let hanaCre = document.createElement("div")
    hanaWrapperBack.append(hanaCre)
    hanaCre.classList.add("hanaTwo")
    hanaCre.classList.add("FallFive")
    hanaCre.style.top = (Math.random() * 55 + 8) + "%"
    hanaCre.style.left = (Math.random() * 75 + 10) + "%"
}
function hanaThreePositionThreeFallFive() {
    let hanaCre = document.createElement("div")
    hanaWrapperBack.append(hanaCre)
    hanaCre.classList.add("hanaThree")
    hanaCre.classList.add("FallFive")
    hanaCre.style.top = (Math.random() * 55 + 8) + "%"
    hanaCre.style.left = (Math.random() * 75 + 10) + "%"
}
repeat(10, hanaOnePositionThreeFallFive)
repeat(5, hanaTwoPositionThreeFallFive)
repeat(3, hanaThreePositionThreeFallFive)


// ! position four



//fall Four
function hanaOnePositionFourFallFour() {
    let hanaCre = document.createElement("div")
    hanaWrapper.append(hanaCre)
    hanaCre.classList.add("hanaOne")
    hanaCre.classList.add("FallFour")
    hanaCre.style.top = (Math.random() * 30 + 42) + "%"
    hanaCre.style.left = (Math.random() * 10 + 90) + "%"
}
function hanaTwoPositionFourFallFour() {
    let hanaCre = document.createElement("div")
    hanaWrapper.append(hanaCre)
    hanaCre.classList.add("hanaTwo")
    hanaCre.classList.add("FallFour")
    hanaCre.style.top = (Math.random() * 30 + 42) + "%"
    hanaCre.style.left = (Math.random() * 10 + 90) + "%"
}
function hanaThreePositionFourFallFour() {
    let hanaCre = document.createElement("div")
    hanaWrapper.append(hanaCre)
    hanaCre.classList.add("hanaThree")
    hanaCre.classList.add("FallFour")
    hanaCre.style.top = (Math.random() * 30 + 42) + "%"
    hanaCre.style.left = (Math.random() * 10 + 90) + "%"
}
repeat(2, hanaOnePositionFourFallFour)
repeat(1, hanaTwoPositionFourFallFour)
repeat(1, hanaThreePositionFourFallFour)

//fall five
function hanaOnePositionFourFallFive() {
    let hanaCre = document.createElement("div")
    hanaWrapper.append(hanaCre)
    hanaCre.classList.add("hanaOne")
    hanaCre.classList.add("FallFive")
    hanaCre.style.top = (Math.random() * 30 + 42) + "%"
    hanaCre.style.left = (Math.random() * 10 + 90) + "%"
}
function hanaTwoPositionFourFallFive() {
    let hanaCre = document.createElement("div")
    hanaWrapper.append(hanaCre)
    hanaCre.classList.add("hanaTwo")
    hanaCre.classList.add("FallFive")
    hanaCre.style.top = (Math.random() * 30 + 42) + "%"
    hanaCre.style.left = (Math.random() * 10 + 90) + "%"
}
function hanaThreePositionFourFallFive() {
    let hanaCre = document.createElement("div")
    hanaWrapper.append(hanaCre)
    hanaCre.classList.add("hanaThree")
    hanaCre.classList.add("FallFive")
    hanaCre.style.top = (Math.random() * 30 + 42) + "%"
    hanaCre.style.left = (Math.random() * 10 + 90) + "%"
}
repeat(2, hanaOnePositionFourFallFive)
repeat(1, hanaTwoPositionFourFallFive)
repeat(1, hanaThreePositionFourFallFive)




let hanaOne = document.querySelectorAll(".hanaOne")
let hanaTwo = document.querySelectorAll(".hanaTwo")
let hanaThree = document.querySelectorAll(".hanaThree")

let FallFour = document.querySelectorAll(".FallFour")
let FallFive = document.querySelectorAll(".FallFive")

hanaOne.forEach(function (e) {
    e.classList.add("hanaAutumn")
})
hanaTwo.forEach(function (e) {
    e.classList.add("hanaAutumn")
})
hanaThree.forEach(function (e) {
    e.classList.add("hanaAutumn")
})


let hanaAutumn = document.querySelectorAll(".hanaAutumn")




// background height setting
document.querySelector(".background").style.height = 500 + "vh"


window.addEventListener("scroll", function () {
    percentage = getScrollPercentage() // 0-100

    // audio
    wind.volume = 1 * percentage / 100



    // scroll animation
    FallFour.forEach(function (e, i) {
        fall(e, i, 0, 60)
    })
    FallFive.forEach(function (e, i) {
        fall(e, i, 30, 90)
    })




    // trunk & sky scroll animation
    if (percentage > 0) {
        document.querySelector("#trunkWinter").style.opacity = 0.4 + percentage / 100 * 0.6
        document.querySelector("#backgroundWinter").style.opacity = 0.4 + percentage / 100 * 0.6
    } else {
        document.querySelector("#trunkWinter").style.opacity = 0.4
        document.querySelector("#backgroundWinter").style.opacity = 0.4
    }





    // lines
    if (percentage < 100 / 5) {
        document.querySelector("#lineOne").style.opacity = 1
    } else {
        document.querySelector("#lineOne").style.opacity = 0
    }
    if (percentage > 100 / 5 && percentage < 100 / 5 * 2) {
        document.querySelector("#lineTwo").style.opacity = 1
    } else {
        document.querySelector("#lineTwo").style.opacity = 0
    }
    if (percentage > 100 / 5 * 2 && percentage < 100 / 5 * 3) {
        document.querySelector("#lineThree").style.opacity = 1
    } else {
        document.querySelector("#lineThree").style.opacity = 0
    }
    if (percentage > 100 / 5 * 3 && percentage < 100 / 5 * 4) {
        document.querySelector("#lineFour").style.opacity = 1
    } else {
        document.querySelector("#lineFour").style.opacity = 0
    }
    if (percentage > 100 / 5 * 4) {
        document.querySelector("#lineFive").style.opacity = 1
    } else {
        document.querySelector("#lineFive").style.opacity = 0
    }







    // human hover effect

    if (percentage < 100 / 5 * 4 && percentage > 100 / 5) {


        document.querySelector("#GWrapper").style.maxWidth = clientWidth
        document.querySelector("#GWrapper").style.minWidth = clientWidth
        document.addEventListener("mousemove", function (eventInfo) {
            if (eventInfo.clientY > 0.32 * clientHeight) {

                document.querySelector("#Goverflow").style.opacity = 1
                document.querySelector("#GWrapper").style.opacity = 1
                document.querySelector("#Goverflow").style.left = eventInfo.pageX + "px"

                document.querySelector("#GWrapper").style.left = - eventInfo.pageX + "px"
            } else {
                document.querySelector("#Goverflow").style.opacity = 0
            }
        })

    } else {
        document.querySelector("#Goverflow").style.opacity = 0
    }

    // final hover
    if (percentage > 100 / 5 * 4) {
        AutumnOne.style.opacity = 0

        let AutumnAppend = document.createElement("img")
        AutumnAppend.src = "assets/Autumn1.1.png"
        AutumnAppend.classList.add("human")
        AutumnAppend.style.cursor = "pointer"
        AutumnAppend.addEventListener("mouseover", function () {
            document.querySelector("#NewimgWrapper").style.scale = 1.04
        })
        AutumnAppend.addEventListener("mouseout", function () {
            document.querySelector("#NewimgWrapper").style.scale = 1
        })
        AutumnAppend.addEventListener("click", function () {
            document.location = "summer-toWinter.html"
        })

        document.querySelector("#NewimgWrapper").append(AutumnAppend)
    } else {
        document.querySelector("#NewimgWrapper").innerHTML = ""
        AutumnOne.style.opacity = 1
    }


    // 立绘
    if (percentage < 100 / 5) {
        AutumnOne.style.opacity = 1
    } else {
        AutumnOne.style.opacity = 0
    }
    if ((percentage < 100 / 5 * 2 && percentage > 100 / 5) || (percentage > 100 / 5 * 4)) {
        AutumnOneP.style.opacity = 1
    } else {
        AutumnOneP.style.opacity = 0
    }
    if (percentage < 100 / 5 * 4 && percentage > 100 / 5 * 3) {
        AutumnOnePP.style.opacity = 1
    } else {
        AutumnOnePP.style.opacity = 0
    }
    if (percentage < 100 / 5 * 3 && percentage > 100 / 5 * 2) {
        AutumnOnePPP.style.opacity = 1
    } else {
        AutumnOnePPP.style.opacity = 0
    }

})

