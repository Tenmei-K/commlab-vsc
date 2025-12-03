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

let linesaudio = document.createElement("audio")
linesaudio.src = "sounds/木头咚.wav"


let human = document.querySelectorAll(".human")
let SOne = document.querySelector("#SOne")
let SOneP = document.querySelector("#SOneP")
let STwo = document.querySelector("#STwo")
let SDTwoP = document.querySelector("#SOneP")
let OOne = document.querySelector("#OOne")
let OTwo = document.querySelector("#OTwo")

let lines = document.querySelectorAll(".lines")


let hanaWrapper = document.querySelector("#hanaWrapper");
let treeWrapper = document.querySelector("#TreeWrapper");
let treeHeight = treeWrapper.getBoundingClientRect().height;
// let hanaWrapperBack = document.querySelector("#hanaWrapperBack")


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

function grow(e, i, p1, p2, per) {


    let opa = per * ((percentage - p1) / (p2 - p1));

    if (opa < 0) {
        opa = 0;
    } else if (opa > 1) {
        opa = 1;
    }


    e.style.opacity = opa

}








// spring

// ! position one
//fall one
function hanaOnePositionOneFallOne() {
    let hanaCre = document.createElement("div")
    hanaWrapper.append(hanaCre)
    hanaCre.classList.add("hanaOne")
    hanaCre.classList.add("FallOne")
    hanaCre.style.top = (Math.random() * 42 + 25) + "%"
    hanaCre.style.left = (Math.random() * 55 + 0) + "%"
}
function hanaTwoPositionOneFallOne() {
    let hanaCre = document.createElement("div")
    hanaWrapper.append(hanaCre)
    hanaCre.classList.add("hanaTwo")
    hanaCre.classList.add("FallOne")
    hanaCre.style.top = (Math.random() * 42 + 25) + "%"
    hanaCre.style.left = (Math.random() * 55 + 0) + "%"
}
function hanaThreePositionOneFallOne() {
    let hanaCre = document.createElement("div")
    hanaWrapper.append(hanaCre)
    hanaCre.classList.add("hanaThree")
    hanaCre.classList.add("FallOne")
    hanaCre.style.top = (Math.random() * 42 + 25) + "%"
    hanaCre.style.left = (Math.random() * 55 + 0) + "%"
}
repeat(10, hanaOnePositionOneFallOne)
repeat(5, hanaTwoPositionOneFallOne)
repeat(3, hanaThreePositionOneFallOne)

//fall two
function hanaOnePositionOneFallTwo() {
    let hanaCre = document.createElement("div")
    hanaWrapper.append(hanaCre)
    hanaCre.classList.add("hanaOne")
    hanaCre.classList.add("FallTwo")
    hanaCre.style.top = (Math.random() * 42 + 25) + "%"
    hanaCre.style.left = (Math.random() * 55 + 0) + "%"
}
function hanaTwoPositionOneFallTwo() {
    let hanaCre = document.createElement("div")
    hanaWrapper.append(hanaCre)
    hanaCre.classList.add("hanaTwo")
    hanaCre.classList.add("FallTwo")
    hanaCre.style.top = (Math.random() * 42 + 25) + "%"
    hanaCre.style.left = (Math.random() * 55 + 0) + "%"
}
function hanaThreePositionOneFallTwo() {
    let hanaCre = document.createElement("div")
    hanaWrapper.append(hanaCre)
    hanaCre.classList.add("hanaThree")
    hanaCre.classList.add("FallTwo")
    hanaCre.style.top = (Math.random() * 42 + 25) + "%"
    hanaCre.style.left = (Math.random() * 55 + 0) + "%"
}
repeat(10, hanaOnePositionOneFallTwo)
repeat(5, hanaTwoPositionOneFallTwo)
repeat(3, hanaThreePositionOneFallTwo)

