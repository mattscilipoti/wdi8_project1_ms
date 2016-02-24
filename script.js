var cards = [];
var deckSize;
// var deckSize = prompt("How many cards do you want to play with?");

document.querySelector(".info_box").innerHTML = '<form id="form"><input type="text" id="color-field"></input><button id="set-color">Set Color</button></form>';



var button = document.querySelector("#set-color");
var color_field = document.querySelector("#color-field");

button.addEventListener("click", function()
  {
    deckSize = color_field.value;
    buildBoard();
  });


// 
// color_field.addEventListener("keypress", function(e){
//   if (13 == e.keyCode) {
//    deckSize = color_field.value;
//   }
// });



function buildBoard () {

  for (var i = 1; i <= deckSize/2; i++) {
    cards.push(i, i);
  }
  cards.sort(function(){
    var randomValue = Math.random();
    if(randomValue > 0.5){
      return 1;
    }else{
      return -1;
    }
  });
  for(var i = 0; i < cards.length; i++){
    document.querySelector('.game_board').innerHTML += '<div class="square" id="square_'+[i]+'"></div>';
    document.getElementById('square_'+[i]).innerHTML += cards[i];
  }
}
function playGame () {
    var pickedCards = [];
    var matchedCards = 0;
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
                        matchedCards+=2;
                        if (matchedCards === cards.length) {
                          document.querySelector(".info_box").innerHTML = '<p>You Win!</p>';
                        }
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

// buildBoard();
playGame();
