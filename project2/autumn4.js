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
let hiddenhuman = document.querySelector("#hiddenhuman")


let lines = document.querySelectorAll(".lines")


let hanaWrapper = document.querySelector("#hanaWrapper");
let treeWrapper = document.querySelector("#TreeWrapper");
let treeHeight = treeWrapper.getBoundingClientRect().height;
// let hanaWrapperBack = document.querySelector("#hanaWrapperBack")

let paperWrapper = document.querySelector("#paperWrapper")
let NewimgWrapper = document.querySelector("#NewimgWrapper")


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


let inkaudio = document.createElement("audio")
inkaudio.src = "sounds/microphonePlugIn.mp3"
inkaudio.loop = false

let ink = document.querySelectorAll(".ink")
let inkOne = document.querySelector("#inkOne")
let inkTwo = document.querySelector("#inkTwo")



document.querySelector("#trunkWinter").style.opacity = 0.7
document.querySelector("#backgroundWinter").style.opacity = 0.7




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
document.querySelector(".background").style.height = 100 + "vh"



function createInkOne() {   // 0-20

    let inkCOne = document.createElement("img")
    inkCOne.src = "assets/ink.png"

    rTopOne = Math.floor(Math.random() * 20) - 20
    rLeftOne = Math.floor(Math.random() * 90) - 5

    inkCOne.style.top = rTopOne + "%"
    inkCOne.style.left = rLeftOne + "%"

    inkCOne.classList.add("inkC")
    NewimgWrapper.append(inkCOne)

}

function createInkTwo() {   // 0-20

    let inkCTwo = document.createElement("img")
    inkCTwo.src = "assets/ink.png"

    rTopTwo = Math.floor(Math.random() * 20)
    rLeftTwo = Math.floor(Math.random() * 90) - 5

    inkCTwo.style.top = rTopTwo + "%"
    inkCTwo.style.left = rLeftTwo + "%"

    inkCTwo.classList.add("inkC")
    NewimgWrapper.append(inkCTwo)

}

function createInkThree() {   // 0-20

    let inkCThree = document.createElement("img")
    inkCThree.src = "assets/ink.png"

    rTopThree = Math.floor(Math.random() * 20) + 20
    rLeftThree = Math.floor(Math.random() * 90) - 5

    inkCThree.style.top = rTopThree + "%"
    inkCThree.style.left = rLeftThree + "%"

    inkCThree.classList.add("inkC")
    NewimgWrapper.append(inkCThree)

}

function createInkFour() {   // 0-20

    let inkCFour = document.createElement("img")
    inkCFour.src = "assets/ink.png"

    rTopFour = Math.floor(Math.random() * 20) + 40
    rLeftFour = Math.floor(Math.random() * 90) - 5

    inkCFour.style.top = rTopFour + "%"
    inkCFour.style.left = rLeftFour + "%"

    inkCFour.classList.add("inkC")
    NewimgWrapper.append(inkCFour)

}

function createInkFive() {   // 0-20

    let inkCFive = document.createElement("img")
    inkCFive.src = "assets/ink.png"

    rTopFive = Math.floor(Math.random() * 20) + 60
    rLeftFive = Math.floor(Math.random() * 90) - 5

    inkCFive.style.top = rTopFive + "%"
    inkCFive.style.left = rLeftFive + "%"

    inkCFive.classList.add("inkC")
    NewimgWrapper.append(inkCFive)

}


