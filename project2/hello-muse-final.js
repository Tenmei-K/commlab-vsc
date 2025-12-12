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
let SOne = document.querySelector("#SOne")
let SOneP = document.querySelector("#SOneP")
let SOnePP = document.querySelector("#SOnePP")
let STwo = document.querySelector("#STwo")
let OOne = document.querySelector("#OOne")
let OTwo = document.querySelector("#OTwo")
let OThree = document.querySelector("#OThree")
let humanFinal = document.querySelector("#humanFinal")



function grow(e, i, p1, p2, per) {


    let opa = per * ((percentage - p1) / (p2 - p1));

    if (opa < 0) {
        opa = 0;
    } else if (opa > 1) {
        opa = 1;
    }


    e.style.opacity = opa

}





let urlString = window.location.search;
let urlParams = new URLSearchParams(urlString);
let paperVisited = urlParams.get('paperVisited') || 0;
let broochVisited = urlParams.get('broochVisited') || 0;





// summer
// ! position one
// grow one
function hanaFourPositionOneGrowOne() {
    let hanaCre = document.createElement("div")
    hanaWrapper.append(hanaCre)
    hanaCre.classList.add("hanaFour")
    hanaCre.classList.add("GrowOne")
    hanaCre.style.top = (Math.random() * 42 + 25) + "%"
    hanaCre.style.left = (Math.random() * 55 + 0) + "%"
}
function hanaFivePositionOneGrowOne() {
    let hanaCre = document.createElement("div")
    hanaWrapper.append(hanaCre)
    hanaCre.classList.add("hanaFive")
    hanaCre.classList.add("GrowOne")
    hanaCre.style.top = (Math.random() * 42 + 25) + "%"
    hanaCre.style.left = (Math.random() * 55 + 0) + "%"
}
function hanaSixPositionOneGrowOne() {
    let hanaCre = document.createElement("div")
    hanaWrapper.append(hanaCre)
    hanaCre.classList.add("hanaSix")
    hanaCre.classList.add("GrowOne")
    hanaCre.style.top = (Math.random() * 42 + 25) + "%"
    hanaCre.style.left = (Math.random() * 55 + 0) + "%"
}
repeat(10, hanaFourPositionOneGrowOne)
repeat(5, hanaFivePositionOneGrowOne)
repeat(3, hanaSixPositionOneGrowOne)

//grow two
function hanaFourPositionOneGrowTwo() {
    let hanaCre = document.createElement("div")
    hanaWrapper.append(hanaCre)
    hanaCre.classList.add("hanaFour")
    hanaCre.classList.add("GrowTwo")
    hanaCre.style.top = (Math.random() * 42 + 25) + "%"
    hanaCre.style.left = (Math.random() * 55 + 0) + "%"
}
function hanaFivePositionOneGrowTwo() {
    let hanaCre = document.createElement("div")
    hanaWrapper.append(hanaCre)
    hanaCre.classList.add("hanaFive")
    hanaCre.classList.add("GrowTwo")
    hanaCre.style.top = (Math.random() * 42 + 25) + "%"
    hanaCre.style.left = (Math.random() * 55 + 0) + "%"
}
function hanaSixPositionOneGrowTwo() {
    let hanaCre = document.createElement("div")
    hanaWrapper.append(hanaCre)
    hanaCre.classList.add("hanaSix")
    hanaCre.classList.add("GrowTwo")
    hanaCre.style.top = (Math.random() * 42 + 25) + "%"
    hanaCre.style.left = (Math.random() * 55 + 0) + "%"
}
repeat(10, hanaFourPositionOneGrowTwo)
repeat(5, hanaFivePositionOneGrowTwo)
repeat(3, hanaSixPositionOneGrowTwo)