//fall three
function hanaOnePositionOneFallThree() {
    let hanaCre = document.createElement("div")
    hanaWrapper.append(hanaCre)
    hanaCre.classList.add("hanaOne")
    hanaCre.classList.add("FallThree")
    hanaCre.style.top = (Math.random() * 42 + 25) + "%"
    hanaCre.style.left = (Math.random() * 55 + 0) + "%"
}
function hanaTwoPositionOneFallThree() {
    let hanaCre = document.createElement("div")
    hanaWrapper.append(hanaCre)
    hanaCre.classList.add("hanaTwo")
    hanaCre.classList.add("FallThree")
    hanaCre.style.top = (Math.random() * 42 + 25) + "%"
    hanaCre.style.left = (Math.random() * 55 + 0) + "%"
}
function hanaThreePositionOneFallThree() {
    let hanaCre = document.createElement("div")
    hanaWrapper.append(hanaCre)
    hanaCre.classList.add("hanaThree")
    hanaCre.classList.add("FallThree")
    hanaCre.style.top = (Math.random() * 42 + 25) + "%"
    hanaCre.style.left = (Math.random() * 55 + 0) + "%"
}
repeat(10, hanaOnePositionOneFallThree)
repeat(5, hanaTwoPositionOneFallThree)
repeat(3, hanaThreePositionOneFallThree)

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
//fall one
function hanaOnePositionTwoFallOne() {
    let hanaCre = document.createElement("div")
    hanaWrapper.append(hanaCre)
    hanaCre.classList.add("hanaOne")
    hanaCre.classList.add("FallOne")
    hanaCre.style.top = (Math.random() * 47 + 0) + "%"
    hanaCre.style.left = (Math.random() * 75 + 25) + "%"
}
function hanaTwoPositionTwoFallOne() {
    let hanaCre = document.createElement("div")
    hanaWrapper.append(hanaCre)
    hanaCre.classList.add("hanaTwo")
    hanaCre.classList.add("FallOne")
    hanaCre.style.top = (Math.random() * 47 + 0) + "%"
    hanaCre.style.left = (Math.random() * 75 + 25) + "%"
}
function hanaThreePositionTwoFallOne() {
    let hanaCre = document.createElement("div")
    hanaWrapper.append(hanaCre)
    hanaCre.classList.add("hanaThree")
    hanaCre.classList.add("FallOne")
    hanaCre.style.top = (Math.random() * 47 + 0) + "%"
    hanaCre.style.left = (Math.random() * 75 + 25) + "%"
}
repeat(20, hanaOnePositionTwoFallOne)
repeat(15, hanaTwoPositionTwoFallOne)
repeat(5, hanaThreePositionTwoFallOne)

//fall two
function hanaOnePositionTwoFallTwo() {
    let hanaCre = document.createElement("div")
    hanaWrapper.append(hanaCre)
    hanaCre.classList.add("hanaOne")
    hanaCre.classList.add("FallTwo")
    hanaCre.style.top = (Math.random() * 47 + 0) + "%"
    hanaCre.style.left = (Math.random() * 75 + 25) + "%"
}
function hanaTwoPositionTwoFallTwo() {
    let hanaCre = document.createElement("div")
    hanaWrapper.append(hanaCre)
    hanaCre.classList.add("hanaTwo")
    hanaCre.classList.add("FallTwo")
    hanaCre.style.top = (Math.random() * 47 + 0) + "%"
    hanaCre.style.left = (Math.random() * 75 + 25) + "%"
}
function hanaThreePositionTwoFallTwo() {
    let hanaCre = document.createElement("div")
    hanaWrapper.append(hanaCre)
    hanaCre.classList.add("hanaThree")
    hanaCre.classList.add("FallTwo")
    hanaCre.style.top = (Math.random() * 47 + 0) + "%"
    hanaCre.style.left = (Math.random() * 75 + 25) + "%"
}
repeat(20, hanaOnePositionTwoFallTwo)
repeat(15, hanaTwoPositionTwoFallTwo)
repeat(5, hanaThreePositionTwoFallTwo)

