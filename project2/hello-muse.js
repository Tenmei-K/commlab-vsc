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
let STwo = document.querySelector("#STwo")
let OOne = document.querySelector("#OOne")
let OTwo = document.querySelector("#OTwo")



function grow(e, i, p1, p2, per) {


    let opa = per * ((percentage - p1) / (p2 - p1));

    if (opa < 0) {
        opa = 0;
    } else if (opa > 1) {
        opa = 1;
    }


    e.style.opacity = opa

}



let crowdAudio = document.createElement("audio")
crowdAudio.src = "sounds/crowd.mp3"
crowdAudio.loop = true
crowdAudio.play()

let windbellAudio = document.createElement("audio")
windbellAudio.src = "sounds/windbell.mp3"
windbellAudio.loop = false
// windbellAudio.play()
// windbellAudio.volume = 0

let hintaudio = document.createElement("audio")
hintaudio.src = "sounds/木头咚.wav"
hintaudio.loop = false


// for condition clickable element  其实我真的没招了。我到底在干什么？太过于神秘了。
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


let soundPlayed = false
let hintOnePlayed = false
let hintTwoPlayed = false


window.addEventListener("scroll", function () {
    percentage = getScrollPercentage() // 0-100


    // bg
    document.querySelector("#backgroundSpring").style.opacity = percentage / 100 * 0.4

    // audio

    if (percentage > 100 / 10 * 2 && percentage < 100 / 10 * 3) {
        crowdAudio.volume = 1 - (percentage - 100 / 10 * 2) / 100 * 10 * 0.65
    }
    if (percentage > 100 / 10 * 3 && percentage < 100 / 10 * 7) {
        crowdAudio.volume = 0.35 - 0.35 * (percentage - 100 / 10 * 3) / 100 * 10 / 4
    }
    if (percentage > 100 / 10 * 7 && percentage < 100 / 10 * 9) {
        crowdAudio.volume = 1 * (percentage - 100 / 10 * 7) / 100 * 10 / 2
    }
    if (percentage > 100 / 10 * 9 && percentage < 100 / 10 * 9 + 5) {
        crowdAudio.volume = 1 - (percentage - 100 / 10 * 9) / 5
    }



    if (percentage > 100 / 10 * 9 - 2) {
        shouldPlaySound = true
    } else {
        shouldPlaySound = false
    }
    if (shouldPlaySound == true && soundPlayed == false) {
        windbellAudio.play()
        soundPlayed = true
    }


    if (percentage > 100 / 10 * 3 && percentage < 100 / 10 * 5) {
        hintOnePlay = true
    } else {
        hintOnePlay = false
    }
    if (hintOnePlay == true && hintOnePlayed == false) {
        hintaudio.play()
        hintOnePlayed = true
    }
    if (percentage > 100 / 10 * 5) {
        hintTwoPlay = true
    } else {
        hintTwoPlay = false
    }
    if (hintTwoPlay == true && hintTwoPlayed == false) {
        hintaudio.play()
        hintTwoPlayed = true
    }



    // human

    if ((percentage > 100 / 10 * 1 && percentage < 100 / 10 * 2) || (percentage > 100 / 10 * 6 && percentage < 100 / 10 * 7) || percentage > 100 / 20 * 19) {
        OOne.style.opacity = 1
    } else {
        OOne.style.opacity = 0
    }
    if (percentage > 100 / 10 * 2 && percentage < 100 / 10 * 4) {
        SOnePP.style.opacity = 1
    } else {
        SOnePP.style.opacity = 0
    }
    if ((percentage > 100 / 10 * 4 && percentage < 100 / 10 * 5) || (percentage > 100 / 10 * 8 && percentage < 100 / 10 * 9)) {
        SOne.style.opacity = 1
    } else {
        SOne.style.opacity = 0
    }
    if (percentage > 100 / 10 * 5 && percentage < 100 / 10 * 6) {
        SOneP.style.opacity = 1
    } else {
        SOneP.style.opacity = 0
    }
    if ((percentage > 100 / 10 * 9 && percentage < 100 / 20 * 19)) {
        OTwo.style.opacity = 1
    } else {
        OTwo.style.opacity = 0
    }




    if (percentage > 100 / 10 * 1 && percentage < 100 / 10 * 2) {
        document.querySelector("#lineOne").style.opacity = 1
    } else {
        document.querySelector("#lineOne").style.opacity = 0
    }
    if (percentage > 100 / 10 * 2 && percentage < 100 / 10 * 3) {
        document.querySelector("#lineTwo").style.opacity = 1
    } else {
        document.querySelector("#lineTwo").style.opacity = 0
    }
    if (percentage > 100 / 10 * 3 && percentage < 100 / 10 * 4) {
        document.querySelector("#lineThree").style.opacity = 1
    } else {
        document.querySelector("#lineThree").style.opacity = 0
    }
    if (percentage > 100 / 10 * 4 && percentage < 100 / 10 * 5) {
        document.querySelector("#lineFour").style.opacity = 1
    } else {
        document.querySelector("#lineFour").style.opacity = 0
    }
    if (percentage > 100 / 10 * 5 && percentage < 100 / 10 * 6) {
        document.querySelector("#lineFive").style.opacity = 1
    } else {
        document.querySelector("#lineFive").style.opacity = 0
    }
    if (percentage > 100 / 10 * 6 && percentage < 100 / 10 * 7) {
        document.querySelector("#lineSix").style.opacity = 1
    } else {
        document.querySelector("#lineSix").style.opacity = 0
    }                                                      // 这里应该是没问题的
    if (percentage > 100 / 10 * 7 && percentage < 100 / 10 * 8) {
        document.querySelector("#lineSeven").style.opacity = 1
    } else {
        document.querySelector("#lineSeven").style.opacity = 0
    }
    if (percentage > 100 / 10 * 8 && percentage < 100 / 10 * 9) {
        document.querySelector("#lineEight").style.opacity = 1
    } else {
        document.querySelector("#lineEight").style.opacity = 0
    }
    if (percentage > 100 / 10 * 9) {
        document.querySelector("#lineNine").style.opacity = 1
    } else {
        document.querySelector("#lineNine").style.opacity = 0
    }



    if (percentage > 100 / 10 * 3 && percentage < 100 / 10 * 5) {
        document.querySelector("#brooch").style.opacity = 1
        brooch.style.scale = 2
        brooch.style.bottom = - 3 + "%"
        brooch.style.left = "null"
    } else if (percentage > 100 / 10 * 8) {
        document.querySelector("#brooch").style.opacity = 1
        brooch.style.scale = 1
        brooch.style.bottom = 5 + "%"
        brooch.style.left = 52 + "%"
    } else {
        document.querySelector("#brooch").style.opacity = 0
    }



    if (percentage > 100 / 20 * 19) {
        document.querySelector("#paperOne").style.opacity = 1
        paper.style.cursor = "pointer"
        paper.addEventListener("mouseover", function () {
            paper.style.scale = 1.04
        })
        paper.addEventListener("mouseout", function () {
            paper.style.scale = 1
        })
        paper.addEventListener("click", function () {
            OOne.classList.add("paperCLicked")
            // document.location = "hello-muse-paper.html?paperVisited=" + paperVisited + "&broochVisited" + broochVisited
            document.location = "hello-muse-paper.html"
        })

        // brooch.style.cursor = "pointer"
        // brooch.addEventListener("mouseover", function () {
        //     brooch.style.scale = 1.15
        // })
        // brooch.addEventListener("mouseout", function () {
        //     brooch.style.scale = 1
        // })
        // brooch.addEventListener("click", function () {
        //     OOne.classList.add("broochCLicked")
        //     document.location = "hello-muse-brooch.html?paperVisited=" + paperVisited + "&broochVisited" + broochVisited
        // })
    } else {
        document.querySelector("#paperOne").style.opacity = 0
        paper.style.cursor = "default"
        paper.addEventListener("mouseover", function () {
            paper.style.scale = 1
        })

        brooch.style.cursor = "default"
        brooch.addEventListener("mouseover", function () {
            brooch.style.scale = 1
        })
    }







    GrowOne.forEach(function (e, i) {
        grow(e, i, 40, 100, 1)
    })
    // GrowTwo.forEach(function (e, i) {
    //     grow(e, i, 40, 100, 1)
    // })
    GrowOneBack.forEach(function (e, i) {
        grow(e, i, 40, 100, 0.5)
    })
    // GrowTwoBack.forEach(function (e, i) {
    //     grow(e, i, 40, 100, 0.5)
    // })



})




// // 原分支情景全部触发后
// if (paperVisited >= 1 && broochVisited >= 1) {
//     OTwo.style.cursor = "pointer"
//     OTwo.addEventListener("mouseover", function () {
//         OOne.style.scale = 1.04
//         OTwo.style.scale = 1.04
//     })
//     OTwo.addEventListener("mouseout", function () {
//         OOne.style.scale = 1
//         OTwo.style.scale = 1
//     })
//     OTwo.addEventListener("click", function () {
//         document.location = "hello-muse-final.html"
//     })
// }