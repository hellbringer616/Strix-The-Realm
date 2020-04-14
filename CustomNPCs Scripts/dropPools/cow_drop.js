//Anything within the brackets runs on the death of an NPC
function died(event) {
    var bones = itemizerItemService.retrieve("800",1);//fetches an item from the itemizer item pool string of pool ID
    var item1 = itemizerItemService.retrieve("41",1);//fetches an item from the itemizer item pool string of pool ID
    var item2 = itemizerItemService.retrieve("500",1);//fetches an item from the itemizer item pool string of pool ID

      //Instanciate the item at the location where the NPC dies
        itemizerItemService.instanciate(bones,event.npc.getWorld().getName(),event.npc.getBlockX(),event.npc.getBlockY(),event.npc.getBlockZ()); //create dropped item at location
        itemizerItemService.instanciate(item1,event.npc.getWorld().getName(),event.npc.getBlockX(),event.npc.getBlockY(),event.npc.getBlockZ()); //create dropped item at location
        itemizerItemService.instanciate(item2,event.npc.getWorld().getName(),event.npc.getBlockX(),event.npc.getBlockY(),event.npc.getBlockZ()); //create dropped item at location
}
