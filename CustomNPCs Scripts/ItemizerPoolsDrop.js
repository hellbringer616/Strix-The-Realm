//Loads a seperate API, in this case Itemizers ItemService
var itemService = Java.type("com.onaple.itemizer.utils.ItemService");
//Anything within the brackets runs on the death of an NPC
function dies(event) {
//fetch the pool at each death
var item = itemService.fetch(1)
  // Instanciate the item at the location where the NPC dies
itemService.instanciate(item,event.npc.getWorld().getName(),event.npc.getBlockX(),event.npc.getBlockY(),event.npc.getBlockZ());
}