//fall three
function hanaOnePositionTwoFallThree() {
    let hanaCre = document.createElement("div")
    hanaWrapper.append(hanaCre)
    hanaCre.classList.add("hanaOne")
    hanaCre.classList.add("FallThree")
    hanaCre.style.top = (Math.random() * 47 + 0) + "%"
    hanaCre.style.left = (Math.random() * 75 + 25) + "%"
}
function hanaTwoPositionTwoFallThree() {
    let hanaCre = document.createElement("div")
    hanaWrapper.append(hanaCre)
    hanaCre.classList.add("hanaTwo")
    hanaCre.classList.add("FallThree")
    hanaCre.style.top = (Math.random() * 47 + 0) + "%"
    hanaCre.style.left = (Math.random() * 75 + 25) + "%"
}
function hanaThreePositionTwoFallThree() {
    let hanaCre = document.createElement("div")
    hanaWrapper.append(hanaCre)
    hanaCre.classList.add("hanaThree")
    hanaCre.classList.add("FallThree")
    hanaCre.style.top = (Math.random() * 47 + 0) + "%"
    hanaCre.style.left = (Math.random() * 75 + 25) + "%"
}
repeat(20, hanaOnePositionTwoFallThree)
repeat(15, hanaTwoPositionTwoFallThree)
repeat(5, hanaThreePositionTwoFallThree)

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
// fall one
function hanaOnePositionThreeFallOne() {
    let hanaCre = document.createElement("div")
    hanaWrapperBack.append(hanaCre)
    hanaCre.classList.add("hanaOne")
    hanaCre.classList.add("FallOne")
    hanaCre.style.top = (Math.random() * 55 + 8) + "%"
    hanaCre.style.left = (Math.random() * 75 + 10) + "%"
}
function hanaTwoPositionThreeFallOne() {
    let hanaCre = document.createElement("div")
    hanaWrapperBack.append(hanaCre)
    hanaCre.classList.add("hanaTwo")
    hanaCre.classList.add("FallOne")
    hanaCre.style.top = (Math.random() * 55 + 8) + "%"
    hanaCre.style.left = (Math.random() * 75 + 10) + "%"
}
function hanaThreePositionThreeFallOne() {
    let hanaCre = document.createElement("div")
    hanaWrapperBack.append(hanaCre)
    hanaCre.classList.add("hanaThree")
    hanaCre.classList.add("FallOne")
    hanaCre.style.top = (Math.random() * 55 + 8) + "%"
    hanaCre.style.left = (Math.random() * 75 + 10) + "%"
}
repeat(10, hanaOnePositionThreeFallOne)
repeat(5, hanaTwoPositionThreeFallOne)
repeat(3, hanaThreePositionThreeFallOne)

//fall two
function hanaOnePositionThreeFallTwo() {
    let hanaCre = document.createElement("div")
    hanaWrapperBack.append(hanaCre)
    hanaCre.classList.add("hanaOne")
    hanaCre.classList.add("FallTwo")
    hanaCre.style.top = (Math.random() * 55 + 8) + "%"
    hanaCre.style.left = (Math.random() * 75 + 10) + "%"
}
function hanaTwoPositionThreeFallTwo() {
    let hanaCre = document.createElement("div")
    hanaWrapperBack.append(hanaCre)
    hanaCre.classList.add("hanaTwo")
    hanaCre.classList.add("FallTwo")
    hanaCre.style.top = (Math.random() * 55 + 8) + "%"
    hanaCre.style.left = (Math.random() * 75 + 10) + "%"
}
function hanaThreePositionThreeFallTwo() {
    let hanaCre = document.createElement("div")
    hanaWrapperBack.append(hanaCre)
    hanaCre.classList.add("hanaThree")
    hanaCre.classList.add("FallTwo")
    hanaCre.style.top = (Math.random() * 55 + 8) + "%"
    hanaCre.style.left = (Math.random() * 75 + 10) + "%"
}
repeat(10, hanaOnePositionThreeFallTwo)
repeat(5, hanaTwoPositionThreeFallTwo)
repeat(3, hanaThreePositionThreeFallTwo)

