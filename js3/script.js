
let firstButton = document.querySelector("#firstButton")

function clickedButton() {
    let b = document.createElement("button")
    console.log("debug")
    b.innerText = "Start the engine"

    // 浏览器阅读js时会一并阅读所有，因此直接alert
    // b.onclick = alert('alert')

    // b.forEach(changeInnerText)

    b.onclick = function() {
        changeInnerText(b)
    }
    
    document.body.append(b)
}



function changeInnerText(elm) {
    elm.innerText = "STARTED"
    elm.style.color = "red"
}



// // only takes one element
// function colorize(elm) {
//     elm.style.backgroundColor = "red"
// }


// function clickedButton() {
//     let b = document.querySelector(".box")
//     // colorize(b)
//     console.log("b")
//     let bs = document.querySelectorAll(".box")
//     console.log("bs")
//     // colorize(bs)


//     // call function (colorize) for each element (forEach) in a list (bs)
//     bs.forEach(colorize)
// }