//Loads a seperate API, in this case Itemizers ItemService
var itemService = Java.type("com.onaple.itemizer.utils.ItemService");
//Anything within the brackets runs on the death of an NPC
function died(event) {
//retrieve an itemizer item
var killerName = event.source.getName();
var item = itemService.retrieve("800",1)//string of item ID, and quantity to receive [Bones, quantity of 1]
var econLoot = 3
  // Instanciate the item at the location where the NPC dies
  itemService.instanciate(item,event.npc.getWorld().getName(),event.npc.getBlockX(),event.npc.getBlockY(),event.npc.getBlockZ());
  event.npc.executeCommand("adminpay " + killerName + " " + econLoot); //play the player a value of Total Economey currency
}
