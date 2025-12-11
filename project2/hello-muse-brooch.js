let urlString = window.location.search;
let urlParams = new URLSearchParams(urlString);
let paperVisited = Number(urlParams.get('paperVisited')) + 1; //(this one)





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
let G = document.querySelector("#G")

let brooch = document.querySelector("#brooch")



function grow(e, i, p1, p2, per) {


    let opa = per * ((percentage - p1) / (p2 - p1));

    if (opa < 0) {
        opa = 0;
    } else if (opa > 1) {
        opa = 1;
    }


    e.style.opacity = opa

}

let windbellAudio = document.createElement("audio")
windbellAudio.src = "sounds/windbell.mp3"
windbellAudio.loop = false
// windbellAudio.play()
// windbellAudio.volume = 0





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


GrowOne.forEach(function (e) {
    e.style.opacity = 1
})
GrowOneBack.forEach(function (e) {
    e.style.opacity = 1
})


let soundPlayed = false


window.addEventListener("scroll", function () {
    percentage = getScrollPercentage() //

    document.querySelector("#backgroundSpring").style.opacity = 0.2 + percentage / 100 * 0.4
    document.querySelector("#trunkSpring").style.opacity = 0.2 + percentage / 100 * 0.4



    if (percentage > 100 / 8 * 6 - 5) {
        shouldPlaySound = true
    } else {
        shouldPlaySound = false
    }
    if (shouldPlaySound == true && soundPlayed == false) {
        windbellAudio.play()
        soundPlayed = true
    }




    if (percentage < 100 / 8) {
        SOne.style.opacity = 1
    } else {
        SOne.style.opacity = 0
    }
    if (percentage > 100 / 8 && percentage < 100 / 8 * 2) {
        SOnePP.style.opacity = 1
    } else {
        SOnePP.style.opacity = 0
    }
    if ((percentage > 100 / 8 * 2 && percentage < 100 / 8 * 3) || (percentage > 100 / 8 * 4 && percentage < 100 / 8 * 5)) {
        OOne.style.opacity = 1
    } else {
        OOne.style.opacity = 0
    }
    if (percentage > 100 / 8 * 3 && percentage < 100 / 8 * 4) {
        STwo.style.opacity = 1
    } else {
        STwo.style.opacity = 0
    }
    if (percentage > 100 / 8 * 5 && percentage < 100 / 8 * 6) {
        OTwo.style.opacity = 1
    } else {
        OTwo.style.opacity = 0
    }
    if (percentage > 100 / 8 * 7) {
        G.style.opacity = 1
    } else {
        G.style.opacity = 0
    }





    if (percentage > 100 / 8 * 3 && percentage < 100 / 8 * 4) {
        document.querySelector("#monitorFront").style.opacity = 1
        document.querySelector("#monitorBack").style.opacity = 1
    } else {
        document.querySelector("#monitorFront").style.opacity = 0
        document.querySelector("#monitorBack").style.opacity = 0
    }

    if (percentage > 100 / 8 * 4 && percentage < 100 / 8 * 7) {
        document.querySelector("#backgroundAutumn").style.opacity = (percentage - 100 / 8 * 4) / (100 / 8 * 3)
        document.querySelector("#trunkAutumn").style.opacity = (percentage - 100 / 8 * 4) / (100 / 8 * 3)
        hanaFour.forEach(function (e) {
            e.style.backgroundColor = "rgb(255, 223, 202)"
            e.style.border = ".97px solid rgb(249, 187, 130)"
        })
    } else {
        document.querySelector("#backgroundAutumn").style.opacity = 0
        document.querySelector("#trunkAutumn").style.opacity = 0
        hanaFour.forEach(function (e) {
            e.style.backgroundColor = "rgb(253, 231, 240)"
            e.style.border = ".97px solid rgb(247, 167, 194)"
        })
    }
    if (percentage > 100 / 8 * 5 && percentage < 100 / 8 * 7) {
        hanaFive.forEach(function (e) {
            e.style.backgroundColor = "rgb(249, 170, 110)"
            e.style.border = ".97px solid rgb(249, 187, 130)"
        })
    } else {
        hanaFive.forEach(function (e) {
            e.style.backgroundColor = "rgb(255, 199, 218)"
            e.style.border = ".97px solid rgb(247, 167, 194)"
        })
    }
    if (percentage > 100 / 8 * 6 && percentage < 100 / 8 * 7) {
        hanaSix.forEach(function (e) {
            e.style.backgroundColor = "rgb(215, 107, 49)"
            e.style.border = ".97px solid rgb(249, 187, 130)"
        })
    } else {
        hanaSix.forEach(function (e) {
            e.style.backgroundColor = "rgb(255, 148, 184)"
            e.style.border = ".97px solid rgb(247, 167, 194)"
        })
    }





    if (percentage > 100 / 8 * 6 && percentage < 100 / 8 * 7) {
        brooch.style.opacity = 0
    } else {
        brooch.style.opacity = 1
    }





    if (percentage < 100 / 8) {
        document.querySelector("#lineOne").style.opacity = 1
    } else {
        document.querySelector("#lineOne").style.opacity = 0
    }
    if (percentage > 100 / 8 && percentage < 100 / 8 * 2) {
        document.querySelector("#lineTwo").style.opacity = 1
    } else {
        document.querySelector("#lineTwo").style.opacity = 0
    }
    if (percentage > 100 / 8 * 2 && percentage < 100 / 8 * 3) {
        document.querySelector("#lineThree").style.opacity = 1
    } else {
        document.querySelector("#lineThree").style.opacity = 0
    }
    if (percentage > 100 / 8 * 3 && percentage < 100 / 8 * 4) {
        document.querySelector("#lineFour").style.opacity = 1
    } else {
        document.querySelector("#lineFour").style.opacity = 0
    }
    if (percentage > 100 / 8 * 4 && percentage < 100 / 8 * 5) {
        document.querySelector("#lineFive").style.opacity = 1
    } else {
        document.querySelector("#lineFive").style.opacity = 0
    }
    if (percentage > 100 / 8 * 5 && percentage < 100 / 8 * 6) {
        document.querySelector("#lineSix").style.opacity = 1
    } else {
        document.querySelector("#lineSix").style.opacity = 0
    }
    if (percentage > 100 / 8 * 6 && percentage < 100 / 8 * 7) {
        document.querySelector("#lineSeven").style.opacity = 1
    } else {
        document.querySelector("#lineSeven").style.opacity = 0
    }
    if (percentage > 100 / 8 * 7) {
        document.querySelector("#lineEight").style.opacity = 1
    } else {
        document.querySelector("#lineEight").style.opacity = 0
    }




    if (percentage > 100 / 8 * 7) {
        document.querySelector("#monitorFront").remove()
        brooch.style.cursor = "pointer"
        brooch.addEventListener("mouseover", function () {
            brooch.style.scale = 1.15
        })
        brooch.addEventListener("mouseout", function () {
            brooch.style.scale = 1
        })
        brooch.addEventListener("click", function () {
            document.location = "hello-muse.html?paperVisited=" + paperVisited + "&broochVisited=1"
        })
    } else {
        brooch.style.cursor = "default"
        brooch.addEventListener("mouseover", function () {
            brooch.style.scale = 1
        })
    }







    GrowTwo.forEach(function (e, i) {
        grow(e, i, 0, 60, 1)
    })
    GrowTwoBack.forEach(function (e, i) {
        grow(e, i, 0, 60, 0.5)
    })
    GrowThree.forEach(function (e, i) {
        grow(e, i, 40, 100, 1)
    })
    GrowThreeBack.forEach(function (e, i) {
        grow(e, i, 40, 100, 0.5)
    })


})