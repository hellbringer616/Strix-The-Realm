function meleeAttack(event){
  var dam = getRandomInt(2,4) //gets a random number between two values; See getRandomInt in bindings.js
  event.damage(dam) //sets event damage
}

function rangedLaunched(event){
  var dam = getRandomInt(2,4) //gets a random number between two values; See getRandomInt in bindings.js
  event.damage(dam) //sets event damage
}
