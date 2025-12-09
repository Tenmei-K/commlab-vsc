let bowl = document.querySelector(".bowl")

bowl.style.cursor = "pointer"
bowl.addEventListener("mouseover", function () {
    bowl.style.scale = 1.02
})
bowl.addEventListener("mouseout", function () {
    bowl.style.scale = 1
})
bowl.addEventListener("click", function () {
    history.go(-1)
})