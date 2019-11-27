//Loads a seperate API, in this case Itemizers ItemService
var itemService = Java.type("com.onaple.itemizer.utils.ItemService");

function interact(event) {

  if(event.player.hasActiveQuest(17) && itemService.hasItem(player,"22",1)){
    event.player.showDialog(49,"Josiah Cadwell"); //opens a dialog window for the player
    var ironIngot = event.player.getInventory().getItems()displayName.indexOf("Iron Ingot"); //should get the iItemStack of the item
    event.player.removeItem(ironIngot,1); //should remove the item.
    var playerName = event.player.getName(); //gets players name
    event.npc.executeCommand("retreive 9501 "+ playerName + ""); //gives an itemizer item
    event.player.removeQuest(17); //removes a quest from the player
    event.player.finishQuest(17); //completes a quest
    event.player.startQuest(18); //starts a quest
  }else{
    event.player.showDialog(48,"Josiah Cadwell") //opens a dialog window for the player
  }
}
