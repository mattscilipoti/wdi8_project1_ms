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
    for (var i = 0; i < squares.length; i++) {
        squares[i].addEventListener('click', function(){
          for (var i = 0; i < 5; i++) {
            if (guesses < 2) {
              this.style.background = "white";
            } else {
              this.style.background = "black";
            }
          }
          guesses += 1;
        });
    }
}


revealSquare();



// squares[i].addEventListener('mouseout', function() {
//   this.style.background = "black";
// });