function createInk() {
    createInkOne()
    setTimeout(function () {
        createInkOne()
        setTimeout(function () {
            createInkOne()
            setTimeout(function () {
                createInkOne()
                setTimeout(function () {
                    createInkOne()
                    setTimeout(function () {
                        createInkOne()
                        // two start fr here
                        setTimeout(function () {
                            document.querySelector("#lineDLTT").remove()
                            document.querySelector("#lineDLTT2").style.opacity = 1
                            createInkTwo()
                            setTimeout(function () {
                                createInkTwo()
                                setTimeout(function () {
                                    createInkTwo()
                                    setTimeout(function () {
                                        createInkTwo()
                                        setTimeout(function () {
                                            createInkTwo()
                                            setTimeout(function () {
                                                createInkTwo()
                                                setTimeout(function () {
                                                    createInkTwo()
                                                    setTimeout(function () {
                                                        createInkTwo()
                                                        setTimeout(function () {
                                                            createInkTwo()
                                                            setTimeout(function () {
                                                                createInkTwo()
                                                                setTimeout(function () {
                                                                    document.querySelector("#lineDLTT2").remove()
                                                                    document.querySelector("#lineDLTT3").style.opacity = 1
                                                                    document.querySelector("#lineDLTT3").style.fontSize = 4 + "vh"
                                                                    createInkThree()
                                                                    setTimeout(function () {
                                                                        createInkThree()
                                                                        setTimeout(function () {
                                                                            createInkThree()
                                                                            setTimeout(function () {
                                                                                createInkThree()
                                                                                setTimeout(function () {
                                                                                    createInkThree()
                                                                                    setTimeout(function () {
                                                                                        createInkThree()
                                                                                        setTimeout(function () {
                                                                                            createInkThree()
                                                                                            setTimeout(function () {
                                                                                                createInkThree()

                                                                                                document.querySelector("#lineDLTT3").remove()
                                                                                                document.querySelector("#lineDLTT4").style.opacity = 1
                                                                                                document.querySelector("#lineDLTT4").style.fontSize = 6 + "vh"
                                                                                                setTimeout(function () {
                                                                                                    createInkThree()
                                                                                                    setTimeout(function () {
                                                                                                        createInkThree()
                                                                                                        // four start fr here
                                                                                                        setTimeout(function () {

                                                                                                            createInkFour()
                                                                                                            createInkFour()
                                                                                                            setTimeout(function () {
                                                                                                                createInkFour()
                                                                                                                createInkFour()
                                                                                                                setTimeout(function () {
                                                                                                                    createInkFour()
                                                                                                                    createInkFour()
                                                                                                                    createInkFour()
                                                                                                                    createInkFour()
                                                                                                                    document.querySelector("#lineDLTT4").remove()
                                                                                                                    setTimeout(function () {
                                                                                                                        createInkFive()
                                                                                                                        createInkFive()
                                                                                                                        createInkFive()
                                                                                                                        setTimeout(function () {
                                                                                                                            let blackpage = document.createElement("div")
                                                                                                                            blackpage.classList.add("wrapper")
                                                                                                                            blackpage.style.backgroundColor = "black"
                                                                                                                            blackpage.style.cursor = "pointer"
                                                                                                                            blackpage.addEventListener("click", function () {
                                                                                                                                document.location = "autumn4.html"
                                                                                                                            })
                                                                                                                            document.querySelector("#blackpageWrapper").append(blackpage)
                                                                                                                            inkaudio.play()
                                                                                                                        }, 100)
                                                                                                                    }, 100)
                                                                                                                }, 100)
                                                                                                            }, 100)
                                                                                                        }, 100)
                                                                                                    }, 100)
                                                                                                }, 100)
                                                                                            }, 100)
                                                                                        }, 100)
                                                                                    }, 100)
                                                                                }, 100)
                                                                            }, 100)
                                                                        }, 100)
                                                                    }, 100)
                                                                }, 100)
                                                            }, 100)
                                                        }, 100)
                                                    }, 100)
                                                }, 100)
                                            }, 100)
                                        }, 100)
                                    }, 100)
                                }, 100)
                            }, 100)
                        }, 100)
                    }, 100)
                }, 100)
            }, 100)
        }, 100)
    }, 100)
}


createInk()
createInk()
createInk()
createInk()




hiddenhuman.style.cursor = "pointer"
hiddenhuman.addEventListener("mouseover", function () {
    hiddenhuman.style.scale = 1.04
    AutumnOne.style.scale = 1.04
})
hiddenhuman.addEventListener("mouseout", function () {
    hiddenhuman.style, scale = 1
    AutumnOne.style.scale = 1
})
hiddenhuman.addEventListener("click", function () {
    document.location = "autumn5.html"
})
