//Loads a seperate API, in this case Itemizers ItemService
var itemService = Java.type("com.onaple.itemizer.utils.ItemService");

function interact(event) {
  var spongePlayer = event.player.getMCEntity(); //gets forge/sponge player entity
  var playerName = event.player.getName(); //gets players name
  var hasIronIngot = itemService.hasItem(spongePlayer,"22",1)//checks the players inventory for itemizer item id 22 with quantity of 1

      if(event.player.hasActiveQuest(17) && hasIronIngot){
        event.player.showDialog(49,"Josiah Cadwell"); //opens a dialog window for the player
        itemservice.removeItem(spongePlayer,"22",1); //removes itemizer item with id 22 quantity 1 from players inventory
        event.npc.executeCommand("retreive 9501 "+ playerName + ""); //gives an itemizer item
        event.player.removeQuest(17); //removes a quest from the player
        event.player.finishQuest(17); //completes a quest
        event.player.startQuest(18); //starts a quest
      }else{
        event.player.showDialog(48,"Josiah Cadwell") //opens a dialog window for the player
      }
}
