function init(event) {
   var playerNamesArray = [];
   event.npc.tempdata.put("playerNamesArray",playerNamesArray); //opens a blank array and sets it to string; needed to retrieve global data
}

function damaged(event) {
  if(event.source && event.source.getType() == EntityType_PLAYER) {
      var playerArray = event.npc.tempdata.get("playerNamesArray"); //retrieves global data from string tag
      var playerName = event.source.getName();
      var index = playerArray.indexOf(playerName); //creates index of playernames
     if(index == -1){
        playerArray.push(playerName);
     }
   }
}

//On NPC death
function died(event) {
    //set variables to get the Player Name that last damaged the NPC and the NPC's Maximum Health

    var playerArray = event.npc.tempdata.get("playerNamesArray");
    var npcExp = event.npc.inventory.getExpMax();
    //if the death event source and it's type are PLAYER run the command, else null
        for(var i = 0; i < playerArray.length; i++) {
        var xp = npcExp / playerArray.length;
        event.npc.executeCommand("nadmin exp add " +  playerArray[i] + " " + xp + " PVE Combat");
  }
}
