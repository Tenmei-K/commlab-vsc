let myText = document.querySelector("#myText");
let output = document.querySelector("#output");



// challenge 1: 
// as we type into the input box, 
// the text should appear inside the "ouput" p tag:
myText.addEventListener("input", function (e) {
    output.innerText = e.target.value
})



// function to spin an element 
let angle = 0
function spin(element) {
    angle += 360
    element.style.transition = "all 1s linear"
    element.style.transform = "rotate("+angle+"deg)"
}
myText.addEventListener("input", function (e) {
    if (e.target.value.includes("spin")) {
        spin(e.target)
        output.innerText = ""
    }
})



// -------- PART 2
let myButton = document.querySelector("#myButton");

let i = 0
myButton.addEventListener("click", function (e) {
    i += 1
    console.log(i)
    if (i >= 5) {
        // document.body.style.backgroundColor = "black"
        supersize(e.target)
        setTimeout(function () {
            e.target.remove()
            clearInterval(messageInterval)
            messageBoard.innerHTML = ""
        }, 100)
    }
})


let messageBoard = document.querySelector("#messageBoard");


let messageInterval = setInterval(function () {
    let m = 5 - i
    if (i != 0) {
    addMessage("click " + m + " times more")
    }
}, 100)






// function to add text to the div with id "messageboard"
function addMessage(messagetext) {
    let p = document.createElement("p");
    p.innerText = messagetext;
    messageBoard.prepend(p);
}

// function to rapidly increase the size of an element
function supersize(element) {
    element.style.transition = "all .5s linear"
    element.style.transform = "scale(100)"
}

