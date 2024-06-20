let startScreen = document.querySelector(".welcome")
let startButton = document.querySelector(".start")


let freetimeScreen = document.querySelector(".freetime")
    let relaxButton = document.querySelector(".relax")
    let ponderButton = document.querySelector(".ponder")
    let aloneButton = document.querySelector(".alone")
    let poloButton = document.querySelector(".polo")

let treatScreen = document.querySelector(".treat")
    let goldenButton = document.querySelector(".golden")
    let peasantButton = document.querySelector(".peasant")
    let badlyButton = document.querySelector(".badly")
    let trashButton = document.querySelector(".trash")

let foodScreen = document.querySelector(".food")
    let bananasButton = document.querySelector(".bananas")
    let grapesButton = document.querySelector(".grapes")
    let icecreamButton = document.querySelector(".icecream")
    let escargotButton = document.querySelector(".escargot")

let workScreen = document.querySelector(".work")
    let anywhereButton = document.querySelector(".anywhere")
    let colisuemButton = document.querySelector(".colisuem")
    let coldButton = document.querySelector(".cold")
    let officeButton = document.querySelector(".office")
//values for the end result
let ogPeely = 0;
let romanPeely = 0;
let coldPeely = 0;
let fancyPeely = 0;
//
let resultScreen = document.querySelector(".result")
let submitButton = document.querySelector(".check")
let resultsText = document.querySelector(".results")



startButton.addEventListener("click", function() {
  startScreen.style.display = "none";
  freetimeScreen.style = "display:block";
});

// First screen, button listeners.
relaxButton.addEventListener('click', function() {
    freetimeScreen.style = 'display: none;'
    treatScreen.style.display = "block";
     
});

ponderButton.addEventListener('click', function() {
    freetimeScreen.style = 'display: none;'
    treatScreen.style.display = "block";
    
});

aloneButton.addEventListener('click', function() {
    freetimeScreen.style = 'display: none;'
    treatScreen.style.display = "block";
});

poloButton.addEventListener('click', function() {
    freetimeScreen.style = 'display: none;'
    treatScreen.style.display = "block";
});
// Second screen.

goldenButton.addEventListener('click', function() {
    foodScreen.style.display = "block";
    treatScreen.style.display = "none";
});

peasantButton.addEventListener('click', function() {
    foodScreen.style.display = "block";
    treatScreen.style.display = "none";
});

badlyButton.addEventListener('click', function() {
    foodScreen.style.display = "block";
    treatScreen.style.display = "none";
});

trashButton.addEventListener('click', function() {
    foodScreen.style.display = "block";
    treatScreen.style.display = "none";
});

// third screen

bananasButton.addEventListener('click', function() {
    workScreen.style.display = "block";
    foodScreen.style.display = "none";
});

grapesButton.addEventListener('click', function() {
    workScreen.style.display = "block";
    foodScreen.style.display = "none";
});


icecreamButton.addEventListener('click', function() {
    workScreen.style.display = "block";
    foodScreen.style.display = "none";
});


escargotButton.addEventListener('click', function() {
    workScreen.style.display = "block";
    foodScreen.style.display = "none";
});

// fourth screen 
anywhereButton.addEventListener("click", function(){
    resultScreen.style.display = "block";
    workScreen.style.display = "none";
    ogPeely = 1;
});


colisuemButton.addEventListener("click", function(){
    resultScreen.style.display = "block";
    workScreen.style.display = "none";
    romanPeely = 1; 
});


coldButton.addEventListener("click", function(){
    resultScreen.style.display = "block";
    workScreen.style.display = "none";
    coldPeely = 1; 
});


officeButton.addEventListener("click", function(){
    resultScreen.style.display = "block";
    workScreen.style.display = "none";
    fancyPeely = 1;
});


// results screen text

submitButton.addEventListener("click", function(){
    resultsText.style.display = "block";
    if (ogPeely=== 1 ) {
        resultsText.innerHTML = "You're OG Peely! You like to play it safe, and are the typical person."
    }
    else if (romanPeely === 1 ) {
        resultsText.innerHTML = "You're Roman Peely! You're an old fashioned person, and are an uncommon person."
    }
    else if (coldPeely === 1 ) {
        resultsText.innerHTML = "You're Frost Peely! You're a loner, and enjoy your alone time. You are a rare person."
    }
    else if (fancyPeely=== 1 ) {
        resultsText.innerHTML = "You're Fancy Peely! You're a very sophisticated person, and kind of snobby. You're a mythical person."
    }
});




    








