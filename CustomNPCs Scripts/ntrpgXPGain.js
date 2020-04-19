//at NPC initialization
function init(event) {
   var playerNamesArray = [];
   event.npc.tempdata.put("playerNamesArray",playerNamesArray); //opens a blank array and sets it to string; needed to retrieve global data
}
//when NPC is damaged
function damaged(event) {
  //checks if the event source and it's type are player
  if(event.source && event.source.getType() == EntityType_PLAYER) {
      var playerArray = event.npc.tempdata.get("playerNamesArray"); //retrieves global data from string tag
      var playerName = event.source.getName(); //gets playerName of source
      var index = playerArray.indexOf(playerName); //creates index of playernames
     //if player name is missing from array, add player name to array
     if(index == -1){
        playerArray.push(playerName);
     }
   }
}

//On NPC death
function died(event) {
    var playerArray = event.npc.tempdata.get("playerNamesArray"); //retrieves global data from string tag
    var npcExp = event.npc.inventory.getExpMax(); //get maximum exp set on npc
        //runs a command to add exp to the players class a number of times equal to the lenth of the array.
        for(var i = 0; i < playerArray.length; i++) {
        var xp = npcExp / playerArray.length;
        event.npc.executeCommand("nadmin exp " +  playerArray[i] + " " + xp + " PVE Combat");
  }
}
