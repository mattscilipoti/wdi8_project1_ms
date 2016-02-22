var cards = [];


for (var i = 0; i < 25; i++) {
  cards.push(i);
}

for(var i = 0; i < cards.length; i++){
  document.getElementById('container').innerHTML += '<div class="square" id="square_'+i+'"></div>';
}
for(var i = 0; i < cards.length; i++){
  document.getElementById('square_'+i).innerHTML += '<p>square </p>'+i;
}




function colorOnMouseover (){
  var squares = document.querySelectorAll(".square");
    for (var i = 0; i < squares.length; i++) {
        squares[i].addEventListener('mouseover', function(){
          this.style.background = "red";
        });
        squares[i].addEventListener('mouseout', function() {
          this.style.background = "grey";
        });
    }
}
colorOnMouseover();
