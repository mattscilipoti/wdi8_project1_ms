var cards = [];
var pickedCards = [];

for (var i = 1; i < 10; i++) {
  cards.push(i, i);
}

for(var i = 0; i < cards.length; i++){
  document.getElementById('container').innerHTML += '<div class="square" id="square_'+[i]+'"></div>';
}
for(var i = 0; i < cards.length; i++){
  document.getElementById('square_'+[i]).innerHTML += cards[i];
}


function chooseCards (){
    var squares = document.querySelectorAll(".square");
      for (var i = 0; i < squares.length; i++) {
          squares[i].addEventListener('click', function(){
                this.style.background = "white";

                if (pickedCards.length === 0) {
                  pickedCards.push(this.innerHTML);
                }
                else if (pickedCards.length === 1) {
                  pickedCards.push(this.innerHTML);
                    if (pickedCards[0] === pickedCards[1]) {
                      console.log("match");
                      pickedCards = [];
                    }
                    else {
                      console.log("no match");
                      var guess1 = document.getElementById('square_'+pickedCards[0].innerHTML);
                      var guess2 = document.getElementById('square_'+pickedCards[1].innerHTML);

                      guess1.style.background = "black";
                      guess2.style.background = "black";






                    pickedCards = [];
                    }
                }



          });  // end eventListener function

      } // end loop over all squares
}   //end revealSquare function



  chooseCards();
