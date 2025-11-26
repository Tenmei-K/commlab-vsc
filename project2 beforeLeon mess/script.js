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

function fall(e) {
    // console.log(percentage)
    let rX = 0//- (Math.random() * 50 + 10) * percentage / 100
    let yPix = 100 + Number(e.style.top.substring(0, e.style.top.length - 2)) / 100 * window.innerWidth;
    let distToFall = window.innerHeight - yPix;
    let rY = distToFall * (percentage/100) - 10; 
    // let rY = Number(e.style.top.substring(0, e.style.top.length - 2)) 
    // let rY = (100 - Number(e.style.top.substring(0, e.style.top.length - 2))) / 100 * document.documentElement.clientHeight * percentage / 100
    e.style.transform = "translate(" + rX + "px, " + rY + "px)"

    // e.style.opacity = 1 / 100 * (100 - percentage)
    // e.style.transition = "ease-in"
    // setTimeout(this,2000)
}


let hanaWrapper = document.querySelector("#hanaWrapper")
let hanaWrapperBack = document.querySelector("#hanaWrapperBack")



// spring
function hanaOnePositionOne() {
    let hanaCre = document.createElement("div")
    hanaWrapper.append(hanaCre)
    hanaCre.classList.add("hanaOne")
    hanaCre.style.top = (Math.random() * 30 + 34) + "vh"
    hanaCre.style.left = (Math.random() * 39 + 20) + "vw"
}
function hanaTwoPositionOne() {
    let hanaCre = document.createElement("div")
    hanaWrapper.append(hanaCre)
    hanaCre.classList.add("hanaTwo")
    hanaCre.style.top = (Math.random() * 30 + 34) + "vh"
    hanaCre.style.left = (Math.random() * 39 + 20) + "vw"
}
function hanaThreePositionOne() {
    let hanaCre = document.createElement("div")
    hanaWrapper.append(hanaCre)
    hanaCre.classList.add("hanaThree")
    hanaCre.style.top = (Math.random() * 30 + 34) + "vh"
    hanaCre.style.left = (Math.random() * 39 + 20) + "vw"
}
repeat(60, hanaOnePositionOne)
repeat(25, hanaTwoPositionOne)
repeat(5, hanaThreePositionOne)

// back
function hanaOnePositionTwo() {
    let hanaCre = document.createElement("div")
    hanaWrapperBack.append(hanaCre)
    hanaCre.classList.add("hanaOne")
    hanaCre.style.top = (Math.random() * 47 + 9) + "vh"
    hanaCre.style.left = (Math.random() * 64 + 28) + "vw"
}
function hanaTwoPositionTwo() {
    let hanaCre = document.createElement("div")
    hanaWrapperBack.append(hanaCre)
    hanaCre.classList.add("hanaTwo")
    hanaCre.style.top = (Math.random() * 47 + 9) + "vh"
    hanaCre.style.left = (Math.random() * 64 + 28) + "vw"
}
function hanaThreePositionTwo() {
    let hanaCre = document.createElement("div")
    hanaWrapperBack.append(hanaCre)
    hanaCre.classList.add("hanaThree")
    hanaCre.style.top = (Math.random() * 47 + 9) + "vh"
    hanaCre.style.left = (Math.random() * 64 + 28) + "vw"
}
repeat(50, hanaOnePositionTwo)
repeat(200, hanaTwoPositionTwo)
repeat(100, hanaThreePositionTwo)


function hanaOnePositionThree() {
    let hanaCre = document.createElement("div")
    hanaWrapper.append(hanaCre)
    hanaCre.classList.add("hanaOne")
    hanaCre.style.top = (Math.random() * 39) + "vh"
    hanaCre.style.right = (Math.random() * 55) + "vw"
}
function hanaTwoPositionThree() {
    let hanaCre = document.createElement("div")
    hanaWrapper.append(hanaCre)
    hanaCre.classList.add("hanaTwo")
    hanaCre.style.top = (Math.random() * 39) + "vh"
    hanaCre.style.right = (Math.random() * 55) + "vw"
}
function hanaThreePositionThree() {
    let hanaCre = document.createElement("div")
    hanaWrapper.append(hanaCre)
    hanaCre.classList.add("hanaThree")
    hanaCre.style.top = (Math.random() * 39) + "vh"
    hanaCre.style.right = (Math.random() * 55) + "vw"
}
repeat(200, hanaOnePositionThree)
repeat(60, hanaTwoPositionThree)
repeat(20, hanaThreePositionThree)