//grow three
function hanaFourPositionOneGrowThree() {
    let hanaCre = document.createElement("div")
    hanaWrapper.append(hanaCre)
    hanaCre.classList.add("hanaFour")
    hanaCre.classList.add("GrowThree")
    hanaCre.style.top = (Math.random() * 42 + 25) + "%"
    hanaCre.style.left = (Math.random() * 55 + 0) + "%"
}
function hanaFivePositionOneGrowThree() {
    let hanaCre = document.createElement("div")
    hanaWrapper.append(hanaCre)
    hanaCre.classList.add("hanaFive")
    hanaCre.classList.add("GrowThree")
    hanaCre.style.top = (Math.random() * 42 + 25) + "%"
    hanaCre.style.left = (Math.random() * 55 + 0) + "%"
}
function hanaSixPositionOneGrowThree() {
    let hanaCre = document.createElement("div")
    hanaWrapper.append(hanaCre)
    hanaCre.classList.add("hanaSix")
    hanaCre.classList.add("GrowThree")
    hanaCre.style.top = (Math.random() * 42 + 25) + "%"
    hanaCre.style.left = (Math.random() * 55 + 0) + "%"
}
repeat(10, hanaFourPositionOneGrowThree)
repeat(5, hanaFivePositionOneGrowThree)
repeat(3, hanaSixPositionOneGrowThree)

//grow four
function hanaFourPositionOneGrowFour() {
    let hanaCre = document.createElement("div")
    hanaWrapper.append(hanaCre)
    hanaCre.classList.add("hanaFour")
    hanaCre.classList.add("GrowFour")
    hanaCre.style.top = (Math.random() * 42 + 25) + "%"
    hanaCre.style.left = (Math.random() * 55 + 0) + "%"
}
function hanaFivePositionOneGrowFour() {
    let hanaCre = document.createElement("div")
    hanaWrapper.append(hanaCre)
    hanaCre.classList.add("hanaFive")
    hanaCre.classList.add("GrowFour")
    hanaCre.style.top = (Math.random() * 42 + 25) + "%"
    hanaCre.style.left = (Math.random() * 55 + 0) + "%"
}
function hanaSixPositionOneGrowFour() {
    let hanaCre = document.createElement("div")
    hanaWrapper.append(hanaCre)
    hanaCre.classList.add("hanaSix")
    hanaCre.classList.add("GrowFour")
    hanaCre.style.top = (Math.random() * 42 + 25) + "%"
    hanaCre.style.left = (Math.random() * 55 + 0) + "%"
}
repeat(10, hanaFourPositionOneGrowFour)
repeat(5, hanaFivePositionOneGrowFour)
repeat(3, hanaSixPositionOneGrowFour)

//grow five
function hanaFourPositionOneGrowFive() {
    let hanaCre = document.createElement("div")
    hanaWrapper.append(hanaCre)
    hanaCre.classList.add("hanaFour")
    hanaCre.classList.add("GrowFive")
    hanaCre.style.top = (Math.random() * 42 + 25) + "%"
    hanaCre.style.left = (Math.random() * 55 + 0) + "%"
}
function hanaFivePositionOneGrowFive() {
    let hanaCre = document.createElement("div")
    hanaWrapper.append(hanaCre)
    hanaCre.classList.add("hanaFive")
    hanaCre.classList.add("GrowFive")
    hanaCre.style.top = (Math.random() * 42 + 25) + "%"
    hanaCre.style.left = (Math.random() * 55 + 0) + "%"
}
function hanaSixPositionOneGrowFive() {
    let hanaCre = document.createElement("div")
    hanaWrapper.append(hanaCre)
    hanaCre.classList.add("hanaSix")
    hanaCre.classList.add("GrowFive")
    hanaCre.style.top = (Math.random() * 42 + 25) + "%"
    hanaCre.style.left = (Math.random() * 55 + 0) + "%"
}
repeat(10, hanaFourPositionOneGrowFive)
repeat(5, hanaFivePositionOneGrowFive)
repeat(3, hanaSixPositionOneGrowFive)

// ! position two
//grow one
function hanaFourPositionTwoGrowOne() {
    let hanaCre = document.createElement("div")
    hanaWrapper.append(hanaCre)
    hanaCre.classList.add("hanaFour")
    hanaCre.classList.add("GrowOne")
    hanaCre.style.top = (Math.random() * 47 + 0) + "%"
    hanaCre.style.left = (Math.random() * 75 + 25) + "%"
}
function hanaFivePositionTwoGrowOne() {
    let hanaCre = document.createElement("div")
    hanaWrapper.append(hanaCre)
    hanaCre.classList.add("hanaFive")
    hanaCre.classList.add("GrowOne")
    hanaCre.style.top = (Math.random() * 47 + 0) + "%"
    hanaCre.style.left = (Math.random() * 75 + 25) + "%"
}
function hanaSixPositionTwoGrowOne() {
    let hanaCre = document.createElement("div")
    hanaWrapper.append(hanaCre)
    hanaCre.classList.add("hanaSix")
    hanaCre.classList.add("GrowOne")
    hanaCre.style.top = (Math.random() * 47 + 0) + "%"
    hanaCre.style.left = (Math.random() * 75 + 25) + "%"
}
repeat(20, hanaFourPositionTwoGrowOne)
repeat(15, hanaFivePositionTwoGrowOne)
repeat(5, hanaSixPositionTwoGrowOne)

