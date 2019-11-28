//Loads a seperate API, in this case Itemizers ItemService
var itemService = Java.type("com.onaple.itemizer.utils.ItemService");
//Anything within the brackets runs on the death of an NPC
function died(event) {
//retrieve an itemizer item
var item = itemService.fetch("1")//fetches an item from the itemizer item pool string of pool ID
  //Instanciate the item at the location where the NPC dies
itemService.instanciate(item,event.npc.getWorld().getName(),event.npc.getBlockX(),event.npc.getBlockY(),event.npc.getBlockZ());
}
