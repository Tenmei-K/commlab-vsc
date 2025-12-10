let biteaudio = document.createElement("audio")
biteaudio.src = "sounds/pear.mp3"
biteaudio.loop = false

let hintaudio = document.createElement("audio")
hintaudio.src = "sounds/木头咚.wav"
hintaudio.loop = false

let forkOne = document.querySelector("#forkOne")
let forkTwo = document.querySelector("#forkTwo")
let fork = document.querySelectorAll(".fork")


let background = document.querySelector("#backgroundWinter")
background.style.opacity = 0.3

biteaudio.play()


let hint = document.createElement("p")
hint.innerText = "*you didn't manage to answer her. also, you automatically assume that she was referring to her talent, with confidence out of nowhere*"
hint.classList.add("hint")
let hint1 = document.createElement("p")
hint1.innerText = "*you didn't manage to answer her. also, you automatically assume that she was referring to her talent, with confidence out of nowhere*"
hint1.classList.add("hint")

document.body.append(hint)
document.body.append(hint1)


setTimeout(function () {
    hint.remove()
    hint1.remove()
}, 3500)


fork.forEach(function (e) {
    e.style.cursor = "pointer"
    e.addEventListener("mouseover", function () {
        e.style.scale = 1.05
    })
    e.addEventListener("mouseout", function () {
        e.style.scale = 1
    })
})

forkOne.addEventListener("click", function () {
    document.location = "winter5.html"
})
forkTwo.addEventListener("click", function () {
    hintaudio.play()
    let hint = document.createElement("p")
    hint.innerText = "*she's still waiting for you to swallow the pear in your mouth and say something*"
    hint.classList.add("hint")
    let hint1 = document.createElement("p")
    hint1.innerText = "*she's still waiting for you to swallow the pear in your mouth and say something*"
    hint1.classList.add("hint")

    document.body.append(hint)
    document.body.append(hint1)


    setTimeout(function () {
        hint.remove()
        hint1.remove()
    }, 2000)

})
