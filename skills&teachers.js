const searchBox = document.getElementById("searchBox");
const cards = document.querySelectorAll(".card");
const noResults = document.getElementById("noResults");

searchBox.addEventListener("input", function(){

let searchValue = searchBox.value.toLowerCase();
let visibleCards = 0;

cards.forEach(function(card){

let text = card.textContent.toLowerCase();

if(text.includes(searchValue)){
card.style.display = "flex";
visibleCards++;
}else{
card.style.display = "none";
}

});

if(visibleCards === 0){
noResults.style.display = "block";
}else{
noResults.style.display = "none";
}

});