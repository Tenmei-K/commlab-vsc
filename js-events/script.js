let myButton = document.querySelector("#myButton")
let myInput = document.querySelector("#myInput")
let myOutput = document.querySelector("#myOutput") 


// function buttonClicked() {
//     document.body.style.backgroundColor = "coral"
// }
// myButton.addEventListener(click, buttonClicked)
// 和下面同样效果

myButton.addEventListener("click", function(e) {
    document.body.style.backgroundColor = "coral"
    console.log(e)
    console.log(myButton)
    e.target.remove()
    // 在这个情境下myButton和e.target没有区别
    // ！理解e.target是什么
})


// function inputChanged() {
//     console.log("input changed")
// }
// myInput.addEventListener("input", inputChanged)
// // input triggers every single pixel
// function changeChanged() {
//     console.log("change changed")
// }
// myInput.addEventListener("change", changeChanged)
// // change triggers the moment release hold


// usually eventInfo will be e/event
// the browser is calling the function and passing info into it
// ！注意这里parameter怎么运作
// 并没有人为的输入，但是parameter仍在运作
// 是browser在呼唤这个function，人只在告诉browser这个function需要被呼唤
function changeChanged(eventInfo) {
    console.log(eventInfo)
    console.log("change changed!")
    myOutput.innerText = eventInfo.target.value
}
myInput.addEventListener("change", changeChanged)
