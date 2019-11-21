//Loads a seperate API, in this case Itemizers ItemService
var itemService = Java.type("com.onaple.itemizer.utils.ItemService");
//Anything within the brackets runs on the death of an NPC
function dies(event) {
//retrieve an itemizer item
var item = itemService.retrieve("1",1)//string of item ID, and quantity to receive
  // Instanciate the item at the location where the NPC dies
itemService.instanciate(item,event.npc.getWorld().getName(),event.npc.getBlockX(),event.npc.getBlockY(),event.npc.getBlockZ());
}
