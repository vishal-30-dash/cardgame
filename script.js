var myCards = document.getElementById('container');
var resultsArray = [];
var counter = 0;
var text = document.getElementById('text');
var seconds = 0; 
var tens = 0; 
var appendTens = document.getElementById("tens");
var appendSeconds = document.getElementById("seconds");
var Interval ;
var images = [
  'first', 
  'sec', 
  'the', 
  'for', 
  'five'
];
var clone = images.slice(0); // duplicate array
console.log(clone);
var cards = images.concat(clone); // merge to arrays 
console.log(cards)

// Shufffel function
function shuffle(o){
  for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i],   o[i] = o[j], o[j] = x);
  console.log(o)
  return o;
}
shuffle(cards);
for (var i = 0; i < cards.length; i++) {
  card = document.createElement('div');
  card.dataset.item = cards[i];
  // console.log(card.dataset.item);
  card.dataset.view = "card";
  myCards.appendChild(card);
  console.log(myCards);
  card.onclick = function () {
    if (this.className != 'flipped' && this.className != 'correct'){
        this.className = 'flipped';
        var result = this.dataset.item;
        console.log(result)
        resultsArray.push(result);
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }
    if (resultsArray.length > 1) {
      if (resultsArray[0] === resultsArray[1]) {
        check("correct");
        counter ++;
        console.log(counter);
        win();
        resultsArray = [];
      } else {
        check("reverse");
        resultsArray = [];
      }
    }
  }
};
var check = function(className) {
  var x = document.getElementsByClassName("flipped");
  console.log(x);
  setTimeout(function(){
    for(var i = (x.length - 1); i >= 0; i--) {
      x[i].className = className;
    }
  },500);
  // console.log(win());
}
var win = function () {
  if(counter === 5) {
    $('#modal').modal('show');
    setTimeout(function(){
      window.location ="index.html";
    },2000);
    clearInterval(Interval);
    text.innerHTML = "Your time was " + seconds + ":" + tens;
  } 
  console.log(counter);
}
function startTimer () {
  tens++;    
  if(tens < 9){
    appendTens.innerHTML = "0" + tens;
  }
  if (tens > 9){
    appendTens.innerHTML = tens;  
  } 
  if (tens > 99) {
    seconds++;
    appendSeconds.innerHTML = "0" + seconds;
    tens = 0;
    appendTens.innerHTML = "0" + 0;
  }
  if (seconds > 9){
    appendSeconds.innerHTML = seconds;
  }
  
}

