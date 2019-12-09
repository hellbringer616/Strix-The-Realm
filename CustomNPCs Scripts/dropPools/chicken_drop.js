//Loads a seperate API, in this case Itemizers ItemService
var itemService = Java.type("com.onaple.itemizer.utils.ItemService");
//Anything within the brackets runs on the death of an NPC
function died(event) {
    var bones = itemService.retrieve("800",1);//fetches an item from the itemizer item pool string of pool ID
    var item1 = itemService.retrieve("501",1);//fetches an item from the itemizer item pool string of pool ID
    var item2 = itemService.fetch("3");//fetches an item from the itemizer item pool string of pool ID

      //Instanciate the item at the location where the NPC dies
        itemService.instanciate(bones,event.npc.getWorld().getName(),event.npc.getBlockX(),event.npc.getBlockY(),event.npc.getBlockZ()); //create dropped item at location
        itemService.instanciate(item1,event.npc.getWorld().getName(),event.npc.getBlockX(),event.npc.getBlockY(),event.npc.getBlockZ()); //create dropped item at location
        itemService.instanciate(item2,event.npc.getWorld().getName(),event.npc.getBlockX(),event.npc.getBlockY(),event.npc.getBlockZ()); //create dropped item at location
}
