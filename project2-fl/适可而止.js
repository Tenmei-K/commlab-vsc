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

function getp1() {
    p1 = Math.random() * 30
    // if (currentYpix < (ps + p1) * treeHeight / 100) {
    //     return
    // }
    // console.log(p1)
    console.log("getp1 working")
    return p1
}
function savep1(p1, currentYpix, ps) {
    percentage = getScrollPercentage()

    if (currentYpix > ps / 100 * treeHeight) {
        p1 = p1
        console.log("p2 = p2 working")
    }
    else if (isDefined == false) {
        p1 = getp1()
        console.log("p2 = p1 working")
    }
    return p1
}


let hanaWrapper = document.querySelector("#hanaWrapper")
let treeHeight = hanaWrapper.getBoundingClientRect().height;
// let hanaWrapperBack = document.querySelector("#hanaWrapperBack")


function fall(e, i, ps) {
    // console.log(percentage)
    // let rX = 0//- (Math.random() * 50 + 10) * percentage / 100
    let currentYpix = (Number(e.style.top.substring(0, e.style.top.length - 2)) / 100) * treeHeight; // 离顶边多远
    let distToFall = (treeHeight - 10) - currentYpix; //10 is the petal size


    // 生成初始p1
    if (typeof p1 == 'undefined') {
        console.log("if working")
        p1 = getp1()
        isDefined = true // 没用
    }
    // 对第二个div执行时会跳到这里，条件设定是成功的
    else if (typeof p1 != 'undefined') {
        console.log("else if working")
        
        if (currentYpix <= (ps + p1) / 100 * treeHeight) {
            p1 = getp1()
            console.log("p1 = p2 working")
        }
        // else {  //这里怎么写？？？？？？？？？？？？
        //     p1 = p1
        //     console.log("p1 = p1 working")
        // }
        isDefined = true
        // p1 = -100
    }


    p1 = savep1(p1, currentYpix, ps)


    let rY = distToFall * ((percentage - ps + p1) / (30));



    // if (currentYpix == treeHeight - 10) {
    //     console.log("fall return")
    //     return
    // } else 
    if (rY < 0) {
        rY = 0;
    } else if (rY > distToFall) {
        rY = distToFall;
    }

    if (i == 0) {
        console.log(e, currentYpix, treeHeight, p1)
    }
    console.log(rY)
    // let rY = Number(e.style.top.substring(0, e.style.top.length - 2)) 
    // let rY = (100 - Number(e.style.top.substring(0, e.style.top.length - 2))) / 100 * document.documentElement.clientHeight * percentage / 100

    e.style.transform = "translate(0px, " + rY + "px)"
    isDefined = false
    // e.style.opacity = 1 / 100 * (100 - percentage)
    // e.style.transition = "ease-in"
    // setTimeout(this,2000)
}




// spring
function hanaOnePositionOne() {
    let hanaCre = document.createElement("div")
    hanaWrapper.append(hanaCre)
    hanaCre.classList.add("hanaOne")
    hanaCre.style.top = (Math.random() * 10 + 30) + "%"
    hanaCre.style.left = (Math.random() * 20 + 8) + "%"
}
function hanaTwoPositionOne() {
    let hanaCre = document.createElement("div")
    hanaWrapper.append(hanaCre)
    hanaCre.classList.add("hanaTwo")
    hanaCre.style.top = (Math.random() * 10 + 50) + "%"
    hanaCre.style.left = (Math.random() * 40 + 8) + "%"
}
// function hanaThreePositionOne() {
//     let hanaCre = document.createElement("div")
//     hanaWrapper.append(hanaCre)
//     hanaCre.classList.add("hanaThree")
//     hanaCre.style.top = (Math.random() * 30 + 34) + "vh"
//     hanaCre.style.left = (Math.random() * 39 + 20) + "vw"
// }
repeat(10, hanaOnePositionOne)
// repeat(5, hanaTwoPositionOne)
// repeat(5, hanaThreePositionOne)

