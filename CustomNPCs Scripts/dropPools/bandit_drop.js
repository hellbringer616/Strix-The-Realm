//Loads a seperate API, in this case Itemizers ItemService
var itemService = Java.type("com.onaple.itemizer.utils.ItemService");
//Anything within the brackets runs on the death of an NPC
function died(event) {
    var playerName = event.source.getName(); //gets the interacting players name
    var rng = Math.floor((Math.random() * 100) + 1); //generates a random number between 1 and 100
    var bones = itemService.retrieve("800",1)
    var pool = itemService.fetch("1")//fetches an item from the itemizer item pool string of pool ID

    function getRandomInt(min,max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min
    }
    
    ///*/// if rng greater than or equal to 30 do some math to get the amount of coins given to the player.
        if(rng >= 30){
          var econLoot = Math.floor(((Math.random() / 2) * 10) + 3); //generates a number between 3 and 8
            event.npc.executeCommand("adminpay " + playerName + " " + econLoot + ""); //give the killing player the resulting income
        }
    ///*///

      //Instanciate the item at the location where the NPC dies
        itemService.instanciate(bones,event.npc.getWorld().getName(),event.npc.getBlockX(),event.npc.getBlockY(),event.npc.getBlockZ()); //create dropped item at location
        itemService.instanciate(pool,event.npc.getWorld().getName(),event.npc.getBlockX(),event.npc.getBlockY(),event.npc.getBlockZ()); //create dropped item at location
}
