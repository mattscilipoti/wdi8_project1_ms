var cards = [];
var guesses = 0;


for (var i = 0; i < 25; i++) {
  cards.push(i);
}

for(var i = 0; i < cards.length; i++){
  document.getElementById('container').innerHTML += '<div class="square" id="square_'+i+'"></div>';
}
for(var i = 0; i < cards.length; i++){
  document.getElementById('square_'+i).innerHTML += '<p>square </p>'+i;
}




function revealSquare (){
  var squares = document.querySelectorAll(".square");

if (guesses < 3) {

    for (var i = 0; i < squares.length; i++) {
        squares[i].addEventListener('click', function(){
              this.style.background = "white";
              guesses += 1;
        });  // end eventListener function

    } // end loop over all squares

}

else {
  squares.style.background = "black";
}



}   //end revealSquare function


revealSquare();
