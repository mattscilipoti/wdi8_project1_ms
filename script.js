var cards = [];
var guesses = 0;
var pickedCards = [];

for (var i = 1; i < 10; i++) {
  cards.push(i, i);
}

for(var i = 0; i < cards.length; i++){
  document.getElementById('container').innerHTML += '<div class="square" id="square_'+i+'"></div>';
}
for(var i = 0; i < cards.length; i++){
  document.getElementById('square_'+i).innerHTML += cards[i];
}


function revealSquare (){
    var squares = document.querySelectorAll(".square");
      for (var i = 0; i < squares.length; i++) {
          squares[i].addEventListener('click', function(){
                this.style.background = "white";
                guesses += 1;
                // pickedCards.push(this.innerHTML);

                if (pickedCards.length === 0) {
                  pickedCards.push(this.innerHTML);
                }
                else if (pickedCards.length === 1) {
                  pickedCards.push(this.innerHTML);
                  if (pickedCards[1] === pickedCards[2]) {
                    pickedCards = [];
                  }
                  else {
                    pickedCards = [];
                  }
                }



          });  // end eventListener function

      } // end loop over all squares
}   //end revealSquare function



  revealSquare();
