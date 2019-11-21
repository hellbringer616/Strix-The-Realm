//Loads a seperate API, in this case Itemizers ItemService
var itemService = Java.type("com.onaple.itemizer.utils.ItemService");
//Anything within the brackets runs on the death of an NPC
function dies(event) {
  var item1 event.npc.tempdata.get("item1");
  var quantity1 event.npc.tempdata.get("quantity1");
//retrieve an itemizer item
  var drop1 = itemService.retrieve("1",1)//string of item ID, and quantity to receive
  // Instanciate the item at the location where the NPC dies
  function dropItem(retrieve){
    itemService.instanciate(drop1,event.npc.getWorld().getName(),event.npc.getBlockX(),event.npc.getBlockY(),event.npc.getBlockZ());
  }
}