//fall three
function hanaOnePositionThreeFallThree() {
    let hanaCre = document.createElement("div")
    hanaWrapperBack.append(hanaCre)
    hanaCre.classList.add("hanaOne")
    hanaCre.classList.add("FallThree")
    hanaCre.style.top = (Math.random() * 55 + 8) + "%"
    hanaCre.style.left = (Math.random() * 75 + 10) + "%"
}
function hanaTwoPositionThreeFallThree() {
    let hanaCre = document.createElement("div")
    hanaWrapperBack.append(hanaCre)
    hanaCre.classList.add("hanaTwo")
    hanaCre.classList.add("FallThree")
    hanaCre.style.top = (Math.random() * 55 + 8) + "%"
    hanaCre.style.left = (Math.random() * 75 + 10) + "%"
}
function hanaThreePositionThreeFallThree() {
    let hanaCre = document.createElement("div")
    hanaWrapperBack.append(hanaCre)
    hanaCre.classList.add("hanaThree")
    hanaCre.classList.add("FallThree")
    hanaCre.style.top = (Math.random() * 55 + 8) + "%"
    hanaCre.style.left = (Math.random() * 75 + 10) + "%"
}
repeat(10, hanaOnePositionThreeFallThree)
repeat(5, hanaTwoPositionThreeFallThree)
repeat(3, hanaThreePositionThreeFallThree)

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
//fall one
function hanaOnePositionFourFallOne() {
    let hanaCre = document.createElement("div")
    hanaWrapper.append(hanaCre)
    hanaCre.classList.add("hanaOne")
    hanaCre.classList.add("FallOne")
    hanaCre.style.top = (Math.random() * 30 + 42) + "%"
    hanaCre.style.left = (Math.random() * 10 + 90) + "%"
}
function hanaTwoPositionFourFallOne() {
    let hanaCre = document.createElement("div")
    hanaWrapper.append(hanaCre)
    hanaCre.classList.add("hanaTwo")
    hanaCre.classList.add("FallOne")
    hanaCre.style.top = (Math.random() * 30 + 42) + "%"
    hanaCre.style.left = (Math.random() * 10 + 90) + "%"
}
function hanaThreePositionFourFallOne() {
    let hanaCre = document.createElement("div")
    hanaWrapper.append(hanaCre)
    hanaCre.classList.add("hanaThree")
    hanaCre.classList.add("FallOne")
    hanaCre.style.top = (Math.random() * 30 + 42) + "%"
    hanaCre.style.left = (Math.random() * 10 + 90) + "%"
}
repeat(2, hanaOnePositionFourFallOne)
repeat(1, hanaTwoPositionFourFallOne)
repeat(1, hanaThreePositionFourFallOne)

//fall two
function hanaOnePositionFourFallTwo() {
    let hanaCre = document.createElement("div")
    hanaWrapper.append(hanaCre)
    hanaCre.classList.add("hanaOne")
    hanaCre.classList.add("FallTwo")
    hanaCre.style.top = (Math.random() * 30 + 42) + "%"
    hanaCre.style.left = (Math.random() * 10 + 90) + "%"
}
function hanaTwoPositionFourFallTwo() {
    let hanaCre = document.createElement("div")
    hanaWrapper.append(hanaCre)
    hanaCre.classList.add("hanaTwo")
    hanaCre.classList.add("FallTwo")
    hanaCre.style.top = (Math.random() * 30 + 42) + "%"
    hanaCre.style.left = (Math.random() * 10 + 90) + "%"
}
function hanaThreePositionFourFallTwo() {
    let hanaCre = document.createElement("div")
    hanaWrapper.append(hanaCre)
    hanaCre.classList.add("hanaThree")
    hanaCre.classList.add("FallTwo")
    hanaCre.style.top = (Math.random() * 30 + 42) + "%"
    hanaCre.style.left = (Math.random() * 10 + 90) + "%"
}
repeat(2, hanaOnePositionFourFallTwo)
repeat(1, hanaTwoPositionFourFallTwo)
repeat(1, hanaThreePositionFourFallTwo)

