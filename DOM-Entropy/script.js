let wrapper = document.querySelector("#wrapper")
// document.querySelectorAll().forEach()

wrapper.onclick = addManyNum

function addNum() {
    // () after the function means calling the function now

    if (wrapper.classList.contains("clicked") == true) return;
    if (Math.random() < 0.2) return;

    let num = document.createElement("p");
    let randomDigit = Math.random() * 2;

    num.innerText = Math.floor(randomDigit)

    let rTop = Math.random() * 100
    let rLeft = Math.random() * 100
    let rRotate = Math.random() * 360
    let rSize = Math.random() * 20 + 20
    num.style.top = rTop + "vh"
    num.style.left = rLeft + "vw"
    num.style.rotate = rRotate + "deg"
    num.style.fontSize = rSize + "px"
    num.onclick = toggleClass

    wrapper.append(num)

}

function addNumber() {
    // () after the function means calling the function now

    if (wrapper.classList.contains("clicked") == false) return;
    if (Math.random() < 0.2) return;

    let number = document.createElement("p");
    let randomDigit = Math.random() * 2;

    number.innerText = Math.floor(randomDigit)
    number.style.color = "rgb(57,197,187)"

    let rTop = Math.random() * 100
    let rLeft = Math.random() * 100
    let rRotate = Math.random() * 360
    let rSize = Math.random() * 20 + 15
    number.style.top = rTop + "vh"
    number.style.left = rLeft + "vw"
    number.style.rotate = rRotate + "deg"
    number.style.fontSize = rSize + "px"
    number.classList.add = "clicked"

    wrapper.append(number)

}

function addManyNum() {

    addNum()
    addNum()
    addNum()
    addNum()
    addNum()
    addNum()
    addNum()
    addNum()
    addNum()
    addNum()
    addNum()
    addNum()
    addNum()
    addNum()
    addNum()
    addNum()
    addNum()
    addNum()
    addNum()
    addNum()
    addNum()

    addNumber()
    addNumber()
    addNumber()
    addNumber()
    addNumber()
    addNumber()
    addNumber()
    addNumber()
    addNumber()
    addNumber()
    addNumber()
    addNumber()
    addNumber()
    addNumber()
    addNumber()
    addNumber()
    addNumber()
    addNumber()
    addNumber()
    addNumber()
    addNumber()
}



function toggleClass() {
    document.querySelector("p").classList.toggle("click")
    document.querySelector("p").classList.add("clickA")
    document.querySelector("p").style.fontWeight = 600
    console.log("clicked")
    // color = "rgb(57,197,187)"
    wrapper.querySelector(".clickA").onclick = addClass
}


function addClass() {
    console.log("lllsl")
    wrapper.classList.add("clicked")
}

