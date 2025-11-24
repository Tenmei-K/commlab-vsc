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


let hanaWrapper = document.querySelector("#hanaWrapper")
let hanaWrapperBack = document.querySelector("#hanaWrapperBack")


function hanaOnePositionOne() {
    let hanaCre = document.createElement("div")
    hanaWrapper.append(hanaCre)
    hanaCre.classList.add("hanaOne")
    hanaCre.style.top = (Math.random() * 30 + 34) + "vh"
    hanaCre.style.left = (Math.random() * 39 + 20) + "vw"
}
function hanaOnePositionTwo() {
    let hanaCre = document.createElement("div")
    hanaWrapper.append(hanaCre)
    hanaCre.classList.add("hanaTwo")
    hanaCre.style.top = (Math.random() * 30 + 34) + "vh"
    hanaCre.style.left = (Math.random() * 39 + 20) + "vw"
}
function hanaOnePositionThree() {
    let hanaCre = document.createElement("div")
    hanaWrapper.append(hanaCre)
    hanaCre.classList.add("hanaThree")
    hanaCre.style.top = (Math.random() * 30 + 34) + "vh"
    hanaCre.style.left = (Math.random() * 39 + 20) + "vw"
}
repeat(120, hanaOnePositionOne)
repeat(50, hanaOnePositionTwo)
repeat(10, hanaOnePositionThree)

// back
function hanaTwoPositionOne() {
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
function hanaTwoPositionThree() {
    let hanaCre = document.createElement("div")
    hanaWrapperBack.append(hanaCre)
    hanaCre.classList.add("hanaThree")
    hanaCre.style.top = (Math.random() * 47 + 9) + "vh"
    hanaCre.style.left = (Math.random() * 64 + 28) + "vw"
}
repeat(100, hanaTwoPositionOne)
repeat(400, hanaTwoPositionTwo)
repeat(200, hanaTwoPositionThree)


function hanaThreePositionOne() {
    let hanaCre = document.createElement("div")
    hanaWrapper.append(hanaCre)
    hanaCre.classList.add("hanaOne")
    hanaCre.style.top = (Math.random() * 39) + "vh"
    hanaCre.style.right = (Math.random() * 55) + "vw"
}
function hanaThreePositionTwo() {
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
repeat(350, hanaThreePositionOne)
repeat(120, hanaThreePositionTwo)
repeat(20, hanaThreePositionThree)


function hanaFourPositionOne() {
    let hanaCre = document.createElement("div")
    hanaWrapper.append(hanaCre)
    hanaCre.classList.add("hanaOne")
    hanaCre.style.top = (Math.random() * 30 + 34) + "vh"
    hanaCre.style.right = (Math.random() * 10) + "vw"
}
function hanaFourPositionTwo() {
    let hanaCre = document.createElement("div")
    hanaWrapper.append(hanaCre)
    hanaCre.classList.add("hanaTwo")
    hanaCre.style.top = (Math.random() * 30 + 34) + "vh"
    hanaCre.style.right = (Math.random() * 10) + "vw"
}
function hanaFourPositionThree() {
    let hanaCre = document.createElement("div")
    hanaWrapper.append(hanaCre)
    hanaCre.classList.add("hanaThree")
    hanaCre.style.top = (Math.random() * 30 + 34) + "vh"
    hanaCre.style.right = (Math.random() * 10) + "vw"
}
repeat(50, hanaFourPositionOne)
repeat(39, hanaFourPositionTwo)
repeat(5, hanaFourPositionThree)


let hanaOne = document.querySelectorAll(".hanaOne")
let hanaTwo = document.querySelectorAll(".hanaTwo")
let hanaThree = document.querySelectorAll(".hanaThree")




function hanaMove(e) {
    e.style.transform = "translateY(-2000px)"
    e.style.transform = "translateX(-10px)"
    e.style.transform = "translateX(-10px)"
    e.style.transition = "transform 5s ease-in-out"
    console.log("function working")
}

hanaOne.forEach(function (e) {
    e.classList.add("hanaSpring")
    hanaMove(e)
    setInterval(500)
})
hanaTwo.forEach(function (e) {
    e.classList.add("hanaSpring")
})
hanaThree.forEach(function (e) {
    e.classList.add("hanaSpring")
})


// function hanaMove() {
//     i = hanaOne.length
//     hanaOne[i].style.transform = "translateY(-2000px)"
//     hanaOne[i].style.transform = "translateX(-10px)"
//     hanaOne[i].style.transform = "translateX(-10px)"
//     hanaOne[i].style.transition = "transform 5s ease-in-out"
//     i -= 1
//     if (i > 0) {
//         setTimeout(hanaMove, 500)
//     }
//     console.log("hanaMove working")
// }

window.addEventListener("scroll", function () {
    hanaOne.forEach(function (e) {
        hanaMove(e)
    })
})


// window.addEventListener("scroll", function () {
//     // springAudio.play()

//     let percentage = getScrollPercentage()
//     console.log(percentage)

//     // console.log(hanaOne.length)
//     // for (let i = 0; i < hanaOne.length; i++) {
//     //     // console.log(hanaOne[i])
//     //     hanaOne[i].style.transform = "translate (10px, 2000px)"
//     //     hanaOne[i].style.transition = "30s"
//     //     console.log("for loop working")
//     // }


// })