function hanaOnePositionFour() {
    let hanaCre = document.createElement("div")
    hanaWrapper.append(hanaCre)
    hanaCre.classList.add("hanaOne")
    hanaCre.style.top = (Math.random() * 30 + 34) + "vh"
    hanaCre.style.right = (Math.random() * 10) + "vw"
}
function hanaTwoPositionFour() {
    let hanaCre = document.createElement("div")
    hanaWrapper.append(hanaCre)
    hanaCre.classList.add("hanaTwo")
    hanaCre.style.top = (Math.random() * 30 + 34) + "vh"
    hanaCre.style.right = (Math.random() * 10) + "vw"
}
function hanaThreePositionFour() {
    let hanaCre = document.createElement("div")
    hanaWrapper.append(hanaCre)
    hanaCre.classList.add("hanaThree")
    hanaCre.style.top = (Math.random() * 30 + 34) + "vh"
    hanaCre.style.right = (Math.random() * 10) + "vw"
}
repeat(50, hanaOnePositionFour)
repeat(39, hanaTwoPositionFour)
repeat(5, hanaThreePositionFour)


let hanaOne = document.querySelectorAll(".hanaOne")
let hanaTwo = document.querySelectorAll(".hanaTwo")
let hanaThree = document.querySelectorAll(".hanaThree")



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





// // summer
// function hanaFourPositionOne() {
//     let hanaCre = document.createElement("div")
//     hanaWrapper.append(hanaCre)
//     hanaCre.classList.add("hanaFour")
//     hanaCre.style.top = (Math.random() * 30 + 34) + "vh"
//     hanaCre.style.left = (Math.random() * 39 + 20) + "vw"
// }
// function hanaFivePositionOne() {
//     let hanaCre = document.createElement("div")
//     hanaWrapper.append(hanaCre)
//     hanaCre.classList.add("hanaFive")
//     hanaCre.style.top = (Math.random() * 30 + 34) + "vh"
//     hanaCre.style.left = (Math.random() * 39 + 20) + "vw"
// }
// function hanaSixPositionOne() {
//     let hanaCre = document.createElement("div")
//     hanaWrapper.append(hanaCre)
//     hanaCre.classList.add("hanaSix")
//     hanaCre.style.top = (Math.random() * 30 + 34) + "vh"
//     hanaCre.style.left = (Math.random() * 39 + 20) + "vw"
// }
// repeat(120, hanaFourPositionOne)
// repeat(50, hanaFivePositionOne)
// repeat(10, hanaSixPositionOne)

// // back
// function hanaFourPositionTwo() {
//     let hanaCre = document.createElement("div")
//     hanaWrapperBack.append(hanaCre)
//     hanaCre.classList.add("hanaFour")
//     hanaCre.style.top = (Math.random() * 47 + 9) + "vh"
//     hanaCre.style.left = (Math.random() * 64 + 28) + "vw"
// }
// function hanaFivePositionTwo() {
//     let hanaCre = document.createElement("div")
//     hanaWrapperBack.append(hanaCre)
//     hanaCre.classList.add("hanaFive")
//     hanaCre.style.top = (Math.random() * 47 + 9) + "vh"
//     hanaCre.style.left = (Math.random() * 64 + 28) + "vw"
// }
// function hanaSixPositionTwo() {
//     let hanaCre = document.createElement("div")
//     hanaWrapperBack.append(hanaCre)
//     hanaCre.classList.add("hanaSix")
//     hanaCre.style.top = (Math.random() * 47 + 9) + "vh"
//     hanaCre.style.left = (Math.random() * 64 + 28) + "vw"
// }
// repeat(100, hanaFourPositionTwo)
// repeat(400, hanaFivePositionTwo)
// repeat(200, hanaSixPositionTwo)