// // back
// function hanaOnePositionTwo() {
//     let hanaCre = document.createElement("div")
//     hanaWrapperBack.append(hanaCre)
//     hanaCre.classList.add("hanaOne")
//     hanaCre.style.top = (Math.random() * 47 + 9) + "vh"
//     hanaCre.style.left = (Math.random() * 64 + 28) + "vw"
// }
// function hanaTwoPositionTwo() {
//     let hanaCre = document.createElement("div")
//     hanaWrapperBack.append(hanaCre)
//     hanaCre.classList.add("hanaTwo")
//     hanaCre.style.top = (Math.random() * 47 + 9) + "vh"
//     hanaCre.style.left = (Math.random() * 64 + 28) + "vw"
// }
// function hanaThreePositionTwo() {
//     let hanaCre = document.createElement("div")
//     hanaWrapperBack.append(hanaCre)
//     hanaCre.classList.add("hanaThree")
//     hanaCre.style.top = (Math.random() * 47 + 9) + "vh"
//     hanaCre.style.left = (Math.random() * 64 + 28) + "vw"
// }
// repeat(50, hanaOnePositionTwo)
// repeat(200, hanaTwoPositionTwo)
// repeat(100, hanaThreePositionTwo)


// function hanaOnePositionThree() {
//     let hanaCre = document.createElement("div")
//     hanaWrapper.append(hanaCre)
//     hanaCre.classList.add("hanaOne")
//     hanaCre.style.top = (Math.random() * 39) + "vh"
//     hanaCre.style.right = (Math.random() * 55) + "vw"
// }
// function hanaTwoPositionThree() {
//     let hanaCre = document.createElement("div")
//     hanaWrapper.append(hanaCre)
//     hanaCre.classList.add("hanaTwo")
//     hanaCre.style.top = (Math.random() * 39) + "vh"
//     hanaCre.style.right = (Math.random() * 55) + "vw"
// }
// function hanaThreePositionThree() {
//     let hanaCre = document.createElement("div")
//     hanaWrapper.append(hanaCre)
//     hanaCre.classList.add("hanaThree")
//     hanaCre.style.top = (Math.random() * 39) + "vh"
//     hanaCre.style.right = (Math.random() * 55) + "vw"
// }
// repeat(200, hanaOnePositionThree)
// repeat(60, hanaTwoPositionThree)
// repeat(20, hanaThreePositionThree)


// function hanaOnePositionFour() {
//     let hanaCre = document.createElement("div")
//     hanaWrapper.append(hanaCre)
//     hanaCre.classList.add("hanaOne")
//     hanaCre.style.top = (Math.random() * 30 + 34) + "vh"
//     hanaCre.style.right = (Math.random() * 10) + "vw"
// }
// function hanaTwoPositionFour() {
//     let hanaCre = document.createElement("div")
//     hanaWrapper.append(hanaCre)
//     hanaCre.classList.add("hanaTwo")
//     hanaCre.style.top = (Math.random() * 30 + 34) + "vh"
//     hanaCre.style.right = (Math.random() * 10) + "vw"
// }
// function hanaThreePositionFour() {
//     let hanaCre = document.createElement("div")
//     hanaWrapper.append(hanaCre)
//     hanaCre.classList.add("hanaThree")
//     hanaCre.style.top = (Math.random() * 30 + 34) + "vh"
//     hanaCre.style.right = (Math.random() * 10) + "vw"
// }
// repeat(50, hanaOnePositionFour)
// repeat(39, hanaTwoPositionFour)
// repeat(5, hanaThreePositionFour)


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
    hanaOne.forEach(function (e, i) {

        fall(e, i, 10)
        // if(Math.random() < 0.01 || e.style.transform != ''){
        // fall(e, i, 0, 60)
        // }


    })
    hanaTwo.forEach(function (e, i) {


        // if(Math.random() < 0.01 || e.style.transform != ''){
        fall(e, i, 20, 80)
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
