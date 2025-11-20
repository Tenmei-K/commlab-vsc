function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}



let hanaOne = document.querySelectorAll(".hanaOne")
let hanaTwo = document.querySelectorAll(".hanaTwo")
let hanaThree = document.querySelectorAll(".hanaThree")
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
repeat(120,hanaOnePositionOne)
repeat(50,hanaOnePositionTwo)
repeat(10,hanaOnePositionThree)

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
repeat(100,hanaTwoPositionOne)
repeat(400,hanaTwoPositionTwo)
repeat(200,hanaTwoPositionThree)


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
repeat(350,hanaThreePositionOne)
repeat(120,hanaThreePositionTwo)
repeat(20,hanaThreePositionThree)


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
repeat(50,hanaFourPositionOne)
repeat(39,hanaFourPositionTwo)
repeat(5,hanaFourPositionThree)