//grow two
function hanaFourPositionTwoGrowTwo() {
    let hanaCre = document.createElement("div")
    hanaWrapper.append(hanaCre)
    hanaCre.classList.add("hanaFour")
    hanaCre.classList.add("GrowTwo")
    hanaCre.style.top = (Math.random() * 47 + 0) + "%"
    hanaCre.style.left = (Math.random() * 75 + 25) + "%"
}
function hanaFivePositionTwoGrowTwo() {
    let hanaCre = document.createElement("div")
    hanaWrapper.append(hanaCre)
    hanaCre.classList.add("hanaFive")
    hanaCre.classList.add("GrowTwo")
    hanaCre.style.top = (Math.random() * 47 + 0) + "%"
    hanaCre.style.left = (Math.random() * 75 + 25) + "%"
}
function hanaSixPositionTwoGrowTwo() {
    let hanaCre = document.createElement("div")
    hanaWrapper.append(hanaCre)
    hanaCre.classList.add("hanaSix")
    hanaCre.classList.add("GrowTwo")
    hanaCre.style.top = (Math.random() * 47 + 0) + "%"
    hanaCre.style.left = (Math.random() * 75 + 25) + "%"
}
repeat(20, hanaFourPositionTwoGrowTwo)
repeat(15, hanaFivePositionTwoGrowTwo)
repeat(5, hanaSixPositionTwoGrowTwo)

//grow three
function hanaFourPositionTwoGrowThree() {
    let hanaCre = document.createElement("div")
    hanaWrapper.append(hanaCre)
    hanaCre.classList.add("hanaFour")
    hanaCre.classList.add("GrowThree")
    hanaCre.style.top = (Math.random() * 47 + 0) + "%"
    hanaCre.style.left = (Math.random() * 75 + 25) + "%"
}
function hanaFivePositionTwoGrowThree() {
    let hanaCre = document.createElement("div")
    hanaWrapper.append(hanaCre)
    hanaCre.classList.add("hanaFive")
    hanaCre.classList.add("GrowThree")
    hanaCre.style.top = (Math.random() * 47 + 0) + "%"
    hanaCre.style.left = (Math.random() * 75 + 25) + "%"
}
function hanaSixPositionTwoGrowThree() {
    let hanaCre = document.createElement("div")
    hanaWrapper.append(hanaCre)
    hanaCre.classList.add("hanaSix")
    hanaCre.classList.add("GrowThree")
    hanaCre.style.top = (Math.random() * 47 + 0) + "%"
    hanaCre.style.left = (Math.random() * 75 + 25) + "%"
}
repeat(20, hanaFourPositionTwoGrowThree)
repeat(15, hanaFivePositionTwoGrowThree)
repeat(5, hanaSixPositionTwoGrowThree)

//grow four
function hanaFourPositionTwoGrowFour() {
    let hanaCre = document.createElement("div")
    hanaWrapper.append(hanaCre)
    hanaCre.classList.add("hanaFour")
    hanaCre.classList.add("GrowFour")
    hanaCre.style.top = (Math.random() * 47 + 0) + "%"
    hanaCre.style.left = (Math.random() * 75 + 25) + "%"
}
function hanaFivePositionTwoGrowFour() {
    let hanaCre = document.createElement("div")
    hanaWrapper.append(hanaCre)
    hanaCre.classList.add("hanaFive")
    hanaCre.classList.add("GrowFour")
    hanaCre.style.top = (Math.random() * 47 + 0) + "%"
    hanaCre.style.left = (Math.random() * 75 + 25) + "%"
}
function hanaSixPositionTwoGrowFour() {
    let hanaCre = document.createElement("div")
    hanaWrapper.append(hanaCre)
    hanaCre.classList.add("hanaSix")
    hanaCre.classList.add("GrowFour")
    hanaCre.style.top = (Math.random() * 47 + 0) + "%"
    hanaCre.style.left = (Math.random() * 75 + 25) + "%"
}
repeat(20, hanaFourPositionTwoGrowFour)
repeat(15, hanaFivePositionTwoGrowFour)
repeat(5, hanaSixPositionTwoGrowFour)

