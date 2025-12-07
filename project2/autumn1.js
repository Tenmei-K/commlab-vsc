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


let human = document.querySelectorAll(".human")
let AutumnOne = document.querySelector("#AutumnOne")

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
let inkThree = document.querySelector("#inkThree")




// autumn

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
    e.classList.add("hanaAutumn")
})
hanaTwo.forEach(function (e) {
    e.classList.add("hanaAutumn")
})
hanaThree.forEach(function (e) {
    e.classList.add("hanaAutumn")
})


let hanaAutumn = document.querySelectorAll(".hanaAutumn")





document.querySelector(".background").style.height = 300 + "vh"


window.addEventListener("scroll", function () {
    percentage = getScrollPercentage() // 0-100

    // audio




    // spring scroll animation
    FallOne.forEach(function (e, i) {
        fall(e, i, 0, 100)
    })




    // trunk & sky scroll animation
    if (percentage > 45) {
        document.querySelector("#trunkWinter").style.opacity = (percentage - 45) / 55 * 0.2
        document.querySelector("#backgroundWinter").style.opacity = (percentage - 45) / 55 * 0.2
    } else {
        document.querySelector("#trunkWinter").style.opacity = 0
        document.querySelector("#backgroundWinter").style.opacity = 0
    }





    // lines

    if (percentage < 100 / 3) {
        document.querySelector("#lineOne").style.opacity = 1
    } else {
        document.querySelector("#lineOne").style.opacity = 0
    }
    if (percentage > 100 / 3 && percentage < 100 / 3 * 2) {
        document.querySelector("#lineTwo").style.opacity = 1
    } else {
        document.querySelector("#lineTwo").style.opacity = 0
    }
    if (percentage > 100 / 3 * 2) {
        document.querySelector("#lineThree").style.opacity = 1
    } else {
        document.querySelector("#lineThree").style.opacity = 0
    }


    ink.forEach(function (e) {
        e.addEventListener("mouseover", function () {
            e.style.scale = 1.05
        })
        e.addEventListener("mouseout", function () {
            e.style.scale = 1
        })
    })
    if (percentage < 100 / 3 * 2) {
        ink.forEach(function (e) {
            e.addEventListener("click", function () {
                // let hintWrapper = document.createElement("div")
                // hintWrapper.style.position = "fixed"
                // hintWrapper.style.bottom = 0
                // hintWrapper.style.left = 0
                // hintWrapper.style.maxWidth = 100 + "%"
                // hintWrapper.style.minWidth = 100 + "%"
                // hintWrapper.style.maxHeight = 100 + "%"
                // hintWrapper.style.minHeight = 100 + "%"
                // hintWrapper.style.justifyContent = "center"
                // hintWrapper.style.justifyItems = "center"


                // 把note图片改了

                let note = document.createElement("img")
                note.src = "assets/Autumn1Hint.png"
                note.style.height = 100 + "%"
                note.style.position = "fixed"
                note.style.bottom = 0

                hintWrapper.append(note)

                setTimeout(function () {
                    note.remove()
                },1000)
            })
        })
    }




})


function goToSummer() {
    document.location = "pre-summer.html"
}
let paperOne = document.querySelector("#paperOne")
