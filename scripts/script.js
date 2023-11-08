// JavaScript Document/
console.log("Howdy!");

var gifImage = document.createElement('img'); // Deze code creëert een nieuw img
gifImage.src = './images/draak.gif'; // Vervang dit naar het pad van mijn GIF-bestand
gifImage.alt = 'GIF';
gifImage.width = 600; // De gewenste breedte van mijn gif
gifImage.height = 350; // De gewenste hoogte van mijn gif
var imgTwo = document.querySelector('img[src="../images/2002.jpg"]') // zoekt naar een img-element in het document met een src-attribuut dat overeenkomt met "../images/2002.jpg". 

var imageList = document.querySelector('ul'); // Hier selecteren we de <ul> rechtstreeks
var images = imageList.querySelectorAll('li > img');

// Voeg een eventlistener toe aan de lijst
imageList.addEventListener('click', function (event) {
    var targetImage = event.target;

    
    // Met hulp van Quinten - helpstudent
    if (targetImage.tagName === 'IMG') {
        // Voer de flip-animatie uit voor de specifieke geklikte afbeelding
        var currentRotation = 0;
        var interval = 10; // tijd tussen rotatie-updates in milliseconden
        var targetRotation = 360;
        
        var rotateImage = function () {
            if (currentRotation < targetRotation) {
                currentRotation += 5; // pas de rotatiehoek aan
                targetImage.style.transform = 'rotateY(' + currentRotation + 'deg)';
                setTimeout(rotateImage, interval);
            }
        };

        rotateImage();
    }
});


var firstCard = document.querySelector('#imgOne');
var secondCard = document.querySelector('#imgTwo');
var thirdCard = document.querySelector('#imgThree');
var fourthCard = document.querySelector('#imgFourth');
var fifthCard = document.querySelector('#imgFifth');
var sixthCard = document.querySelector('#imgSix');


var listItemOne = document.querySelector('.listItemOne')
var listItemTwo = document.querySelector('.listItemTwo')
var listItemThree = document.querySelector('.listItemThree')
var listItemFour = document.querySelector('.listItemFour')
var listItemFifth = document.querySelector('.listItemFifth')
var listItemSixth = document.querySelector('.listItemSix')


var firstBase = document.querySelector('.base');
var secondBase = document.querySelector('.base2');
var thirdBase = document.querySelector('.base3');
var fourthBase = document.querySelector('.base4');
var fifthBase = document.querySelector('.base5');
var sixthBase = document.querySelector('.base6');


var audio = new Audio("./audio/click.mp3")
var audio1 = new Audio("./audio/roar.mp3")


// Quinten help code //
function removeAll() {
    listItemOne.style.color = "black";
    listItemTwo.style.color = "black";
    listItemThree.style.color = "black";
    listItemFour.style.color = "black";
    listItemFifth.style.color = "black";
    listItemSixth.style.color = "black";
    firstBase.classList.add("hidden");
    secondBase.classList.add("hidden");
    thirdBase.classList.add("hidden");
    fourthBase.classList.add("hidden");
    fifthBase.classList.add("hidden");
    sixthBase.classList.add("hidden");
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
        audio1.play();
        document.body.appendChild(gifImage);
        // Verwijder gifImage na nog eens 5 seconden
        setTimeout(function () {
            document.body.removeChild(gifImage);
        }, 17000); // Na 5 seconden wordt gifImage verwijderd
    }, 5000); // Na 5 seconden wordt gifImage toegevoegd
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

function sixthCardShow() {
    removeAll();
    audio.play()
    fifthBase.classList.add("hidden");
    sixthBase.classList.remove("hidden")
    listItemSixth.style.color = "red";
}
sixthCard.addEventListener("click", sixthCardShow);