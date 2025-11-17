let s = document.querySelectorAll("span");
console.log(s)

// function Escape(e) {
//     let r1 = Math.random() * 100
//     let r2 = Math.random() * 100
//     // e.target.style.transform = "translate("+ r1 +"px, "+ r2 +"px)"
//     // e.target.style.transition = "all .5s linear"
//     console.log("mouse over")
//     console.log(e)
//     // e.target.style.top = r1 +"px"
//     // e.target.style.left = r2 +"px"
//     e.movementX = r1 + "px"
//     e.movementY = r2 + "px"
// }
// // function Back(e) {
// //     e.target.style.transform = "translate(0px, 0px)"
// //     e.target.style.transition = "all 5s linear"
// //     console.log("mouse out")
// // }


function Escape(e) {
    console.log(e);
    let topString = e.target.style.top
    let top = 0
    if (topString != "") {
        top = Number(topString.substring(0, topString.length - 2))
    }
    // 删去topString的最后两个字
    console.log(top)

    let randomX = Math.random() * 100 - 50
    let randomY = top + Math.random() * -100
    console.log(randomY)

    e.target.style.left = randomX + "px";
    e.target.style.top = randomY + "px";

}


// 下面是自己写的，大失败
// function Escape(e) {
//     console.log(e);

//     let randomX = Math.random() * 100 - 50
//     let randomY = Math.random() * -100
//     console.log(randomY)

//     e.target.style.left = randomX + "px";
//     e.target.style.top = e.target.style.top + randomY + "px";

// }


s.forEach(function (e) {
    e.addEventListener("mouseover", Escape)
    // e.addEventListener("mouseout", Back)
})