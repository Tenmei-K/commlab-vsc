let myName = "Tenmei";
let temperature = 2500

let headline = document.querySelector("h1")
// let greetchange = document.querySelector("p")
let buttonchange= document.querySelector(".restart")

// document.querySelector("h1").innerText = "Get a better one";

// below is a function call: 
// alert("Hi "+myName+"! It's "+temperature+" degrees outside.");

temperature = -273

// alert("Now it's "+temperature+" degrees.")

// console.log("地獄に落ちろベビー！今日の気温は"+temperature+"度です")
console.log(temperature)

function doManyThing(){
    headline.innerText="HEADLINE"
    // !!! query only selects the first tag that matches
    buttonchange.innerText="restart used"
    console.log("button was clicked");
    alert("Hi "+myName+"! It's "+temperature+" degrees outside.");
}

function greet(greeting){
    headline.innerText = "Get a better one";
    // greetchange.innerText = "OffENSIVE GreeTingS"
    console.log("received "+greeting);
    alert("Hi "+myName+"! It's "+temperature+" degrees outside.");
}

let myText=document.querySelector(".myText")

function changeText(){
    console.log("click the button")
    // myText.innerText="LALALAN"
    myText.innerHTML="click <a href='#'>here</a>";
    // all - turn into capital letters
    headline.style.textDecoration="underline";
    myText.style.color="white"
    myText.style.backgroundColor="black"
}