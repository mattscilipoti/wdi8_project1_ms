var cards = [];
var deckSize;

function restartButton() {
document.querySelector("#restart").addEventListener("click", function() {
    document.querySelector(".game_board").innerHTML = '';
    document.querySelector(".info_box").innerHTML = '';
    document.querySelector(".results").innerHTML = '';

    deckSize = 0;
    cards = [];
    initialize();
  });
}
function initialize() {
    document.querySelector(".info_box").innerHTML = '<p>HOW MANY SQUARES?</p><input type="text" id="userInput" autocomplete="off" autofocus></input>';

    userInput.focus();
    document.querySelector("#userInput").addEventListener("keypress", function(e){
      if (13 == e.keyCode) {
        // deckSize = 0;
        deckSize = document.querySelector("#userInput").value;
        document.querySelector(".info_box").innerHTML = '';
        buildBoard();
        playGame();
      }
    });
}

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
    var guesses = 0;
    var squares = document.querySelectorAll(".square");
      for (var i = 0; i < squares.length; i++) {
          squares[i].addEventListener('click', function(){
                this.style.background = "#ff7473";
                guesses++;
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
                          document.querySelector(".info_box").innerHTML = '<p>YOU WIN!</p><p>'+Math.round((deckSize/guesses)*100)+'% EFFICIENCY</p>';
                        }
                    }
                    else {
                      console.log("no match");
                      var guess1 = document.getElementById(pickedCards[0].id);
                      var guess2 = document.getElementById(pickedCards[1].id);
                      setTimeout(function() {
                        guess1.style.background = '#ffc952';
                        guess2.style.background = '#ffc952';
                      }, 400);
                      pickedCards = [];
                    }  // end condition: no match
                }  // end condition: second card picked
          });  // end function: eventListener
      } // end loop over all squares
}   //end function: playGame

restartButton();
initialize();
