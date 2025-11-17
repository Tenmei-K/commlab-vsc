let s = document.querySelectorAll("span");
console.log(s)

function Escape(e) {
    let r1 = Math.random() * 100 - 50
    let r2 = Math.random() * 100 - 50
    // e.target.style.transform = "translate("+ r1 +"px, "+ r2 +"px)"
    // e.target.style.transition = "all .5s linear"
    console.log("mouse over")
    console.log(e.target.value)
    e.target.style.top = r1 +"px"
    e.target.style.left = r2 +"px"
}
// function Back(e) {
//     e.target.style.transform = "translate(0px, 0px)"
//     e.target.style.transition = "all 5s linear"
//     console.log("mouse out")
// }
s.forEach(function(e) {
    e.addEventListener("mouseover", Escape)
    // e.addEventListener("mouseout", Back)
})