// function hanaFourPositionThree() {
//     let hanaCre = document.createElement("div")
//     hanaWrapper.append(hanaCre)
//     hanaCre.classList.add("hanaFour")
//     hanaCre.style.top = (Math.random() * 39) + "vh"
//     hanaCre.style.right = (Math.random() * 55) + "vw"
// }
// function hanaFivePositionThree() {
//     let hanaCre = document.createElement("div")
//     hanaWrapper.append(hanaCre)
//     hanaCre.classList.add("hanaFive")
//     hanaCre.style.top = (Math.random() * 39) + "vh"
//     hanaCre.style.right = (Math.random() * 55) + "vw"
// }
// function hanaSixPositionThree() {
//     let hanaCre = document.createElement("div")
//     hanaWrapper.append(hanaCre)
//     hanaCre.classList.add("hanaSix")
//     hanaCre.style.top = (Math.random() * 39) + "vh"
//     hanaCre.style.right = (Math.random() * 55) + "vw"
// }
// repeat(350, hanaFourPositionThree)
// repeat(120, hanaFivePositionThree)
// repeat(20, hanaSixPositionThree)


// function hanaFourPositionFour() {
//     let hanaCre = document.createElement("div")
//     hanaWrapper.append(hanaCre)
//     hanaCre.classList.add("hanaFour")
//     hanaCre.style.top = (Math.random() * 30 + 34) + "vh"
//     hanaCre.style.right = (Math.random() * 10) + "vw"
// }
// function hanaFivePositionFour() {
//     let hanaCre = document.createElement("div")
//     hanaWrapper.append(hanaCre)
//     hanaCre.classList.add("hanaFive")
//     hanaCre.style.top = (Math.random() * 30 + 34) + "vh"
//     hanaCre.style.right = (Math.random() * 10) + "vw"
// }
// function hanaSixPositionFour() {
//     let hanaCre = document.createElement("div")
//     hanaWrapper.append(hanaCre)
//     hanaCre.classList.add("hanaSix")
//     hanaCre.style.top = (Math.random() * 30 + 34) + "vh"
//     hanaCre.style.right = (Math.random() * 10) + "vw"
// }
// repeat(50, hanaFourPositionFour)
// repeat(39, hanaFivePositionFour)
// repeat(5, hanaSixPositionFour)


// let hanaFour = document.querySelectorAll(".hanaFour")
// let hanaFive = document.querySelectorAll(".hanaFive")
// let hanaSix = document.querySelectorAll(".hanaSix")

// hanaFour.forEach(function (e) {
//     e.classList.add("hanaSummer")
// })
// hanaFive.forEach(function (e) {
//     e.classList.add("hanaSummer")
// })
// hanaSix.forEach(function (e) {
//     e.classList.add("hanaSummer")
// })


// let hanaSummer = document.querySelectorAll(".hanaSummer")


// hanaSummer.forEach(function (e) {
//     e.style.opacity = 0
// })
// document.querySelector("#trunkSummer").style.opacity = 0





window.addEventListener("scroll", function () {
    percentage = getScrollPercentage() // 0-100

    // leaves scroll animation
    hanaSpring.forEach(function (e, i) {
        if(i == 0){
            console.log(e.style.transform == '')
        }


        // if(Math.random() < 0.01 || e.style.transform != ''){
            fall(e)
        // }
        
        
    })

    // if (percentage > 40) {
    //     hanaSummer.forEach(function (e) {
    //         e.style.opacity = (percentage - 40) / 60
    //     })
    //     document.querySelector("#trunkSummer").style.opacity = (percentage - 40) / 60
    // } 



    // else {
    //     hanaSummer.forEach(function (e) {
    //         e.style.opacity = 0
    //     })
    //     document.querySelector("#trunkSummer").style.opacity = 0
    // }


    // human scroll animation

})
