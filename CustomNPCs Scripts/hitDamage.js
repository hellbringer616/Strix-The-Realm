function meleeAttack(event){
  var meleeMin = event.npc.tempdata.get("meleeMin")
  var meleeMax = event.npc.tempdata.get("meleeMax")
  var hitDamage = getRandomInt(meleeMin,meleeMax) //gets a random number between two values; See getRandomInt in bindings.js
    event.damage(hitDamage) //sets event damage
}

function rangedLaunched(event){
  var rangeMin = event.npc.tempdata.get("rangeMin")
  var rangeMax = event.npc.tempdata.get("rangeMax")
  var hitDamage = getRandomInt(rangeMin,rangeMax) //gets a random number between two values; See getRandomInt in bindings.js
    event.damage(hitDamage) //sets event damage
}