//fall three
function hanaOnePositionFourFallThree() {
    let hanaCre = document.createElement("div")
    hanaWrapper.append(hanaCre)
    hanaCre.classList.add("hanaOne")
    hanaCre.classList.add("FallThree")
    hanaCre.style.top = (Math.random() * 30 + 42) + "%"
    hanaCre.style.left = (Math.random() * 10 + 90) + "%"
}
function hanaTwoPositionFourFallThree() {
    let hanaCre = document.createElement("div")
    hanaWrapper.append(hanaCre)
    hanaCre.classList.add("hanaTwo")
    hanaCre.classList.add("FallThree")
    hanaCre.style.top = (Math.random() * 30 + 42) + "%"
    hanaCre.style.left = (Math.random() * 10 + 90) + "%"
}
function hanaThreePositionFourFallThree() {
    let hanaCre = document.createElement("div")
    hanaWrapper.append(hanaCre)
    hanaCre.classList.add("hanaThree")
    hanaCre.classList.add("FallThree")
    hanaCre.style.top = (Math.random() * 30 + 42) + "%"
    hanaCre.style.left = (Math.random() * 10 + 90) + "%"
}
repeat(2, hanaOnePositionFourFallThree)
repeat(1, hanaTwoPositionFourFallThree)
repeat(1, hanaThreePositionFourFallThree)

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

let FallOne = document.querySelectorAll(".FallOne")
let FallTwo = document.querySelectorAll(".FallTwo")
let FallThree = document.querySelectorAll(".FallThree")
let FallFour = document.querySelectorAll(".FallFour")
let FallFive = document.querySelectorAll(".FallFive")

hanaOne.forEach(function (e) {
    e.classList.add("hanaSpring")
})
hanaTwo.forEach(function (e) {
    e.classList.add("hanaSpring")
})
hanaThree.forEach(function (e) {
    e.classList.add("hanaSpring")
})


let hanaSpring = document.querySelectorAll(".hanaSpring")





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






