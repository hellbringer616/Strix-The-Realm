//Anything within the brackets runs on the death of an NPC
function died(event) {
    var uid = event.source.getUUID(); //get UUID of player that killed the NPC.
    var rng = Math.floor((Math.random() * 100) + 1); //generates a random number between 1 and 100
    var bones = itemizerItemService.retrieve("800",1);
    var pool0 = itemizerItemService.fetch("1");//fetches an item from the itemizer item pool string of pool ID

    ///*/// if rng greater than or equal to 30 do some math to get the amount of coins given to the player.
        if(rng >= 30){
              var econLoot = getRandomInt(5,25)
                spongeEconomyDeposit(uid,econLoot) //Depoist a value into the players account through Sponge Economy Service; see bindings.js for details
                event.source.message("You've received " + econLoot + " coins")
        }
    ///*///

      //Instanciate the item at the location where the NPC dies
        itemizerItemService.instanciate(bones,event.npc.getWorld().getName(),event.npc.getBlockX(),event.npc.getBlockY(),event.npc.getBlockZ()); //create dropped item at location

        //checks if pool0 returns an item, if yes perform item drop.
        if(pool0){
          itemizerItemService.instanciate(pool0,event.npc.getWorld().getName(),event.npc.getBlockX(),event.npc.getBlockY(),event.npc.getBlockZ()); //create dropped item at location
        }
}
