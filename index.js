// BUTTON PRESS

//to samo ale wszystko w srodku
//for (var = 0; i<document.querySelectorAll(".drum").length; i++)
var numberOfButtons = document.querySelectorAll(".drum").length;
for (var i=0; i<numberOfButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    //var audio = new Audio('sounds/tom-1.mp3');
    //audio.play();
    //console.log(this.style.color = "white"); // this triggeruje event

    var buttonInnerHTML = this.innerHTML;

// stad byla przeniesiona funkcja switch i dostac sie do niej mozna teraz ja wywolujac
makeSound(buttonInnerHTML);

buttonAnimation(buttonInnerHTML);

  });
}


// DETECTING KEYBOARD PRESS

document.addEventListener("keydown", function() {
//  console.log(event); // wyswietla info w konsoli
makeSound(event.key);

buttonAnimation(event.key);
});

function makeSound(key) {

  //switch (buttonInnerHTML) { // bylo zanim wpakowalismy do funkcji dodatkowej key
    switch (key) {
    case "w":
    var crash = new Audio("sounds/crash.mp3");
    crash.play();
      break;
    case "a":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
    break;
    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
    break;
    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
    break;
    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
    break;
    case "k":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
    break;
    case "l":
    var tom4 = new Audio("sounds/tom-4.mp3");
    tom4.play();
    break;

    default: console.log(buttonInnerHTML);
  }
}

function buttonAnimation(currentKey) {

var activeButton = document.querySelector("." + currentKey);

activeButton.classList.add("pressed");

setTimeout(function() {
  activeButton.classList.remove("pressed");
}, 100);

}




// jaki event w "" i potem jaka funkcje // developer.mozilla.org
// wybierz z dokumentu selector button i na nim odpal listener na zdarzenie click i uruchom funkcje handle click jak to sie stanie
//mozna ta funkcje z dolu wkleic w miejsce wyzej handleClick tylko bez nazwy wlasnej

//function handleClick() {
//  alert("I got clicked!");
//}