window.addEventListener("scroll", function () {
    percentage = getScrollPercentage() // 0-100

    // spring scroll animation
    FallOne.forEach(function (e, i) {
        fall(e, i, 0, 60)
    })
    FallTwo.forEach(function (e, i) {
        fall(e, i, 20, 60)
    })
    FallThree.forEach(function (e, i) {
        fall(e, i, 30, 70)
    })
    FallFour.forEach(function (e, i) {
        fall(e, i, 40, 80)
    })
    FallFive.forEach(function (e, i) {
        fall(e, i, 50, 90)
    })


    // summer scroll animation
    GrowOne.forEach(function (e, i) {
        grow(e, i, 40, 70, 1)
    })
    GrowTwo.forEach(function (e, i) {
        grow(e, i, 50, 80, 1)
    })
    GrowThree.forEach(function (e, i) {
        grow(e, i, 60, 90, 1)
    })
    GrowFour.forEach(function (e, i) {
        grow(e, i, 65, 95, 1)
    })
    GrowFive.forEach(function (e, i) {
        grow(e, i, 70, 100, 1)
    })

    GrowOneBack.forEach(function (e, i) {
        grow(e, i, 40, 70, 0.5)
    })
    GrowTwoBack.forEach(function (e, i) {
        grow(e, i, 55, 75, 0.5)
    })
    GrowThreeBack.forEach(function (e, i) {
        grow(e, i, 50, 80, 0.5)
    })
    GrowFourBack.forEach(function (e, i) {
        grow(e, i, 60, 90, 0.5)
    })
    GrowFiveBack.forEach(function (e, i) {
        grow(e, i, 70, 100, 0.5)
    })


    // trunk & sky scroll animation
    if (percentage > 45) {
        document.querySelector("#trunkSummer").style.opacity = (percentage - 45) / 55
        document.querySelector("#backgroundSummer").style.opacity = (percentage - 45) / 55
    } else {
        document.querySelector("#trunkSummer").style.opacity = 0
        document.querySelector("#backgroundSummer").style.opacity = 0
    }





    // human scroll animation
    if ((percentage >= 100 / 14 * 3 && percentage < 100 / 14 * 4) || (percentage >= 100 / 14 * 11 && percentage < 100 / 14 * 12)) {
        OTwo.style.opacity = 1
    } else {
        OTwo.style.opacity = 0
    }
    if ((percentage >= 100 / 14 * 4 && percentage < 100 / 14 * 5) || (percentage >= 100 / 14 * 12 && percentage < 100 / 14 * 13)) {
        OOne.style.opacity = 1
    } else {
        OOne.style.opacity = 0
    }
    if (percentage >= 100 / 14 * 8 && percentage < 100 / 14 * 9) {
        SOneP.style.opacity = 1
    } else {
        SOneP.style.opacity = 0
    }
    if (percentage >= 100 / 14 * 9 && percentage < 100 / 14 * 10) {
        STwoP.style.opacity = 1
    } else {
        STwoP.style.opacity = 0
    }
    if ((percentage >= 100 / 14 * 5 && percentage < 100 / 28 * 13) || (percentage >= 100 / 14 * 10 && percentage < 100 / 14 * 11)) {
        SOne.style.opacity = 1
    } else {
        SOne.style.opacity = 0
    }



    // lines
    if (percentage == 100 / 14 || percentage == 100 / 14 * 2 || percentage == 100 / 14 * 3 || percentage == 100 / 14 * 4 || percentage == 100 / 14 * 5 || percentage == 100 / 26 * 11 || percentage == 100 / 14 * 6 || percentage == 100 / 14 * 7 || percentage == 100 / 14 * 8 || percentage == 100 / 14 * 9 || percentage == 100 / 14 * 10 || percentage == 100 / 14 * 11 || percentage == 100 / 14 * 12 || percentage == 100 / 14 * 13) {
        linesaudio.play()
    }

    if (percentage > 100 / 14 * 1 && percentage < 100 / 14 * 2) {
        document.querySelector("#lineOne").style.opacity = 1
    } else {
        document.querySelector("#lineOne").style.opacity = 0
    }
    if (percentage > 100 / 14 * 2 && percentage < 100 / 14 * 3) {
        document.querySelector("#lineTwo").style.opacity = 1
    } else {
        document.querySelector("#lineTwo").style.opacity = 0
    }
    if (percentage > 100 / 14 * 3 && percentage < 100 / 14 * 4) {
        document.querySelector("#lineThree").style.opacity = 1
    } else {
        document.querySelector("#lineThree").style.opacity = 0
    }
    if (percentage > 100 / 14 * 4 && percentage < 100 / 14 * 5) {
        document.querySelector("#lineFour").style.opacity = 1
    } else {
        document.querySelector("#lineFour").style.opacity = 0
    }
    if (percentage > 100 / 14 * 5 && percentage < 100 / 14 * 6) {
        document.querySelector("#lineFive").style.opacity = 1
    } else {
        document.querySelector("#lineFive").style.opacity = 0
    }
    if (percentage > 100 / 14 * 6 && percentage < 100 / 28 * 13) {
        document.querySelector("#lineSix").style.opacity = 1
    } else {
        document.querySelector("#lineSix").style.opacity = 0
    }
    if (percentage > 100 / 28 * 13 && percentage < 100 / 14 * 7) {
        document.querySelector("#lineSixP").style.opacity = 1
    } else {
        document.querySelector("#lineSixP").style.opacity = 0
    }                                                      // 这里应该是没问题的
    if (percentage > 100 / 14 * 7 && percentage < 100 / 14 * 8) {
        document.querySelector("#lineSeven").style.opacity = 1
    } else {
        document.querySelector("#lineSeven").style.opacity = 0
    }
    if (percentage > 100 / 14 * 8 && percentage < 100 / 14 * 9) {
        document.querySelector("#lineEight").style.opacity = 1
    } else {
        document.querySelector("#lineEight").style.opacity = 0
    }
    if (percentage > 100 / 14 * 9 && percentage < 100 / 14 * 10) {
        document.querySelector("#lineNine").style.opacity = 1
    } else {
        document.querySelector("#lineNine").style.opacity = 0
    }
    if (percentage > 100 / 14 * 10 && percentage < 100 / 14 * 11) {
        document.querySelector("#lineTen").style.opacity = 1
    } else {
        document.querySelector("#lineTen").style.opacity = 0
    }
    if (percentage > 100 / 14 * 11 && percentage < 100 / 14 * 12) {
        document.querySelector("#lineEleven").style.opacity = 1
    } else {
        document.querySelector("#lineEleven").style.opacity = 0
    }
    if (percentage > 100 / 14 * 12 && percentage < 100 / 14 * 13) {
        document.querySelector("#lineTwelve").style.opacity = 1
    } else {
        document.querySelector("#lineTwelve").style.opacity = 0
    }
    if (percentage > 100 / 14 * 13) {
        document.querySelector("#lineThirteen").style.opacity = 1
    } else {
        document.querySelector("#lineThirteen").style.opacity = 0
    }




    // paper
    if ((percentage > 100 / 14 * 6 && percentage < 100 / 14 * 7) || (percentage > 100 / 14 * 13)) {
        document.querySelector("#paperOne").style.opacity = 1
    } else {
        document.querySelector("#paperOne").style.opacity = 0
    }
    if (percentage > 100 / 14 * 7 && percentage < 100 / 14 * 13) {
        document.querySelector("#paperTwo").style.opacity = 1
    } else {
        document.querySelector("#paperTwo").style.opacity = 0
    }





    // building
    if ((percentage < 100 / 14) || (percentage > 100 / 14 * 7 && percentage < 100 / 14 * 12) || (percentage > 100 / 14 * 13)) {
        document.querySelector("#buildingOne").style.opacity = 1
    } else {
        document.querySelector("#buildingOne").style.opacity = 0
    }
    if (percentage > 100 / 14 * 1 && percentage < 100 / 14 * 2) {
        document.querySelector("#buildingTwo").style.opacity = 1
    } else {
        document.querySelector("#buildingTwo").style.opacity = 0
    }
    if (percentage > 100 / 14 * 2 && percentage < 100 / 14 * 3) {
        document.querySelector("#buildingThree").style.opacity = 1
    } else {
        document.querySelector("#buildingThree").style.opacity = 0
    }
    if (percentage > 100 / 14 * 3 && percentage < 100 / 14 * 4) {
        document.querySelector("#buildingFour").style.opacity = 1
    } else {
        document.querySelector("#buildingFour").style.opacity = 0
    }
    if (percentage > 100 / 14 * 4 && percentage < 100 / 14 * 5) {
        document.querySelector("#buildingFive").style.opacity = 1
    } else {
        document.querySelector("#buildingFive").style.opacity = 0
    }
    if ((percentage > 100 / 14 * 5 && percentage < 100 / 14 * 7) || (percentage > 100 / 14 * 12 && percentage < 100 / 14 * 13)) {
        document.querySelector("#buildingSix").style.opacity = 1
    } else {
        document.querySelector("#buildingSix").style.opacity = 0
    }




})



// human.forEach(function (e) {
//     e.style.opacity = 0
// })
// lines.forEach(function (e) {
//     e.style.opacity = 0
// })