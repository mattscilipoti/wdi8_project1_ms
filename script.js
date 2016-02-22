
  // one.addEventListener("click", function() {
  //   one.style.background = "red";
  // });

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
