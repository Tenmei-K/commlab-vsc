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
let AutumnTwo = document.querySelector("#AutumnTwo")


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




// autumn

// ! position one

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




// background height setting
document.querySelector(".background").style.height = 300 + "vh"

let gossipOne = document.querySelector("#gossipOne")

let elmAll = document.querySelectorAll(".elm")
let elmone = document.querySelector("#one"); 
let elmtwo = document.querySelector("#two"); 
let elmthree = document.querySelector("#three"); 
let elmfour = document.querySelector("#four"); 
let elmfive = document.querySelector("#five"); 
let elmsix = document.querySelector("#six"); 
let elmseven = document.querySelector("#seven"); 
let elmeight = document.querySelector("#eight"); 
let elmnine = document.querySelector("#nine"); 
let elmten = document.querySelector("#ten"); 
let elmeleven = document.querySelector("#eleven"); 
let elmtwelve = document.querySelector("#twelve"); 
let elmthirteen = document.querySelector("#thirteen"); 
let elmfourteen = document.querySelector("#fourteen"); 

function changeOpacity(e) {
    console.log("change opacity running")
    e.style.opacity = 1
    setTimeout(function () {
        e.style.opacity = 0
        setTimeout(function () {
            e.style.opacity = 1
            setTimeout(function () {
                e.style.opacity = 1
                setTimeout(function () {
                    e.style.opacity = 0
                }, 50)
            }, 50)
        }, 50)
    }, 100)
}

changeOpacity(gossipOne)



window.addEventListener("scroll", function () {
    percentage = getScrollPercentage() // 0-100

    // audio




    // scroll animation
    FallTwo.forEach(function (e, i) {
        fall(e, i, 0, 100)
    })




    // trunk & sky scroll animation
    if (percentage > 45) {
        document.querySelector("#trunkWinter").style.opacity = 0.2 + percentage / 100 * 0.2
        document.querySelector("#backgroundWinter").style.opacity = 0.2 + percentage / 100 * 0.2
    } else {
        document.querySelector("#trunkWinter").style.opacity = 0.2
        document.querySelector("#backgroundWinter").style.opacity = 0.2
    }





    // lines




    if (percentage >= 100 / 3 * 2) {
        let newInk = document.createElement("img")
        newInk.src = "assets/inkTwo.png"
        newInk.classList.add("ink")
        newInk.style.height = 54 + "%"

        hintWrapper.append(newInk)
    } else {
        hintWrapper.innerText = ""
    }

    if (percentage >= 100 / 6 * 5) {
        inkTwo.style.cursor = "pointer"
        inkTwo.addEventListener("mouseover", function () {
            inkTwo.style.scale = 1.1
        })
        inkTwo.addEventListener("mouseout", function () {
            inkTwo.style.scale = 1
        })
        inkTwo.addEventListener("click", function () {
            document.location = "autumn3.html"
        })
    } else {
        inkTwo.style.cursor = "arrow"
        inkTwo.addEventListener("mouseover", function () {
            inkTwo.style.scale = 1
        })
        inkTwo.addEventListener("click", function () {
            document.location = "autumn2.html"
        })
    }





    // text animation

    elmAll.forEach(function (e) {  // 在运作但没完全运作 神经病啊！
        gossipOne.style.opacity = 1
        e.style.scale = 1 + 19 * (percentage) / 15
        if (percentage > 15) {
            e.remove()
        }
    })

})