//grow five
function hanaFourPositionTwoGrowFive() {
    let hanaCre = document.createElement("div")
    hanaWrapper.append(hanaCre)
    hanaCre.classList.add("hanaFour")
    hanaCre.classList.add("GrowFive")
    hanaCre.style.top = (Math.random() * 47 + 0) + "%"
    hanaCre.style.left = (Math.random() * 75 + 25) + "%"
}
function hanaFivePositionTwoGrowFive() {
    let hanaCre = document.createElement("div")
    hanaWrapper.append(hanaCre)
    hanaCre.classList.add("hanaFive")
    hanaCre.classList.add("GrowFive")
    hanaCre.style.top = (Math.random() * 47 + 0) + "%"
    hanaCre.style.left = (Math.random() * 75 + 25) + "%"
}
function hanaSixPositionTwoGrowFive() {
    let hanaCre = document.createElement("div")
    hanaWrapper.append(hanaCre)
    hanaCre.classList.add("hanaSix")
    hanaCre.classList.add("GrowFive")
    hanaCre.style.top = (Math.random() * 47 + 0) + "%"
    hanaCre.style.left = (Math.random() * 75 + 25) + "%"
}
repeat(20, hanaFourPositionTwoGrowFive)
repeat(15, hanaFivePositionTwoGrowFive)
repeat(5, hanaSixPositionTwoGrowFive)


// ! position three
// back
// grow one
function hanaFourPositionThreeGrowOne() {
    let hanaCre = document.createElement("div")
    hanaWrapperBack.append(hanaCre)
    hanaCre.classList.add("hanaFour")
    hanaCre.classList.add("GrowOne")
    hanaCre.style.top = (Math.random() * 55 + 8) + "%"
    hanaCre.style.left = (Math.random() * 75 + 10) + "%"
}
function hanaFivePositionThreeGrowOne() {
    let hanaCre = document.createElement("div")
    hanaWrapperBack.append(hanaCre)
    hanaCre.classList.add("hanaFive")
    hanaCre.classList.add("GrowOne")
    hanaCre.style.top = (Math.random() * 55 + 8) + "%"
    hanaCre.style.left = (Math.random() * 75 + 10) + "%"
}
function hanaSixPositionThreeGrowOne() {
    let hanaCre = document.createElement("div")
    hanaWrapperBack.append(hanaCre)
    hanaCre.classList.add("hanaSix")
    hanaCre.classList.add("GrowOne")
    hanaCre.style.top = (Math.random() * 55 + 8) + "%"
    hanaCre.style.left = (Math.random() * 75 + 10) + "%"
}
repeat(10, hanaFourPositionThreeGrowOne)
repeat(5, hanaFivePositionThreeGrowOne)
repeat(3, hanaSixPositionThreeGrowOne)

// grow two
function hanaFourPositionThreeGrowTwo() {
    let hanaCre = document.createElement("div")
    hanaWrapperBack.append(hanaCre)
    hanaCre.classList.add("hanaFour")
    hanaCre.classList.add("GrowTwo")
    hanaCre.style.top = (Math.random() * 55 + 8) + "%"
    hanaCre.style.left = (Math.random() * 75 + 10) + "%"
}
function hanaFivePositionThreeGrowTwo() {
    let hanaCre = document.createElement("div")
    hanaWrapperBack.append(hanaCre)
    hanaCre.classList.add("hanaFive")
    hanaCre.classList.add("GrowTwo")
    hanaCre.style.top = (Math.random() * 55 + 8) + "%"
    hanaCre.style.left = (Math.random() * 75 + 10) + "%"
}
function hanaSixPositionThreeGrowTwo() {
    let hanaCre = document.createElement("div")
    hanaWrapperBack.append(hanaCre)
    hanaCre.classList.add("hanaSix")
    hanaCre.classList.add("GrowTwo")
    hanaCre.style.top = (Math.random() * 55 + 8) + "%"
    hanaCre.style.left = (Math.random() * 75 + 10) + "%"
}
repeat(10, hanaFourPositionThreeGrowTwo)
repeat(5, hanaFivePositionThreeGrowTwo)
repeat(3, hanaSixPositionThreeGrowTwo)

