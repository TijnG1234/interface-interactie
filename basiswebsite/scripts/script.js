// JavaScript Document
console.log("Howdy!");

var firstCard = document.querySelector('#imgOne');
var secondCard = document.querySelector('#imgTwo');
var thirdCard = document.querySelector('#imgThree');
var fourthCard = document.querySelector('#imgFourth');
var fifthCard = document.querySelector('#imgFifth');



var listItemOne = document.querySelector('.listItemOne')
var listItemTwo = document.querySelector('.listItemTwo')
var listItemThree = document.querySelector('.listItemThree')
var listItemFour = document.querySelector('.listItemFour')
var listItemFifth = document.querySelector('.listItemFifth')






var firstBase = document.querySelector('.base');
var secondBase = document.querySelector('.base2');
var thirdBase = document.querySelector('.base3');
var fourthBase = document.querySelector('.base4');
var fifthBase = document.querySelector('.base5');



var audio = new Audio("click.mp3")
var audio1 = new Audio("roar.mp3")


function removeAll() {
    listItemOne.style.color = "black";
    listItemTwo.style.color = "black";
    listItemThree.style.color = "black";
    listItemFour.style.color = "black";
    listItemFifth.style.color = "black";
    firstBase.classList.add("hidden");
    secondBase.classList.add("hidden");
    thirdBase.classList.add("hidden");
    fourthBase.classList.add("hidden");
    fifthBase.classList.add("hidden")
}

function firstCardShow() {
    removeAll();
    audio.play()
    firstBase.classList.remove("hidden");
    secondBase.classList.add("hidden");
    listItemOne.style.color = "red";

}
firstCard.addEventListener("click", firstCardShow);

function secondCardShow() {
    removeAll();
    audio.play()
    firstBase.classList.add("hidden");
    secondBase.classList.remove("hidden")
    listItemTwo.style.color = "red";
    setTimeout(function () {
        removeAll();
        firstBase.classList.add("hidden");
        secondBase.classList.remove("hidden")
        listItemTwo.style.color = "red";
        audio1.play()
    }, 5000) // 5 seconden = Na 5000 milliseconden gaat website terug naar staat die wordt aangegeven tussen de {} bij "setTimeout" (De tijd is gebaseerd op hoelang de audio duurt)
}
secondCard.addEventListener("click", secondCardShow);

function thirdCardShow() {
    removeAll();
    audio.play()
    secondBase.classList.add("hidden");
    thirdBase.classList.remove("hidden")
    listItemThree.style.color = "red";
}
thirdCard.addEventListener("click", thirdCardShow);

function fourthCardShow() {
    removeAll();
    audio.play()
    thirdBase.classList.add("hidden");
    fourthBase.classList.remove("hidden")
    listItemFour.style.color = "red";
}
fourthCard.addEventListener("click", fourthCardShow);

function fifthCardShow() {
    removeAll();
    audio.play()
    fourthBase.classList.add("hidden");
    fifthBase.classList.remove("hidden")
    listItemFifth.style.color = "red";
}
fifthCard.addEventListener("click", fifthCardShow);