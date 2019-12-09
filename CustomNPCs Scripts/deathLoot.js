//Loads a seperate API, in this case Itemizers ItemService
var itemService = Java.type("com.onaple.itemizer.utils.ItemService");
//Anything within the brackets runs on the death of an NPC
function died(event) {
//retrieve an itemizer item
var item = itemService.retrieve("800",1)//string of item ID, and quantity to receive [Bones, quantity of 1]
var uid = event.source.getUUID(); //get UUID of player that killed the NPC.
var econLoot = 3 //must be an integer.

  itemService.instanciate(item,event.npc.getWorld().getName(),event.npc.getBlockX(),event.npc.getBlockY(),event.npc.getBlockZ()); // Instanciate the item at the location where the NPC dies
  spongeEconomyDeposit(uid,econLoot) //Depoist a value into the players account through Sponge Economy Service; see bindings.js for details
  event.source.message("You've received " + econLoot + " coins")
}