// grow three
function hanaFourPositionThreeGrowThree() {
    let hanaCre = document.createElement("div")
    hanaWrapperBack.append(hanaCre)
    hanaCre.classList.add("hanaFour")
    hanaCre.classList.add("GrowThree")
    hanaCre.style.top = (Math.random() * 55 + 8) + "%"
    hanaCre.style.left = (Math.random() * 75 + 10) + "%"
}
function hanaFivePositionThreeGrowThree() {
    let hanaCre = document.createElement("div")
    hanaWrapperBack.append(hanaCre)
    hanaCre.classList.add("hanaFive")
    hanaCre.classList.add("GrowThree")
    hanaCre.style.top = (Math.random() * 55 + 8) + "%"
    hanaCre.style.left = (Math.random() * 75 + 10) + "%"
}
function hanaSixPositionThreeGrowThree() {
    let hanaCre = document.createElement("div")
    hanaWrapperBack.append(hanaCre)
    hanaCre.classList.add("hanaSix")
    hanaCre.classList.add("GrowThree")
    hanaCre.style.top = (Math.random() * 55 + 8) + "%"
    hanaCre.style.left = (Math.random() * 75 + 10) + "%"
}
repeat(10, hanaFourPositionThreeGrowThree)
repeat(5, hanaFivePositionThreeGrowThree)
repeat(3, hanaSixPositionThreeGrowThree)

// grow four
function hanaFourPositionThreeGrowFour() {
    let hanaCre = document.createElement("div")
    hanaWrapperBack.append(hanaCre)
    hanaCre.classList.add("hanaFour")
    hanaCre.classList.add("GrowFour")
    hanaCre.style.top = (Math.random() * 55 + 8) + "%"
    hanaCre.style.left = (Math.random() * 75 + 10) + "%"
}
function hanaFivePositionThreeGrowFour() {
    let hanaCre = document.createElement("div")
    hanaWrapperBack.append(hanaCre)
    hanaCre.classList.add("hanaFive")
    hanaCre.classList.add("GrowFour")
    hanaCre.style.top = (Math.random() * 55 + 8) + "%"
    hanaCre.style.left = (Math.random() * 75 + 10) + "%"
}
function hanaSixPositionThreeGrowFour() {
    let hanaCre = document.createElement("div")
    hanaWrapperBack.append(hanaCre)
    hanaCre.classList.add("hanaSix")
    hanaCre.classList.add("GrowFour")
    hanaCre.style.top = (Math.random() * 55 + 8) + "%"
    hanaCre.style.left = (Math.random() * 75 + 10) + "%"
}
repeat(10, hanaFourPositionThreeGrowFour)
repeat(5, hanaFivePositionThreeGrowFour)
repeat(3, hanaSixPositionThreeGrowFour)

// grow five
function hanaFourPositionThreeGrowFive() {
    let hanaCre = document.createElement("div")
    hanaWrapperBack.append(hanaCre)
    hanaCre.classList.add("hanaFour")
    hanaCre.classList.add("GrowFive")
    hanaCre.style.top = (Math.random() * 55 + 8) + "%"
    hanaCre.style.left = (Math.random() * 75 + 10) + "%"
}
function hanaFivePositionThreeGrowFive() {
    let hanaCre = document.createElement("div")
    hanaWrapperBack.append(hanaCre)
    hanaCre.classList.add("hanaFive")
    hanaCre.classList.add("GrowFive")
    hanaCre.style.top = (Math.random() * 55 + 8) + "%"
    hanaCre.style.left = (Math.random() * 75 + 10) + "%"
}
function hanaSixPositionThreeGrowFive() {
    let hanaCre = document.createElement("div")
    hanaWrapperBack.append(hanaCre)
    hanaCre.classList.add("hanaSix")
    hanaCre.classList.add("GrowFive")
    hanaCre.style.top = (Math.random() * 55 + 8) + "%"
    hanaCre.style.left = (Math.random() * 75 + 10) + "%"
}
repeat(10, hanaFourPositionThreeGrowFive)
repeat(5, hanaFivePositionThreeGrowFive)
repeat(3, hanaSixPositionThreeGrowFive)





