
function buildBoard () {
  var cards = [];

  for (var i = 1; i < 10; i++) {
    cards.push(i, i);
  }
  for(var i = 0; i < cards.length; i++){
    document.getElementById('container').innerHTML += '<div class="square" id="square_'+[i]+'"></div>';
    document.getElementById('square_'+[i]).innerHTML += cards[i];
  }
}

function playGame () {
    var pickedCards = [];
    var squares = document.querySelectorAll(".square");
      for (var i = 0; i < squares.length; i++) {
          squares[i].addEventListener('click', function(){
                this.style.background = "white";

                if (pickedCards.length === 0) {
                  pickedCards.push({id: this.id, text: this.innerHTML});
                }
                else if (pickedCards.length === 1) {
                  pickedCards.push({id: this.id, text: this.innerHTML});

                    if (pickedCards[0].text === pickedCards[1].text) {
                        console.log("match");
                        pickedCards = [];
                    }
                    else {
                      console.log("no match");
                      var guess1 = document.getElementById(pickedCards[0].id);
                      var guess2 = document.getElementById(pickedCards[1].id);
                      setTimeout(function() {
                        guess1.style.background = "black";
                        guess2.style.background = "black";
                      }, 500);
                      pickedCards = [];
                    }  // end condition: no match
                }  // end condition: second card picked
          });  // end function: eventListener
      } // end loop over all squares
}   //end function: playGame


buildBoard();
playGame();
