//Loads a seperate API, in this case Itemizers ItemService
var itemService = Java.type("com.onaple.itemizer.utils.ItemService");
//Anything within the brackets runs on the death of an NPC
function died(event) {
var playerName = event.source.getName(); //gets the interacting players name
var bones = itemService.retrieve("800",1)
var pool = itemService.fetch("1")//fetches an item from the itemizer item pool string of pool ID
  //Instanciate the item at the location where the NPC dies
event.npc.executeCommand("adminpay " + playerName + " 3");
itemService.instanciate(bones,event.npc.getWorld().getName(),event.npc.getBlockX(),event.npc.getBlockY(),event.npc.getBlockZ()); //create dropped item at location
itemService.instanciate(pool,event.npc.getWorld().getName(),event.npc.getBlockX(),event.npc.getBlockY(),event.npc.getBlockZ()); //create dropped item at location
}