let hanaFour = document.querySelectorAll(".hanaFour")
let hanaFive = document.querySelectorAll(".hanaFive")
let hanaSix = document.querySelectorAll(".hanaSix")


let GrowOne = hanaWrapper.querySelectorAll(".GrowOne")
let GrowTwo = hanaWrapper.querySelectorAll(".GrowTwo")
let GrowThree = hanaWrapper.querySelectorAll(".GrowThree")
let GrowFour = hanaWrapper.querySelectorAll(".GrowFour")
let GrowFive = hanaWrapper.querySelectorAll(".GrowFive")

let GrowOneBack = hanaWrapperBack.querySelectorAll(".GrowOne")
let GrowTwoBack = hanaWrapperBack.querySelectorAll(".GrowTwo")
let GrowThreeBack = hanaWrapperBack.querySelectorAll(".GrowThree")
let GrowFourBack = hanaWrapperBack.querySelectorAll(".GrowFour")
let GrowFiveBack = hanaWrapperBack.querySelectorAll(".GrowFive")

hanaFour.forEach(function (e) {
    e.classList.add("hanaSummer")
})
hanaFive.forEach(function (e) {
    e.classList.add("hanaSummer")
})
hanaSix.forEach(function (e) {
    e.classList.add("hanaSummer")
})


let hanaSummer = document.querySelectorAll(".hanaSummer")



let paper = document.querySelector("#paperOne")
let brooch = document.querySelector("#brooch")



document.querySelector("#brooch").style.opacity = 1


