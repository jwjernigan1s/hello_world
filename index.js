
var hand = 1;
var busted = false;

function hitFunction() {
  var output;
  hand++;
  if(hand>21){
      output="busted " + hand;
  }else{
      output= hand;
  }
  document.getElementById("demo").innerHTML = output;
} 
