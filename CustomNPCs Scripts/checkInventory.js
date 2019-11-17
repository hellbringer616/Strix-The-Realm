function interact(event) {
  var inInventory = event.player.getInventory().getItems(); //gets an array of items from the players inventory
  var playerName = event.player.getName(); //gets interacting players name

  //*// for loop to run through the players inventory array and check for any items matching the word "Pick" in the name
  for(var i = 0; i < inInventory.length; i++) {
    if(inInventory[i].displayName.indexOf("Pick") != -1){
      var hasPick = 0
    }
  }
  //*//

  //**// if the player does not have a pickaxe in their inventory; retrieve itemizer item.
  if(hasPick != 0){
    event.npc.executeCommand("retrieve 1000 1 " + playerName +"");
    var hasPick = 1
  //**//
  }else{
    event.npc.say("You already have a pick");
  }
}