window.addEventListener("scroll", function () {
    percentage = getScrollPercentage() // 0-100


    if (percentage > 100 / 17 * 3 && percentage < 100 / 17 * 9) {
        document.querySelector("#backgroundSpring").style.opacity = (percentage - 100 / 17 * 3) / (100 / 17 * 6)
    }
    if (percentage > 100 / 17 * 9) {
        document.querySelector("#backgroundSpring").style.opacity = 1
    }

    //human
    if ((percentage > 100 / 17 * 1 && percentage < 100 / 17 * 2) || (percentage > 100 / 17 * 6 && percentage < 100 / 17 * 7) || (percentage > 100 / 17 * 9 && percentage < 100 / 17 * 10)) {
        OOne.style.opacity = 1
    } else {
        OOne.style.opacity = 0
    }
    if ((percentage > 100 / 17 * 2 && percentage < 100 / 17 * 4) || (percentage > 100 / 17 * 10 && percentage < 100 / 17 * 11)) {
        SOne.style.opacity = 1
    } else {
        SOne.style.opacity = 0
    }
    if ((percentage > 100 / 17 * 3 && percentage < 100 / 17 * 6)) {
        SOneP.style.opacity = 1
    } else {
        SOneP.style.opacity = 0
    }
    if ((percentage < 100 / 17) || (percentage > 100 / 17 * 2 && percentage < 100 / 17 * 3) || (percentage > 100 / 17 * 13 && percentage < 100 / 17 * 14)) {
        SOnePP.style.opacity = 1
    } else {
        SOnePP.style.opacity = 0
    }
    if (percentage > 100 / 17 * 8 && percentage < 100 / 17 * 9) {
        STwo.style.opacity = 1
    } else {
        STwo.style.opacity = 0
    }
    if ((percentage > 100 / 17 * 7 && percentage < 100 / 17 * 8) || (percentage > 100 / 17 * 12 && percentage < 100 / 17 * 13)) {
        OTwo.style.opacity = 1
    } else {
        OTwo.style.opacity = 0
    }
    if (percentage > 100 / 17 * 14 && percentage < 100 / 17 * 15) {
        OThree.style.opacity = 1
    } else {
        OThree.style.opacity = 0
    }
    if (percentage > 100 / 17 * 16) {
        humanFinal.style.opacity = 1
        humanFinal.style.cursor = "pointer"
        humanFinal.addEventListener("mouseover", function () {
            humanFinal.style.scale = 1.04
        })
        humanFinal.addEventListener("mouseout", function () {
            humanFinal.style.scale = 1
        })
        humanFinal.addEventListener("click", function () {
            document.location = "index-final.html"
        })
    } else {
        humanFinal.style.opacity = 0
        humanFinal.style.cursor = "default"
        humanFinal.addEventListener("mouseover", function () {
            humanFinal.style.scale = 1
        })
    }



    // line
    if (percentage < 100 / 17 * 1) {
        document.querySelector("#lineOne").style.opacity = 1
    } else {
        document.querySelector("#lineOne").style.opacity = 0
    }
    if (percentage > 100 / 17 * 1 && percentage < 100 / 17 * 2) {
        document.querySelector("#lineTwo").style.opacity = 1
    } else {
        document.querySelector("#lineTwo").style.opacity = 0
    }
    if (percentage > 100 / 17 * 2 && percentage < 100 / 17 * 3) {
        document.querySelector("#lineThree").style.opacity = 1
    } else {
        document.querySelector("#lineThree").style.opacity = 0
    }
    if (percentage > 100 / 17 * 3 && percentage < 100 / 17 * 4) {
        document.querySelector("#lineFour").style.opacity = 1
    } else {
        document.querySelector("#lineFour").style.opacity = 0
    }
    if (percentage > 100 / 17 * 4 && percentage < 100 / 17 * 5) {
        document.querySelector("#lineFive").style.opacity = 1
    } else {
        document.querySelector("#lineFive").style.opacity = 0
    }
    if (percentage > 100 / 17 * 5 && percentage < 100 / 17 * 6) {
        document.querySelector("#lineSix").style.opacity = 1
    } else {
        document.querySelector("#lineSix").style.opacity = 0
    }
    if (percentage > 100 / 17 * 6 && percentage < 100 / 17 * 7) {
        document.querySelector("#lineSeven").style.opacity = 1
    } else {
        document.querySelector("#lineSeven").style.opacity = 0
    }
    if (percentage > 100 / 17 * 7 && percentage < 100 / 17 * 8) {
        document.querySelector("#lineEight").style.opacity = 1
    } else {
        document.querySelector("#lineEight").style.opacity = 0
    }
    if (percentage > 100 / 17 * 9 && percentage < 100 / 17 * 10) {    // 全彩发力了！
        document.querySelector("#lineNine").style.opacity = 1
    } else {
        document.querySelector("#lineNine").style.opacity = 0
    }
    if (percentage > 100 / 17 * 10 && percentage < 100 / 17 * 11) {
        document.querySelector("#lineTen").style.opacity = 1
    } else {
        document.querySelector("#lineTen").style.opacity = 0
    }
    if (percentage > 100 / 17 * 11 && percentage < 100 / 17 * 12) {
        document.querySelector("#lineEleven").style.opacity = 1
    } else {
        document.querySelector("#lineEleven").style.opacity = 0
    }
    if (percentage > 100 / 17 * 12 && percentage < 100 / 17 * 13) {
        document.querySelector("#lineTwelve").style.opacity = 1
    } else {
        document.querySelector("#lineTwelve").style.opacity = 0
    }
    if (percentage > 100 / 17 * 13 && percentage < 100 / 17 * 14) {
        document.querySelector("#lineThirteen").style.opacity = 1
    } else {
        document.querySelector("#lineThirteen").style.opacity = 0
    }
    if (percentage > 100 / 17 * 14 && percentage < 100 / 17 * 15) {
        document.querySelector("#lineFourteen").style.opacity = 1
    } else {
        document.querySelector("#lineFourteen").style.opacity = 0
    }
    if (percentage > 100 / 17 * 15 && percentage < 100 / 17 * 16) {
        document.querySelector("#lineFifteen").style.opacity = 1
    } else {
        document.querySelector("#lineFifteen").style.opacity = 0
    }
    if (percentage > 100 / 17 * 16) {
        document.querySelector("#lineSixteen").style.opacity = 1
    } else {
        document.querySelector("#lineSixteen").style.opacity = 0
    }






    // building
    // if (percentage > 100 / 17 *  && percentage < 100 / 17 * 12) {
    //     document.querySelector("#buildingOne").style.opacity = 1
    // } else {
    //     document.querySelector("#buildingOne").style.opacity = 0
    // }
    if (percentage > 100 / 17 * 2 && percentage < 100 / 17 * 3) {
        document.querySelector("#buildingTwo").style.opacity = 1
    } else {
        document.querySelector("#buildingTwo").style.opacity = 0
    }
    if (percentage > 100 / 17 * 3 && percentage < 100 / 17 * 4) {
        document.querySelector("#buildingThree").style.opacity = 1
    } else {
        document.querySelector("#buildingThree").style.opacity = 0
    }
    if (percentage > 100 / 17 * 4 && percentage < 100 / 17 * 5) {
        document.querySelector("#buildingFour").style.opacity = 1
    } else {
        document.querySelector("#buildingFour").style.opacity = 0
    }
    if (percentage > 100 / 17 * 5 && percentage < 100 / 17 * 7) {
        document.querySelector("#buildingFive").style.opacity = 1
    } else {
        document.querySelector("#buildingFive").style.opacity = 0
    }
    if ((percentage > 100 / 17 * 7 && percentage < 100 / 17 * 9) || (percentage > 100 / 17 * 14)) {
        document.querySelector("#buildingSix").style.opacity = 1
    } else {
        document.querySelector("#buildingSix").style.opacity = 0
    }






    if ((percentage < 100 / 17 * 11) || (percentage > 100 / 17 * 12 && percentage < 100 / 17 * 15)) {
        document.querySelector("#brooch").style.opacity = 1
    } else {
        document.querySelector("#brooch").style.opacity = 0
    }






    // human hover effect
    if (percentage < 100 / 17 * 7) {
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
        document.addEventListener("mousemove", function () {
            document.querySelector("#Goverflow").style.opacity = 0
            document.querySelector("#GWrapper").style.opacity = 0
        })
    }

    if (percentage < 100 / 17 * 2) {
        document.querySelector("#G1").style.opacity = 1
    } else {
        document.querySelector("#G1").style.opacity = 0
    }
    if (percentage > 100 / 17 * 2 && percentage < 100 / 17 * 3) {
        document.querySelector("#G2").style.opacity = 1
    } else {
        document.querySelector("#G2").style.opacity = 0
    }
    if (percentage > 100 / 17 * 3 && percentage < 100 / 17 * 4) {
        document.querySelector("#G3").style.opacity = 1
    } else {
        document.querySelector("#G3").style.opacity = 0
    }
    if (percentage > 100 / 17 * 4 && percentage < 100 / 17 * 5) {
        document.querySelector("#G4").style.opacity = 1
    } else {
        document.querySelector("#G4").style.opacity = 0
    }
    if (percentage > 100 / 17 * 5 && percentage < 100 / 17 * 6) {
        document.querySelector("#G5").style.opacity = 1
    } else {
        document.querySelector("#G5").style.opacity = 0
    }
    if (percentage > 100 / 17 * 6 && percentage < 100 / 17 * 7) {
        document.querySelector("#G6").style.opacity = 1
    } else {
        document.querySelector("#G6").style.opacity = 0
    }






    GrowOne.forEach(function (e, i) {
        grow(e, i, 15, 30, 1)
    })
    GrowOneBack.forEach(function (e, i) {
        grow(e, i, 15, 30, 0.5)
    })
    GrowTwo.forEach(function (e, i) {
        grow(e, i, 20, 35, 1)
    })
    GrowTwoBack.forEach(function (e, i) {
        grow(e, i, 20, 35, 0.5)
    })
    GrowThree.forEach(function (e, i) {
        grow(e, i, 25, 40, 1)
    })
    GrowThreeBack.forEach(function (e, i) {
        grow(e, i, 25, 40, 0.5)
    })
    GrowFour.forEach(function (e, i) {
        grow(e, i, 30, 45, 1)
    })
    GrowFourBack.forEach(function (e, i) {
        grow(e, i, 30, 45, 0.5)
    })
    GrowFive.forEach(function (e, i) {
        grow(e, i, 35, 50, 1)
    })
    GrowFiveBack.forEach(function (e, i) {
        grow(e, i, 35, 50, 0.5)
    })



})


