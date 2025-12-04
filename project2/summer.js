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

let bubbleOne = document.querySelector("#bubbleOne")
let bubbleTwo = document.querySelector("#bubbleTwo")
let bubbleThree = document.querySelector("#bubbleThree")
let bubbleFour = document.querySelector("#bubbleFour")
let bubbleFive = document.querySelector("#bubbleFive")
let bubbleSix = document.querySelector("#bubbleSix")
let bubbleSeven = document.querySelector("#bubbleSeven")
let bubbleEight = document.querySelector("#bubbleEight")
let bubbleNine = document.querySelector("#bubbleNine")
let bubbleTen = document.querySelector("#bubbleTen")
let bubbleEleven = document.querySelector("#bubbleEleven")


bubbleOne.style.cursor = "pointer"
bubbleOne.addEventListener("click", function () {
    document.querySelector("#lineOne").style.opacity = 0
    document.querySelector("#lineTwo").style.opacity = 1

    bubbleTwo.style.cursor = "pointer"
    bubbleTwo.addEventListener("click", function () {
        document.querySelector("#lineTwo").style.opacity = 0
        document.querySelector("#lineThree").style.opacity = 1
        document.querySelector("#monitorAutumn").style.opacity = 1 / 10

        bubbleThree.style.cursor = "pointer"
        bubbleThree.addEventListener("click", function () {
            document.querySelector("#lineThree").style.opacity = 0
            document.querySelector("#lineFour").style.opacity = 1
            document.querySelector("#monitorAutumn").style.opacity = 2 / 10

            bubbleFour.style.cursor = "pointer"
            bubbleFour.addEventListener("click", function () {
                document.querySelector("#lineFour").style.opacity = 0
                document.querySelector("#lineFive").style.opacity = 1
                document.querySelector("#monitorAutumn").style.opacity = 3 / 10

                bubbleFive.style.cursor = "pointer"
                bubbleFive.addEventListener("click", function () {
                    document.querySelector("#lineFive").style.opacity = 0
                    document.querySelector("#lineSix").style.opacity = 1
                    document.querySelector("#monitorAutumn").style.opacity = 4 / 10

                    bubbleSix.style.cursor = "pointer"
                    bubbleSix.addEventListener("click", function () {
                        document.querySelector("#lineSix").style.opacity = 0
                        document.querySelector("#lineSeven").style.opacity = 1
                        document.querySelector("#monitorAutumn").style.opacity = 5 / 10

                        bubbleSeven.style.cursor = "pointer"
                        bubbleSeven.addEventListener("click", function () {
                            document.querySelector("#lineSeven").style.opacity = 0
                            document.querySelector("#lineEight").style.opacity = 1
                            document.querySelector("#monitorAutumn").style.opacity = 6 / 10

                            bubbleEight.style.cursor = "pointer"
                            bubbleEight.addEventListener("click", function () {
                                document.querySelector("#lineEight").style.opacity = 0
                                document.querySelector("#lineNine").style.opacity = 1
                                document.querySelector("#monitorAutumn").style.opacity = 7 / 10

                                bubbleNine.style.cursor = "pointer"
                                bubbleNine.addEventListener("click", function () {
                                    document.querySelector("#lineNine").style.opacity = 0
                                    document.querySelector("#lineTen").style.opacity = 1
                                    document.querySelector("#monitorAutumn").style.opacity = 8 / 10

                                    bubbleTen.style.cursor = "pointer"
                                    bubbleTen.addEventListener("click", function () {
                                        document.querySelector("#lineTen").style.opacity = 0
                                        document.querySelector("#lineEleven").style.opacity = 1
                                        document.querySelector("#monitorAutumn").style.opacity = 9 / 10

                                        bubbleEleven.style.cursor = "pointer"
                                        bubbleEleven.addEventListener("click", function () {
                                            document.querySelector("#lineEleven").style.opacity = 0
                                            document.querySelector("#lineTwelve").style.opacity = 1
                                            document.querySelector("#monitorAutumn").style.opacity = 1

                                            document.querySelector("#doorButton").style.opacity = 1
                                            document.querySelector("#doorButton").style.cursor = "pointer"
                                            document.querySelector("#doorButton").addEventListener("click", function () {
                                                document.location = "pre-autumn.html"
                                            })

                                            bubbleEleven.remove()
                                        })

                                        bubbleTen.remove()
                                    })

                                    bubbleNine.remove()
                                })

                                bubbleEight.remove()
                            })

                            bubbleSeven.remove()
                        })

                        bubbleSix.remove()
                    })

                    bubbleFive.remove()
                })

                bubbleFour.remove()
            })

            bubbleThree.remove()
        })

        bubbleTwo.remove()
    })

    bubbleOne.remove()
})





// if (bubbleTwo.classList.contains("toBeClicked") == true) {
// bubbleTwo.addEventListener("click", function () {
//     bubbleThree.style.cursor = "pointer"
//     bubbleThree.classList.add("toBeClicked")

//     document.querySelector("#lineTwo").style.opacity = 0
//     document.querySelector("#lineThree").style.opacity = 1
//     bubbleTwo.remove()
// })
// }




// window.addEventListener("scroll", function () {
//     percentage = getScrollPercentage() //0-100


//     //background color change
//     if (percentage > 50) {
//         document.querySelector("#backgroundAutumn").style.opacity = (percentage - 40) / 60
//     } else {
//         document.querySelector("#backgroundAutumn").style.opacity = 0
//     }



// })