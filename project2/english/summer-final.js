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


let doorbell = document.createElement("audio")
doorbell.src = "sounds/doorbell.mp3"

let bubbleAudio = document.createElement("audio")
bubbleAudio.src = "sounds/bubble.mp3"
bubbleAudio.loop = false

let doorOpenAudio = document.createElement("audio")
doorOpenAudio.src = "sounds/doorOpen.mp3"
doorOpenAudio.loop = false

let microphoneAudio = document.createElement("audio")
microphoneAudio.src = "sounds/microphonePlugIn.mp3"
microphoneAudio.loop = false


let clientHeight = document.body.clientHeight
let clientWidth = document.body.clientWidth


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

let doorButtonOne = document.querySelector("#doorButtonOne")
let doorButtonTwo = document.querySelector("#doorButtonTwo")
let doorButtonThree = document.querySelector("#doorButtonThree")


doorbell.play()
doorbell.loop = false

doorButtonOne.style.cursor = "pointer"
doorButtonOne.addEventListener("mouseover", function () {
    doorButtonOne.style.scale = 1.2
    doorButtonOne.style.opacity = 1
})
doorButtonOne.addEventListener("mouseout", function () {
    doorButtonOne.style.scale = 1
    doorButtonOne.style.opacity = .7
})

doorButtonOne.addEventListener("click", function () {
    microphoneAudio.play()
    doorButtonTwo.style.opacity = 1
    document.querySelector("#BMonitorFirst").remove()
    document.querySelector("#lineZero").style.opacity = 0
    document.querySelector("#lineOne").style.opacity = 1

    document.querySelector("#mS1").style.opacity = 1

    // bubbles
    bubbleOne.style.cursor = "pointer"
    bubbleOne.addEventListener("mouseover", function () {
        bubbleOne.style.opacity = 1
        bubbleOne.style.scale = 1
    })
    bubbleOne.addEventListener("mouseout", function () {
        bubbleOne.style.opacity = .6
        bubbleOne.style.scale = .9
    })
    bubbleOne.addEventListener("click", function () {
        bubbleAudio.play()
        document.querySelector("#lineOne").style.opacity = 0
        document.querySelector("#lineTwo").style.opacity = 1
        document.querySelector("#mS1").style.opacity = 0
        document.querySelector("#mO1").style.opacity = 1

        document.querySelector("#bubbleShadowOne").style.opacity = .25
        setTimeout(function () {
            document.querySelector("#bubbleShadowOne").remove()
        }, 160)

        bubbleTwo.style.cursor = "pointer"
        bubbleTwo.addEventListener("mouseover", function () {
            bubbleTwo.style.opacity = 1
            bubbleTwo.style.scale = 1
        })
        bubbleTwo.addEventListener("mouseout", function () {
            bubbleTwo.style.opacity = .6
            bubbleTwo.style.scale = .9
        })
        bubbleTwo.addEventListener("click", function () {
            bubbleAudio.play()
            document.querySelector("#lineTwo").style.opacity = 0
            document.querySelector("#lineThree").style.opacity = 1
            document.querySelector("#mO1").style.opacity = 0
            document.querySelector("#mS1").style.opacity = 1
            document.querySelector("#mS1P").style.opacity = 1 / 10
            document.querySelector("#backgroundAutumn").style.opacity = 1 - 1 / 10

            document.querySelector("#bubbleShadowTwo").style.opacity = .25
            setTimeout(function () {
                document.querySelector("#bubbleShadowTwo").remove()
            }, 160)


            bubbleThree.style.cursor = "pointer"
            bubbleThree.addEventListener("mouseover", function () {
                bubbleThree.style.opacity = 1
                bubbleThree.style.scale = 1
            })
            bubbleThree.addEventListener("mouseout", function () {
                bubbleThree.style.opacity = .6
                bubbleThree.style.scale = .9
            })
            bubbleThree.addEventListener("click", function () {

                // 倒影处理
                document.querySelector("#GWrapper").style.maxWidth = clientWidth
                document.querySelector("#GWrapper").style.minWidth = clientWidth
                document.addEventListener("mousemove", function (eventInfo) {
                    if (eventInfo.pageY > 0.15 * clientHeight && eventInfo.pageY < 0.85 * clientHeight) {

                        document.querySelector("#Goverflow").style.opacity = 1
                        document.querySelector("#GWrapper").style.opacity = 1
                        document.querySelector("#Goverflow").style.left = eventInfo.pageX + "px"

                        document.querySelector("#GWrapper").style.left = - eventInfo.pageX + "px"

                        document.querySelector("#BMonitorTwo").style.opacity = 1
                    } else {
                        document.querySelector("#Goverflow").style.opacity = 0
                    }
                })




                bubbleAudio.play()
                document.querySelector("#lineThree").style.opacity = 0
                document.querySelector("#lineFour").style.opacity = 1
                document.querySelector("#mS1P").style.opacity = 2 / 10
                document.querySelector("#backgroundAutumn").style.opacity = 1 - 2 / 10
                document.querySelector("#backgroundGray").style.opacity = .4

                document.querySelector("#bubbleShadowThree").style.opacity = .25
                setTimeout(function () {
                    document.querySelector("#bubbleShadowThree").remove()
                }, 160)


                bubbleFour.style.cursor = "pointer"
                bubbleFour.addEventListener("mouseover", function () {
                    bubbleFour.style.opacity = 1
                    bubbleFour.style.scale = 1
                })
                bubbleFour.addEventListener("mouseout", function () {
                    bubbleFour.style.opacity = .6
                    bubbleFour.style.scale = .9
                })
                bubbleFour.addEventListener("click", function () {
                    bubbleAudio.play()
                    document.querySelector("#lineFour").style.opacity = 0
                    document.querySelector("#lineFive").style.opacity = 1
                    document.querySelector("#mS1P").style.opacity = 3 / 10
                    document.querySelector("#backgroundAutumn").style.opacity = 1 - 3 / 10

                    document.querySelector("#bubbleShadowFour").style.opacity = .25
                    setTimeout(function () {
                        document.querySelector("#bubbleShadowFour").remove()
                    }, 160)

                    bubbleFive.style.cursor = "pointer"
                    bubbleFive.addEventListener("mouseover", function () {
                        bubbleFive.style.opacity = 1
                        bubbleFive.style.scale = 1
                    })
                    bubbleFive.addEventListener("mouseout", function () {
                        bubbleFive.style.opacity = .6
                        bubbleFive.style.scale = .9
                    })
                    bubbleFive.addEventListener("click", function () {



                        document.querySelector("#Goverflow").style.opacity = 0
                        document.querySelector("#BMonitorTwo").remove()



                        bubbleAudio.play()
                        document.querySelector("#lineFive").style.opacity = 0
                        document.querySelector("#lineSix").style.opacity = 1
                        document.querySelector("#mS1").style.opacity = 0
                        document.querySelector("#mS1P").style.opacity = 0
                        document.querySelector("#mS2").style.opacity = 1
                        document.querySelector("#mS2P").style.opacity = 4 / 10
                        document.querySelector("#backgroundAutumn").style.opacity = 1 - 4 / 10
                        document.querySelector("#backgroundGray").style.opacity = 0

                        document.querySelector("#bubbleShadowFive").style.opacity = .25
                        setTimeout(function () {
                            document.querySelector("#bubbleShadowFive").remove()
                        }, 160)

                        bubbleSix.style.cursor = "pointer"
                        bubbleSix.addEventListener("mouseover", function () {
                            bubbleSix.style.opacity = 1
                            bubbleSix.style.scale = 1
                        })
                        bubbleSix.addEventListener("mouseout", function () {
                            bubbleSix.style.opacity = .6
                            bubbleSix.style.scale = .9
                        })
                        bubbleSix.addEventListener("click", function () {
                            bubbleAudio.play()
                            document.querySelector("#lineSix").style.opacity = 0
                            document.querySelector("#lineSeven").style.opacity = 1
                            document.querySelector("#mS2").style.opacity = 0
                            document.querySelector("#mS2P").style.opacity = 0
                            document.querySelector("#mO2").style.opacity = 1
                            document.querySelector("#mO2P").style.opacity = 5 / 10
                            document.querySelector("#backgroundAutumn").style.opacity = 1 - 5 / 10

                            document.querySelector("#bubbleShadowSix").style.opacity = .25
                            setTimeout(function () {
                                document.querySelector("#bubbleShadowSix").remove()
                            }, 160)

                            bubbleSeven.style.cursor = "pointer"
                            bubbleSeven.addEventListener("mouseover", function () {
                                bubbleSeven.style.opacity = 1
                                bubbleSeven.style.scale = 1
                            })
                            bubbleSeven.addEventListener("mouseout", function () {
                                bubbleSeven.style.opacity = .6
                                bubbleSeven.style.scale = .9
                            })
                            bubbleSeven.addEventListener("click", function () {


                                document.addEventListener("mousemove", function (eventInfo) {
                                    if (eventInfo.pageY > 0.15 * clientHeight && eventInfo.pageY < 0.85 * clientHeight) {

                                        document.querySelector("#Goverflow").style.opacity = 1
                                        document.querySelector("#GWrapper").style.opacity = 1
                                        document.querySelector("#Goverflow").style.left = eventInfo.pageX + "px"

                                        document.querySelector("#GWrapper").style.left = - eventInfo.pageX + "px"

                                        document.querySelector("#BMonitorThree").style.opacity = 1
                                    } else {
                                        document.querySelector("#Goverflow").style.opacity = 0
                                    }
                                })


                                bubbleAudio.play()
                                document.querySelector("#lineSeven").style.opacity = 0
                                document.querySelector("#lineEight").style.opacity = 1
                                document.querySelector("#mO2").style.opacity = 0
                                document.querySelector("#mO2P").style.opacity = 0
                                document.querySelector("#mS2").style.opacity = 1
                                document.querySelector("#mS2P").style.opacity = 6 / 10
                                document.querySelector("#backgroundAutumn").style.opacity = 1 - 6 / 10
                                document.querySelector("#backgroundGray").style.opacity = .4

                                document.querySelector("#bubbleShadowSeven").style.opacity = .25
                                setTimeout(function () {
                                    document.querySelector("#bubbleShadowSeven").remove()
                                }, 160)

                                bubbleEight.style.cursor = "pointer"
                                bubbleEight.addEventListener("mouseover", function () {
                                    bubbleEight.style.opacity = 1
                                    bubbleEight.style.scale = 1
                                })
                                bubbleEight.addEventListener("mouseout", function () {
                                    bubbleEight.style.opacity = .6
                                    bubbleEight.style.scale = .9
                                })
                                bubbleEight.addEventListener("click", function () {
                                    bubbleAudio.play()
                                    document.querySelector("#lineEight").style.opacity = 0
                                    document.querySelector("#lineNine").style.opacity = 1
                                    document.querySelector("#mS2").style.opacity = 0
                                    document.querySelector("#mS2P").style.opacity = 0
                                    document.querySelector("#mS1").style.opacity = 1
                                    document.querySelector("#mS1P").style.opacity = 7 / 10
                                    document.querySelector("#backgroundAutumn").style.opacity = 1 - 7 / 10

                                    document.querySelector("#bubbleShadowEight").style.opacity = .25
                                    setTimeout(function () {
                                        document.querySelector("#bubbleShadowEight").remove()
                                    }, 160)

                                    bubbleNine.style.cursor = "pointer"
                                    bubbleNine.addEventListener("mouseover", function () {
                                        bubbleNine.style.opacity = 1
                                        bubbleNine.style.scale = 1
                                    })
                                    bubbleNine.addEventListener("mouseout", function () {
                                        bubbleNine.style.opacity = .6
                                        bubbleNine.style.scale = .9
                                    })
                                    bubbleNine.addEventListener("click", function () {



                                        document.querySelector("#Goverflow").style.opacity = 0
                                        document.querySelector("#BMonitorThree").remove()



                                        bubbleAudio.play()
                                        document.querySelector("#lineNine").style.opacity = 0
                                        document.querySelector("#lineTen").style.opacity = 1
                                        document.querySelector("#mS1").style.opacity = 0
                                        document.querySelector("#mS1P").style.opacity = 0
                                        document.querySelector("#mS2").style.opacity = 1
                                        document.querySelector("#mS2P").style.opacity = 8 / 10
                                        document.querySelector("#backgroundAutumn").style.opacity = 1 - 8 / 10
                                        document.querySelector("#backgroundGray").style.opacity = 0

                                        document.querySelector("#bubbleShadowNine").style.opacity = .25
                                        setTimeout(function () {
                                            document.querySelector("#bubbleShadowNine").remove()
                                        }, 160)

                                        bubbleTen.style.cursor = "pointer"
                                        bubbleTen.addEventListener("mouseover", function () {
                                            bubbleTen.style.opacity = 1
                                            bubbleTen.style.scale = 1
                                        })
                                        bubbleTen.addEventListener("mouseout", function () {
                                            bubbleTen.style.opacity = .6
                                            bubbleTen.style.scale = .9
                                        })
                                        bubbleTen.addEventListener("click", function () {
                                            bubbleAudio.play()
                                            document.querySelector("#lineTen").style.opacity = 0
                                            document.querySelector("#lineEleven").style.opacity = 1
                                            document.querySelector("#mS2").style.opacity = 0
                                            document.querySelector("#mS2P").style.opacity = 0
                                            document.querySelector("#mO1").style.opacity = 1
                                            document.querySelector("#mO1P").style.opacity = 9 / 10
                                            document.querySelector("#backgroundAutumn").style.opacity = 1 - 9 / 10

                                            document.querySelector("#bubbleShadowTen").style.opacity = .25
                                            setTimeout(function () {
                                                document.querySelector("#bubbleShadowTen").remove()
                                            }, 160)

                                            bubbleEleven.style.cursor = "pointer"
                                            bubbleEleven.addEventListener("mouseover", function () {
                                                bubbleEleven.style.opacity = 1
                                                bubbleEleven.style.scale = 1
                                            })
                                            bubbleEleven.addEventListener("mouseout", function () {
                                                bubbleEleven.style.opacity = .6
                                                bubbleEleven.style.scale = .9
                                            })
                                            bubbleEleven.addEventListener("click", function () {
                                                bubbleAudio.play()
                                                doorOpenAudio.play()
                                                document.querySelector("#lineEleven").style.opacity = 0
                                                document.querySelector("#lineTwelve").style.opacity = 1
                                                document.querySelector("#mO1").style.opacity = 0
                                                document.querySelector("#mO1P").style.opacity = 0
                                                document.querySelector("#BMonitorLast").style.opacity = 1
                                                document.querySelector("#backgroundAutumn").style.opacity = 0

                                                document.querySelector("#bubbleShadowEleven").style.opacity = .25
                                                setTimeout(function () {
                                                    document.querySelector("#bubbleShadowEleven").remove()
                                                }, 160)


                                                doorButtonTwo.remove()

                                                doorButtonThree.style.opacity = 1
                                                doorButtonThree.style.cursor = "pointer"
                                                doorButtonThree.addEventListener("mouseover", function () {
                                                    doorButtonThree.style.scale = 1.2
                                                })
                                                doorButtonThree.addEventListener("mouseout", function () {
                                                    doorButtonThree.style.scale = 1
                                                })
                                                doorButtonThree.addEventListener("click", function () {
                                                    document.location = "index-final.html"
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

    doorButtonOne.remove()
})